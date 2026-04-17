<template>
  <section class="experiencias modern-page">
    <h1 class="experiencias__title">Experiências</h1>

    <div class="experiencias__grid">
      <article v-for="exp in experiencias" :key="exp.id" class="exp-card">
        <div class="exp-card__header">
          <span class="exp-card__period">{{ exp.period }}</span>
          <span class="exp-card__tag">{{ exp.tag }}</span>
        </div>
        <h2 class="exp-card__role">{{ exp.role }}</h2>
        <p class="exp-card__company">{{ exp.company }}</p>
        <p class="exp-card__desc">{{ exp.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Experiencia {
  id: number;
  period: string;
  tag: string;
  role: string;
  company: string;
  description: string;
}

const experiencias = ref<Experiencia[]>([
  {
    id: 1,
    period: "2023 – 2024",
    tag: "Processos",
    role: "Estágiario de Processos de TI",
    company: "Stellantis",
    description:
      "Desenvolvimento e manutenção " +
      "de sistemas na área de manufatura.",
  },
  {
    id: 2,
    period: "2024 – 2025",
    tag: "QA",
    role: "Estágiario de QA",
    company: "Siggaa",
    description:
      "Estagiário em qualidade de Software em aplicativo desktop e mobile.",
  },
  
    id: 3,
    period: "2024 – até o momento",
    tag: "Full-stack",
    role: "Desenvolvedor Java Junior",
    company: "Apsis Informática",
    description:
    "Desenvolvimento e manutenção " +
      "em um sistema de gestão de clínicas convêniadas que foca em praticidade e "+
      "comodidade. Este sistema é construído utilizando "+
      "tecnologias como Vue.js no frontend, Java no backend e "+
      "o banco de dados PostgreSQL. Para executar o sistema "+
      "utilizamos o sistema operacional Linux Manjaro.",
  
]);
</script>

<style scoped>
.modern-page {
  max-width: 820px;
  margin: 0 auto;
}

.experiencias__title {
  margin: 0 0 1.5rem;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
}

.experiencias__grid {
  display: grid;
  gap: 1.25rem;
}

.exp-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.exp-card:hover {
  border-color: rgba(100, 108, 255, 0.35);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}

.exp-card__header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.exp-card__period {
  font-size: 0.85rem;
  color: #646cff;
}

.exp-card__tag {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  background: rgba(100, 108, 255, 0.2);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.9);
}

.exp-card__role {
  margin: 0 0 0.25rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.exp-card__company {
  margin: 0 0 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.exp-card__desc {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
}

@media (min-width: 600px) {
  .experiencias__grid {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
}
</style>
