<template>
  <section id="trust" class="section" aria-label="Compromissos e garantias">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="heading-2">Compromissos Omega</h2>
        <p class="text-text-muted max-w-2xl mx-auto">Garantias que reforçam nossa responsabilidade e o resultado do seu negócio.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div class="card text-center hover-lift">
          <div class="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <!-- shield icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 overflow-visible" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"/></svg>
          </div>
          <h3 class="text-lg font-bold">Conformidade</h3>
          <p class="text-text-muted">Operamos com rigor técnico e atenção à legislação vigente.</p>
        </div>
        <div class="card text-center hover-lift">
          <div class="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <!-- clock icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 overflow-visible" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <h3 class="text-lg font-bold">SLA ágil</h3>
          <p class="text-text-muted">Atendimento com prazos claros e comunicação transparente.</p>
        </div>
        <div class="card text-center hover-lift">
          <div class="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <!-- lock icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 overflow-visible" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="12" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
          </div>
          <h3 class="text-lg font-bold">Sigilo e segurança</h3>
          <p class="text-text-muted">Proteção de dados e confidencialidade em todos os processos.</p>
        </div>
        <div class="card text-center hover-lift">
          <div class="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <!-- chart icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 overflow-visible" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><rect x="7" y="13" width="3" height="5"/><rect x="12" y="9" width="3" height="9"/><rect x="17" y="5" width="3" height="13"/></svg>
          </div>
          <h3 class="text-lg font-bold">Transparência</h3>
          <p class="text-text-muted">Relatórios claros e indicadores que geram ação.</p>
        </div>
      </div>
      <div class="text-center mt-10">
        <a :href="wa" target="_blank" class="btn btn-primary btn-lg hover-lift btn-glow">Agendar consultoria gratuita</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const wa = 'https://wa.me/556593384827'
</script>