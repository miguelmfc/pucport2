import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRouter } from "vue-router";
import { useLayoutStore } from "../stores/layout";

const routesMap: Record<string, string> = {
  home: "/",
  inicio: "/",
  "": "/",
  "sobre-mim": "/sobre-mim",
  sobre: "/sobre-mim",
  projetos: "/projetos",
  experiencias: "/experiencias",
  contatos: "/contatos",
};

export function useXmodemDownload() {
  const router = useRouter();
  const layoutStore = useLayoutStore();
  const sentinelRef = ref<HTMLElement | null>(null);
  const inputRef = ref<HTMLInputElement | null>(null);
  const showPrompt = ref(false);
  const showXmodem = ref(false);
  const command = ref("");

  let observer: IntersectionObserver | null = null;

  function focusInput() {
    inputRef.value?.focus();
  }

  function isXmodemCommand(raw: string): boolean {
    const t = raw.trim().toLowerCase();
    return t === "xmodem" || t.startsWith("xmodem ");
  }

  function navigate() {
    const raw = command.value.trim();
    const key = raw.toLowerCase();
    if (isXmodemCommand(raw)) {
      command.value = "";
      showXmodem.value = true;
      return;
    }
    const path = routesMap[key];
    if (path !== undefined) {
      router.push(path);
      command.value = "";
    } else {
      command.value = "";
    }
  }

  function onXmodemComplete() {
    showXmodem.value = false;
    layoutStore.setPreferredLayout("modern");
  }

  onMounted(() => {
    if (!sentinelRef.value) return;
    observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          showPrompt.value = e.isIntersecting;
          if (e.isIntersecting) {
            setTimeout(() => inputRef.value?.focus(), 100);
          }
        }
      },
      { root: null, rootMargin: "0px 0px 120px 0px", threshold: 0 }
    );
    observer.observe(sentinelRef.value);
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  watch(showPrompt, (visible) => {
    if (visible) setTimeout(() => inputRef.value?.focus(), 100);
  });

  return {
    sentinelRef,
    inputRef,
    command,
    showPrompt,
    showXmodem,
    focusInput,
    navigate,
    onXmodemComplete,
  };
}
