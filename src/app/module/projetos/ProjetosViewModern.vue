<template>
  <section class="projetos modern-page">
    <h1 class="projetos__title">Projetos</h1>

    <div class="timeline">
      <article
        v-for="(item, index) in timeline"
        :key="item.id"
        class="timeline__item"
        :class="{ 'timeline__item--left': index % 2 === 0, 'timeline__item--right': index % 2 === 1 }"
      >
        <div class="timeline__marker"></div>
        <div class="timeline__card">
          <time class="timeline__date">{{ item.date }}</time>
          <h2 class="timeline__heading">{{ item.title }}</h2>
          <p class="timeline__desc">{{ item.description }}</p>
          <p class="timeline__tech">{{ item.tech }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  tech: string;
}

const timeline = ref<TimelineItem[]>([
  {
    id: 1,
    date: "2025",
    title: "Sistema de Gerenciamento de loja de roupas online",
    description:
    "Em breve...",
    tech: "Vue · TypeScript · Vite · Java · PostgreSQL",
  },
  {
    id: 2,
    date: "2023",
    title: "Calculadora Remota",
    description:
      "Este projeto demonstra o uso de Java RMI (Remote Method Invocation) para criar uma aplicação distribuída simples que permite a execução remota de operações matemáticas básicas, como soma, subtração, multiplicação e divisão",
    tech: "Java · Java RMI",
  },
  {
    id: 3,
    date: "2022",
    title: "Sistema Restaurante",
    description:
      "Sistema básico de um restaurante que recebe e descreve informações de algum pedido. Neste projeto, foram realizados testes unitários para validar as funcionalidades das classes Pedido e Pizza.",
    tech: "Java",
  },
]);
</script>

<style scoped>
.modern-page {
  max-width: 800px;
  margin: 0 auto;
}

.projetos__title {
  margin: 0 0 2rem;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
}

.timeline {
  position: relative;
  padding-left: 1.5rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #646cff, rgba(100, 108, 255, 0.2));
  border-radius: 2px;
}

.timeline__item {
  position: relative;
  padding-bottom: 2rem;
}

.timeline__item:last-child {
  padding-bottom: 0;
}

.timeline__marker {
  position: absolute;
  left: -1.5rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  margin-left: -5px;
  background: #646cff;
  border-radius: 50%;
  box-shadow: 0 0 0 3px var(--modern-bg, #242424), 0 0 0 5px #646cff;
}

.timeline__card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.timeline__card:hover {
  border-color: rgba(100, 108, 255, 0.4);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.timeline__date {
  display: inline-block;
  font-size: 0.8rem;
  color: #646cff;
  margin-bottom: 0.35rem;
}

.timeline__heading {
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
  font-weight: 600;
}

.timeline__desc {
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.timeline__tech {
  margin: 0;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

@media (min-width: 640px) {
  .timeline {
    padding-left: 0;
  }

  .timeline::before {
    left: 50%;
    margin-left: -1px;
  }

  .timeline__item {
    display: flex;
    align-items: flex-start;
    padding-bottom: 2.5rem;
  }

  .timeline__item--left .timeline__card {
    margin-right: auto;
    width: calc(50% - 2rem);
    margin-left: 0;
  }

  .timeline__item--right .timeline__card {
    margin-left: auto;
    width: calc(50% - 2rem);
    order: 1;
  }

  .timeline__marker {
    left: 50%;
    margin-left: -6px;
    flex-shrink: 0;
  }

  .timeline__item--right .timeline__marker {
    order: 0;
  }
}
</style>
