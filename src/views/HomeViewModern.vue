<template>
  <div class="home-modern">
    <section id="sobre-mim" class="home-modern__block">
      <SobreMimViewModern />
    </section>

    <section id="experiencias" class="home-modern__block">
      <ExperienciasViewModern />
    </section>

    <section id="projetos" class="home-modern__block">
      <ProjetosViewModern />
    </section>

    <section id="contatos" class="home-modern__block">
      <ContatosViewModern />
    </section>
  </div>
</template>

<script setup lang="ts">
import SobreMimViewModern from "../app/module/sobremim/SobreMimViewModern.vue";
import ExperienciasViewModern from "../app/module/experiencias/ExperienciasViewModern.vue";
import ProjetosViewModern from "../app/module/projetos/ProjetosViewModern.vue";
import ContatosViewModern from "../app/module/contatos/ContatosViewModern.vue";
</script>

<style scoped>
.home-modern {
  max-width: 900px;
  margin: 0 auto;
}

.home-modern__intro {
  margin: 0 0 2rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.home-modern__block {
  margin-bottom: 3rem;
}

.home-modern__block:last-child {
  margin-bottom: 0;
}

.home-modern__block :deep(.modern-page) {
  max-width: none;
}
</style>
