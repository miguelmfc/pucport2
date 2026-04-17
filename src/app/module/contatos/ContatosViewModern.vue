<template>
  <section class="contatos modern-page">
    <h1 class="contatos__title">Contato</h1>

    <div class="contatos__layout">
      <div class="contatos__info">
        <p class="contatos__intro">
          Envie uma mensagem pelo formulário ou use os links abaixo.
        </p>
        <div class="contatos__icons">
          <a
            href="mailto:martinsmiguelc@gmail.com"
            class="contatos__icon"
            title="E-mail"
            aria-label="E-mail"
          >
            <span class="contatos__icon-symbol" aria-hidden="true">✉</span>
            <span>contato@exemplo.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/miguel-martins-21509a239/"
            target="_blank"
            rel="noopener noreferrer"
            class="contatos__icon"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <span class="contatos__icon-symbol" aria-hidden="true">in</span>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/miguelmfc"
            target="_blank"
            rel="noopener noreferrer"
            class="contatos__icon"
            title="GitHub"
            aria-label="GitHub"
          >
            <span class="contatos__icon-symbol" aria-hidden="true">⌘</span>
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <form class="contatos__form" @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            id="nome"
            v-model="form.nome"
            type="text"
            name="nome"
            autocomplete="name"
            placeholder="Seu nome"
            :class="{ 'form-input--error': errors.nome }"
          />
          <span v-if="errors.nome" class="form-error">{{ errors.nome }}</span>
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="seu@email.com"
            :class="{ 'form-input--error': errors.email }"
          />
          <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
        </div>
        <div class="form-group">
          <label for="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            v-model="form.mensagem"
            name="mensagem"
            rows="4"
            placeholder="Sua mensagem..."
            :class="{ 'form-input--error': errors.mensagem }"
          />
          <span v-if="errors.mensagem" class="form-error">{{ errors.mensagem }}</span>
        </div>
        <button type="submit" class="contatos__submit" :disabled="sending">
          {{ sending ? 'Enviando...' : 'Enviar' }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const form = reactive({
  nome: "",
  email: "",
  mensagem: "",
});

const errors = reactive({
  nome: "",
  email: "",
  mensagem: "",
});

const sending = ref(false);

function validate(): boolean {
  let ok = true;
  errors.nome = "";
  errors.email = "";
  errors.mensagem = "";

  if (!form.nome.trim()) {
    errors.nome = "Nome é obrigatório.";
    ok = false;
  }

  if (!form.email.trim()) {
    errors.email = "E-mail é obrigatório.";
    ok = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Informe um e-mail válido.";
    ok = false;
  }

  if (!form.mensagem.trim()) {
    errors.mensagem = "Mensagem é obrigatória.";
    ok = false;
  } else if (form.mensagem.trim().length < 10) {
    errors.mensagem = "Mensagem deve ter pelo menos 10 caracteres.";
    ok = false;
  }

  return ok;
}

function onSubmit() {
  if (!validate()) return;

  sending.value = true;

  const mailto = `mailto:contato@exemplo.com?subject=Contato do portfólio - ${encodeURIComponent(form.nome)}&body=${encodeURIComponent(
    `Nome: ${form.nome}\nE-mail: ${form.email}\n\nMensagem:\n${form.mensagem}`
  )}`;

  window.location.href = mailto;

  setTimeout(() => {
    sending.value = false;
    form.nome = "";
    form.email = "";
    form.mensagem = "";
  }, 800);
}
</script>

<style scoped>
.modern-page {
  max-width: 720px;
  margin: 0 auto;
}

.contatos__title {
  margin: 0 0 1.5rem;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
}

.contatos__layout {
  display: grid;
  gap: 2rem;
}

.contatos__intro {
  margin: 0 0 1.25rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
}

.contatos__icons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.contatos__icon {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #646cff;
  text-decoration: none;
  font-size: 0.95rem;
  transition: background 0.2s, border-color 0.2s;
}

.contatos__icon:hover {
  background: rgba(100, 108, 255, 0.15);
  border-color: #646cff;
}

.contatos__icon-symbol {
  font-size: 1.1rem;
  opacity: 0.9;
}

.contatos__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.form-group input,
.form-group textarea {
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
  color: inherit;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #646cff;
}

.form-group input.form-input--error,
.form-group textarea.form-input--error {
  border-color: #e57373;
}

.form-error {
  font-size: 0.8rem;
  color: #e57373;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.contatos__submit {
  align-self: flex-start;
  padding: 0.65rem 1.5rem;
  background: #646cff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.contatos__submit:hover:not(:disabled) {
  background: #535bf2;
}

.contatos__submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (min-width: 600px) {
  .contatos__layout {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
