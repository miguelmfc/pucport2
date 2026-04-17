<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import BootLoading from "./components/BootLoading.vue";
import RetroLayout from "./layouts/RetroLayout.vue";
import ModernLayout from "./layouts/ModernLayout.vue";
import { useLayoutStore } from "./stores/layout";
import { isBooting } from "./loading";

const route = useRoute();
const layoutStore = useLayoutStore();

const layoutName = computed(() =>
  layoutStore.preferredLayout === "modern"
    ? "modern"
    : ((route.meta.layout as string) || "retro")
);

const LayoutComponent = computed(() =>
  layoutName.value === "modern" ? ModernLayout : RetroLayout
);

const showBootLoading = computed(() => layoutName.value === "retro");

watch(
  layoutName,
  (name) => {
    document.body.classList.toggle("layout-retro-body", name === "retro");
    document.body.classList.toggle("layout-modern-body", name === "modern");
  },
  { immediate: true }
);
</script>

<template>
  <BootLoading v-if="showBootLoading" :visible="isBooting" :minDurationMs="900" />

  <component :is="LayoutComponent" />
</template>