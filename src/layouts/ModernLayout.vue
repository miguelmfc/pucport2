<template>
  <div class="layout-modern layout-github">
    <aside class="layout-github__sidebar">
      <div class="layout-github__profile">
        <div class="layout-github__avatar" aria-hidden="true">
          <img src="../assets/images/foto_ana_flavia.jpeg" />
        </div>
        <h1 class="layout-github__name">Miguel Martins</h1>
        <p class="layout-github__username">DeveloperAnaFlavia</p>
        <p class="layout-github__bio layout-github__badges">
          <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="Vue.js" />
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
          <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
          <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
        </p>
      </div>

      <nav class="layout-github__nav" aria-label="Navegação do portfólio">
        <RouterLink to="/" class="layout-github__nav-link" active-class="layout-github__nav-link--active">
          Início
        </RouterLink>
        <RouterLink to="/sobre-mim" class="layout-github__nav-link" active-class="layout-github__nav-link--active">
          Sobre mim
        </RouterLink>
        <RouterLink to="/experiencias" class="layout-github__nav-link" active-class="layout-github__nav-link--active">
          Experiências
        </RouterLink>
        <RouterLink to="/projetos" class="layout-github__nav-link" active-class="layout-github__nav-link--active">
          Projetos
        </RouterLink>
        <RouterLink to="/contatos" class="layout-github__nav-link" active-class="layout-github__nav-link--active">
          Contatos
        </RouterLink>
      </nav>
    </aside>

    <main class="layout-github__main">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import "../assets/modern.css";
</script>
