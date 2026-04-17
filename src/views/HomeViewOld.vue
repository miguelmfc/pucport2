<template>
  <div class="home-view">
    <br />
    <div class="monitor-frame crt">
      <div class="crt terminal home-section">
        <h1>Home</h1>
        <p>Bem-vindo ao meu portfólio.</p>
      </div>
      <Sobremim />
      <Projetos />
      <Experiencias />
      <Contatos />
    </div>
  </div>
</template>

<script setup lang="ts">
import "../assets/crt.css";
import Sobremim from "../app/module/sobremim/SobreMimViewOld.vue";
import Projetos from "../app/module/projetos/ProjetosViewOld.vue";
import Experiencias from "../app/module/experiencias/ExperienciasViewOld.vue";
import Contatos from "../app/module/contatos/ContatosViewOld.vue";
</script>

<style scoped>
.home-view {
  display: block;
}
.home-section.terminal {
  min-height: auto;
}
</style>
