<template>
  <section id="pricing" class="section bg-surface/50" aria-label="Planos e valores">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="heading-2">Planos simples, sem surpresa</h2>
        <p class="text-text-muted max-w-2xl mx-auto">Escolha o nível de suporte ideal para seu momento. Sem taxa de cancelamento.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6 md:gap-8">
        <article v-for="(p, i) in plans" :key="i" class="card relative group overflow-hidden">
          <div v-if="p.badge" class="absolute right-4 top-4 px-2 py-0.5 rounded-full text-xs bg-brand/10 text-brand border border-brand/20">{{ p.badge }}</div>
          <h3 class="text-xl font-bold">{{ p.title }}</h3>
          <p class="text-text-muted mt-1">{{ p.desc }}</p>
          <div class="mt-6 flex items-baseline gap-2">
            <span class="text-3xl font-extrabold">{{ p.price }}</span>
            <span class="text-text-muted">/mês</span>
          </div>
          <ul class="mt-4 space-y-2 text-text-muted">
            <li v-for="(f, fi) in p.features" :key="fi">• {{ f }}</li>
          </ul>
          <a :href="wa" target="_blank" class="mt-6 btn btn-primary w-full hover-lift btn-glow">Falar no WhatsApp</a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const wa = 'https://wa.me/556593384827'
const plans = [
  { title: 'Essencial', desc: 'Para MEIs e quem está começando.', price: 'Sob consulta', features: ['Escrituração básica', 'Atendimento por WhatsApp', 'Relatórios trimestrais'] },
  { title: 'Profissional', desc: 'Para micro e pequenas empresas.', price: 'Sob consulta', features: ['Fiscal + Contábil', 'Folha de pagamento (até 5 colaboradores)', 'Relatórios mensais'], badge: 'Mais escolhido' },
  { title: 'Avançado', desc: 'Para operações com maior complexidade.', price: 'Sob consulta', features: ['Consultoria tributária', 'KPIs e DRE sob medida', 'SLA prioritário'] },
]
</script>