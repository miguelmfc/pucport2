<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from "vue";

const props = defineProps<{
  visible: boolean;
}>();

const secondsLeft = ref(10);
let interval: number | undefined;

watch(
  () => props.visible,
  (val) => {
    if (val) {
      secondsLeft.value = 10;

      interval = window.setInterval(() => {
        secondsLeft.value--;

        if (secondsLeft.value <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }
  }
);

onBeforeUnmount(() => {
  if (interval) clearInterval(interval);
});
</script>

<template>
    <div v-if="visible" class="boot crt">
      <div class="terminal">
        <p>Portifólio Miguel Martins</p>
        <p>System ready.</p>
        <br />
        <p>Starting in {{ secondsLeft }}s...</p>
        <span class="cursor">█</span>
      </div>
    </div>
  </template>

<style scoped>
.boot {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  background: #000;
}

.terminal {
  width: min(860px, 92vw);
  min-height: 260px;
  padding: 28px;
  background: #000;
  color: #00ff00;
  font-family: monospace;
  font-size: 16px;
  line-height: 1.5;
  text-shadow: 0 0 6px rgba(0, 255, 0, 0.55);
  border: 2px solid rgba(0, 255, 0, 0.45);
  box-shadow: 0 0 24px rgba(0, 255, 0, 0.15);
}

.boot__text {
  margin: 0;
  white-space: pre-wrap;
}

.cursor {
  display: inline-block;
  animation: blink 1s steps(1) infinite;
}

.boot__hint {
  margin-top: 12px;
  opacity: 0.8;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>