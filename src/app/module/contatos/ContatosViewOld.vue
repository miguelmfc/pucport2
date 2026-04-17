<template>
  <div class="crt terminal contatos-retro">
    <h2>CONTATOS</h2>
    <p class="contatos-retro__intro">
      Envie uma mensagem pelo formulário ou use os links abaixo.
    </p>

    <div class="contatos-retro__links">
      <p class="contatos-retro__item">
        <span class="contatos-retro__label">&gt; E-mail:</span>
        <a href="mailto:martinsmiguelc@gmail.com" class="contatos-retro__link">martinsmiguelc@gmail.com</a>
      </p>
      <p class="contatos-retro__item">
        <span class="contatos-retro__label">&gt; LinkedIn:</span>
        <a
          href="https://www.linkedin.com/in/miguel-martins-21509a239/"
          target="_blank"
          rel="noopener noreferrer"
          class="contatos-retro__link"
        >Miguel Martins Fonseca da Cruz</a>
      </p>
      <p class="contatos-retro__item">
        <span class="contatos-retro__label">&gt; GitHub:</span>
        <a
          href="https://github.com/miguelmfc"
          target="_blank"
          rel="noopener noreferrer"
          class="contatos-retro__link"
        >github.com/miguelmfc</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import "../../../assets/crt.css";
</script>

<style scoped>
.contatos-retro__intro {
  margin: 0 0 1rem;
  line-height: 1.5;
}

.contatos-retro__links {
  margin: 0;
}

.contatos-retro__item {
  margin: 0 0 0.75rem;
  line-height: 1.5;
}

.contatos-retro__item:last-child {
  margin-bottom: 0;
}

.contatos-retro__label {
  margin-right: 0.5ch;
}

.contatos-retro__link {
  color: inherit;
  text-decoration: underline;
}

.contatos-retro__link:hover {
  text-shadow: 0 0 8px var(--terminal-glow, rgba(0, 255, 65, 0.5));
}
</style>
