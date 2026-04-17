import { defineStore } from "pinia";
import { ref } from "vue";

export type LayoutKind = "retro" | "modern";

export const useLayoutStore = defineStore("layout", () => {
  const preferredLayout = ref<LayoutKind>("retro");
  function setPreferredLayout(layout: LayoutKind) {
    preferredLayout.value = layout;
  }
  return { preferredLayout, setPreferredLayout };
});
