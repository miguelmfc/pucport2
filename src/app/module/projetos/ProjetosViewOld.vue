<template>
  <div class="terminal crt projetos-retro">
    <h2>PROJETOS</h2>

    <div class="cards-row projetos-retro__row">
      <article
        v-for="proj in projetos"
        :key="proj.id"
        class="card-ascii crt projetos-retro__card"
      >
        <div class="projetos-retro__date">[{{ proj.date }}]</div>
        <h3 class="projetos-retro__title">{{ proj.title }}</h3>
        <p class="projetos-retro__desc">{{ proj.description }}</p>
        <p class="projetos-retro__tech">{{ proj.tech }}</p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import "../../../assets/crt.css";

interface Projeto {
  id: number;
  date: string;
  title: string;
  description: string;
  tech: string;
}

const projetos: Projeto[] = [
  {
    id: 1,
    date: "2025",
    title: "Sistema de loja de roupas",
    description: "Sistema para Gerenciamento de estoque e vendas de uma loja de roupas",
    tech: "Vue · TypeScript · Vite · Java · PostgreSQL",
  },
  {
    id: 2,
    date: "2023",
    title: "Site para adoção de cachorros",
    description:
      "Site desenvolvido em curso pela PUC Minas para o compartilhamento da adoção de cachorros",
    tech: "HTML · CSS · JavaScript",
  },
  {
    id: 3,
    date: "2022",
    title: "Sistema Restaurante",
    description:
      "Sistema básico de um restaurante que recebe e descreve informações de algum pedido. Neste projeto, foram realizados testes unitários para validar as funcionalidades das classes Pedido e Pizza.",
    tech: "Java",
  },
];
</script>

<style scoped>
.projetos-retro__row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
}

.projetos-retro__card {
  --w: 100%;
  flex: 1 1 280px;
  min-width: 260px;
  max-width: 52ch;
}

.projetos-retro__date {
  font-size: 0.85rem;
  opacity: 0.9;
  margin-bottom: 0.35rem;
}

.projetos-retro__title {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin: 0 0 0.5rem;
}

.projetos-retro__desc {
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 0 0.5rem;
}

.projetos-retro__tech {
  font-size: 0.85rem;
  margin: 0;
  opacity: 0.9;
}
</style>
