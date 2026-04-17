<template>
  <section class="sobre-mim modern-page">
    <header class="sobre-mim__header">
      <h1 class="sobre-mim__title">{{ lang === 'pt' ? 'Sobre Mim' : 'About Me' }}</h1>
      <div class="sobre-mim__lang">
        <button
          type="button"
          class="sobre-mim__lang-btn"
          :class="{ 'sobre-mim__lang-btn--active': lang === 'pt' }"
          @click="lang = 'pt'"
        >
          PT
        </button>
        <button
          type="button"
          class="sobre-mim__lang-btn"
          :class="{ 'sobre-mim__lang-btn--active': lang === 'en' }"
          @click="lang = 'en'"
        >
          EN
        </button>
      </div>
    </header>

    <div class="sobre-mim__content">
      <p v-for="(p, i) in paragraphs" :key="i" class="sobre-mim__p">
        {{ p }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const lang = ref<'pt' | 'en'>('pt');

const content = {
  pt: [
  'Sou um estudante de Engenharia de Software pela PUC Minas. Sempre me interessei pela área de computação. Atualmente me aprofudando na área de cibersegurança, tenho experiência como analista de qualidade e analista de processos',

'Estou sempre buscando me aprofundar na área.'
  ],
  en: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Curabitur pretium tincidunt lacus. Nulla facilisi. Ut convallis, sem sit amet interdum consectetuer, metus augue aliquam dui, in sodales elit erat vitae risus.',
  ],
};

const paragraphs = computed(() => content[lang.value]);
</script>

<style scoped>
.modern-page {
  max-width: 720px;
  margin: 0 auto;
}

.sobre-mim__header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.sobre-mim__title {
  margin: 0;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
}

.sobre-mim__lang {
  display: flex;
  gap: 0.25rem;
}

.sobre-mim__lang-btn {
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: inherit;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s, border-color 0.2s;
}

.sobre-mim__lang-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #646cff;
}

.sobre-mim__lang-btn--active {
  background: #646cff;
  border-color: #646cff;
  color: #fff;
}

.sobre-mim__content {
  line-height: 1.7;
}

.sobre-mim__p {
  margin: 0 0 1rem;
}

.sobre-mim__p:last-child {
  margin-bottom: 0;
}

@media (max-width: 480px) {
  .sobre-mim__header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
