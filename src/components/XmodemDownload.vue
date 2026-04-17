<template>
  <div class="xmodem-overlay" @keydown.enter="onEnter">
    <div class="terminal xmodem-box layout-retro__xmodem">
      <p class="xmodem-line">&gt; xmodem portfolio.zip</p>
      <p class="xmodem-line">Waiting for sender...</p>
      <template v-if="downloading">
        <p class="xmodem-line xmodem-status">Receiving portfolio.zip...</p>
        <div class="xmodem-bar-wrap">
          <div class="xmodem-bar" :style="{ width: progress + '%' }"></div>
        </div>
        <p class="xmodem-line xmodem-pct">{{ Math.round(progress) }}%</p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import "../assets/crt.css";

const emit = defineEmits<{ complete: [] }>();

const downloading = ref(false);
const progress = ref(0);
let animation: number | null = null;
const DURATION_MS = 5000;
const startTime = ref(0);

function onEnter() {
  if (downloading.value) return;
  startDownload();
}

function startDownload() {
  downloading.value = true;
  progress.value = 0;
  startTime.value = Date.now();

  function tick() {
    const elapsed = Date.now() - startTime.value;
    progress.value = Math.min(100, (elapsed / DURATION_MS) * 100);
    if (progress.value < 100) {
      animation = requestAnimationFrame(tick);
    } else {
      emit("complete");
    }
  }
  animation = requestAnimationFrame(tick);
}

onBeforeUnmount(() => {
  if (animation !== null) cancelAnimationFrame(animation);
});

onMounted(() => {
  // Mostra "Waiting for sender..." um instante, depois inicia a barra
  setTimeout(() => startDownload(), 600);
});
</script>

<style scoped>
.xmodem-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.92);
}

/* Segue o tema do layout retro (variáveis e bordas) */
.xmodem-box {
  min-width: 320px;
  max-width: 90vw;
  padding: 2rem 2.5rem;
  background-color: var(--terminal-bg, #0a0a0a);
  color: var(--terminal-fg, #00ff41);
  font-family: var(--font-terminal, "IBM Plex Mono", monospace);
  border: 2px solid var(--terminal-border, rgba(0, 255, 65, 0.4));
  box-shadow:
    0 0 24px var(--terminal-glow, rgba(0, 255, 65, 0.15)),
    inset 0 0 20px rgba(0, 255, 65, 0.03);
  text-shadow: 0 0 8px var(--terminal-glow, rgba(0, 255, 65, 0.5));
}

.xmodem-line {
  margin: 0.5rem 0;
}

.xmodem-status {
  margin-top: 1.25rem;
  opacity: 0.9;
}

.xmodem-bar-wrap {
  margin: 1rem 0;
  height: 24px;
  border: 2px solid var(--terminal-border, rgba(0, 255, 65, 0.4));
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.xmodem-bar {
  height: 100%;
  background: var(--terminal-fg, #00ff41);
  transition: width 0.1s linear;
}

.xmodem-pct {
  font-size: 0.9em;
  opacity: 0.85;
}
</style>
