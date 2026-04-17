<template>
  <div class="layout-retro crt" :class="{ 'layout-retro--amber': useAmber }">
    <main class="layout-retro__main">
      <RouterView />
    </main>

    <div class="layout-retro__sentinel" ref="sentinelRef" aria-hidden="true"></div>

    <div
      v-show="showPrompt"
      class="terminal layout-retro__prompt"
      @click="focusInput"
    >
      <div class="layout-retro__command-line">
        <span class="layout-retro__prefix">&gt; </span>
        <input
          ref="inputRef"
          v-model="command"
          type="text"
          class="layout-retro__input"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          @keydown.enter="navigate"
        />
        <span class="cursor"></span>
      </div>
    </div>

    <XmodemDownload v-if="showXmodem" @complete="onXmodemComplete" />
  </div>
</template>

<script setup lang="ts">
import "../assets/crt.css";
import XmodemDownload from "../components/XmodemDownload.vue";
import { useXmodemDownload } from "../util/xmodemDownload";

withDefaults(
  defineProps<{
    useAmber?: boolean;
  }>(),
  { useAmber: false }
);

const {
  sentinelRef,
  inputRef,
  command,
  showPrompt,
  showXmodem,
  focusInput,
  navigate,
  onXmodemComplete,
} = useXmodemDownload();
void [sentinelRef, inputRef]; /* usados no template */
</script>

<style scoped>
.layout-retro {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
}

.layout-retro__main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 1.5rem 2.5rem;
  min-height: 0; /* permite encolher para scroll */
  overflow-y: auto;
  box-sizing: border-box;
}

.layout-retro__main :deep(> *) {
  width: 100%;
  max-width: 900px;
  box-sizing: border-box;
}

.layout-retro__sentinel {
  height: 1px;
  width: 100%;
  flex-shrink: 0;
  pointer-events: none;
  visibility: hidden;
}

.layout-retro__prompt {
  flex-shrink: 0;
  align-self: center;
  width: 100%;
  max-width: 900px;
  margin: 0 1.5rem 1.5rem;
  padding: 1.25rem 1.75rem;
  box-sizing: border-box;
}

.layout-retro__command-line {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.layout-retro__prefix {
  flex-shrink: 0;
}

.layout-retro__input {
  flex: 1;
  min-width: 120px;
  background: transparent;
  border: none;
  color: inherit;
  font-family: var(--font-terminal, "IBM Plex Mono", monospace);
  font-size: inherit;
  outline: none;
}

.layout-retro__input::placeholder {
  opacity: 0.5;
}

.layout-retro__command-line .cursor {
  flex-shrink: 0;
}
</style>
