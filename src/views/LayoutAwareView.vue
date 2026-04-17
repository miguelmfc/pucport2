<template>
  <component :is="currentComponent" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import { useLayoutStore } from "../stores/layout";

const route = useRoute();
const layoutStore = useLayoutStore();

const page = computed(() => (route.meta.page as string) || "home");

const components: Record<
  string,
  { modern: ReturnType<typeof defineAsyncComponent>; retro: ReturnType<typeof defineAsyncComponent> }
> = {
  home: {
    modern: defineAsyncComponent(() => import("../views/HomeViewModern.vue")),
    retro: defineAsyncComponent(() => import("../views/HomeViewOld.vue")),
  },
  sobremim: {
    modern: defineAsyncComponent(() => import("../app/module/sobremim/SobreMimViewModern.vue")),
    retro: defineAsyncComponent(() => import("../app/module/sobremim/SobreMimViewOld.vue")),
  },
  projetos: {
    modern: defineAsyncComponent(() => import("../app/module/projetos/ProjetosViewModern.vue")),
    retro: defineAsyncComponent(() => import("../app/module/projetos/ProjetosViewOld.vue")),
  },
  experiencias: {
    modern: defineAsyncComponent(() => import("../app/module/experiencias/ExperienciasViewModern.vue")),
    retro: defineAsyncComponent(() => import("../app/module/experiencias/ExperienciasViewOld.vue")),
  },
  contatos: {
    modern: defineAsyncComponent(() => import("../app/module/contatos/ContatosViewModern.vue")),
    retro: defineAsyncComponent(() => import("../app/module/contatos/ContatosViewOld.vue")),
  },
};

const currentComponent = computed(() => {
  const pair = components[page.value] ?? components.home;
  if (!pair) return null;
  return layoutStore.preferredLayout === "modern" ? pair.modern : pair.retro;
});
</script>
