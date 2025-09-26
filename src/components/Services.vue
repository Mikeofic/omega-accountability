<template>
  <section id="services" class="section bg-surface/50">
    <div class="container">
      <div class="mb-12 text-center">
        <h2 class="heading-2"><span class="text-gradient">Serviços contábeis</span> que impulsionam seu negócio</h2>
        <p class="text-text-muted mt-4 max-w-2xl mx-auto">Gestão completa para você operar em conformidade, reduzir custos e ganhar previsibilidade.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div v-for="(s, i) in services" :key="i" class="card hover-lift group bg-surface/70 backdrop-blur-lg border border-black/10">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <template v-if="s.icon === 'ledger'">
                <path d="M4 5h12a2 2 0 0 1 2 2v10H6a2 2 0 0 1-2-2V5z"/>
                <path d="M8 9h8M8 13h8"/>
              </template>
              <template v-else-if="s.icon === 'tax'">
                <path d="M4 4h16v16H4z"/>
                <path d="M8 8l8 8M8 16l8-8"/>
              </template>
              <template v-else-if="s.icon === 'payroll'">
                <circle cx="12" cy="7" r="3"/>
                <path d="M6 21v-3a6 6 0 0 1 12 0v3"/>
              </template>
              <template v-else-if="s.icon === 'home'">
                <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2z"/>
              </template>
              <template v-else-if="s.icon === 'rocket'">
                <path d="M4 13l6-6 6-2-2 6-6 6-4-4z"/>
                <path d="M9 15l-2 2"/>
              </template>
              <template v-else>
                <path d="M4 22V4h16v18"/>
                <path d="M9 8h2m2 0h2M9 12h2m2 0h2M9 16h2m2 0h2"/>
              </template>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">{{ s.title }}</h3>
          <p class="text-text-muted mb-4">{{ s.desc }}</p>
          <a :href="wa" target="_blank" class="btn btn-primary btn-glow">Falar no WhatsApp</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const wa = 'https://wa.me/556593384827'

const services = [
  { icon: 'ledger', title: 'Escrituração Contábil', desc: 'Demonstrações claras da saúde do seu negócio para decisões seguras.' },
  { icon: 'tax', title: 'Escrituração Fiscal', desc: 'Tributação correta e controle de entradas/saídas em conformidade.' },
  { icon: 'payroll', title: 'Folha de Pagamento', desc: 'Rotinas trabalhistas completas com redução de riscos e custos.' },
  { icon: 'home', title: 'Empregado Doméstico', desc: 'Gestão de direitos e deveres conforme legislação vigente.' },
  { icon: 'rocket', title: 'MEI e Microempresas', desc: 'Abertura, orientação e rotinas simplificadas para crescer certo.' },
  { icon: 'building', title: 'Departamento Societário', desc: 'Abertura, alterações e enquadramento tributário vantajoso.' },
]
</script>