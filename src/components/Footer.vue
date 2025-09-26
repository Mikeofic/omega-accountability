<template>
  <footer class="bg-surface border-t border-black/10 py-10">
    <div class="container">
      <div class="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div class="text-center md:text-left">
          <img src="/logo.png" alt="Omega Contabilidade" class="h-40 w-auto mx-auto md:mx-0"/>
          <p class="text-text-muted mt-3 max-w-md">Contabilidade estratégica para você operar com conformidade, reduzir custos e tomar decisões com segurança.</p>
        </div>
        <div class="text-center">
          <p class="text-text">Atendimento</p>
          <div class="mt-2 flex items-center justify-center gap-4 text-sm text-text-muted">
            <a href="https://wa.me/556593384827" target="_blank" class="hover:text-text underline-offset-4 hover:underline">WhatsApp</a>
            <a href="mailto:contato@omegacontabilidade.com" class="hover:text-text underline-offset-4 hover:underline">E-mail</a>
          </div>
        </div>
        <div class="text-center md:text-right text-sm text-text-muted">
          <p>&copy; {{ new Date().getFullYear() }} Omega Contabilidade.</p>
          <p class="mt-1">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Nenhuma lógica de script necessária para este componente
</script>