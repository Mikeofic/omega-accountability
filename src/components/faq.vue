<template>
  <section id="faq" class="section bg-surface/50" aria-label="Perguntas frequentes">
    <div class="container">
      <div class="text-center mb-10">
        <h2 class="heading-2">Perguntas frequentes</h2>
        <p class="text-text-muted max-w-2xl mx-auto">As dúvidas mais comuns sobre nossos serviços e a consultoria gratuita.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-6 md:gap-8">
        <details v-for="(f, i) in faqs" :key="i" class="card group">
          <summary class="cursor-pointer list-none flex items-center justify-between font-semibold">
            <span>{{ f.q }}</span>
            <svg class="h-5 w-5 text-text-muted transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </summary>
          <p class="mt-3 text-text-muted leading-relaxed">{{ f.a }}</p>
          <a :href="wa" target="_blank" class="btn btn-primary mt-4 btn-glow">Falar no WhatsApp</a>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
const wa = 'https://wa.me/556593384827'
const faqs = [
  { q: 'A consultoria gratuita tem algum compromisso?', a: 'Não. É uma conversa inicial para entendermos seu cenário e sugerirmos caminhos. Sem custo e sem compromisso.' },
  { q: 'Vocês atendem empresas de quais segmentos?', a: 'Atendemos MEIs, micro e pequenas empresas de serviços, comércio e indústria, além de empregadores domésticos.' },
  { q: 'É possível migrar minha contabilidade para a Omega?', a: 'Sim. Cuidamos de todo o processo de migração com segurança jurídica e continuidade operacional.' },
  { q: 'Vocês trabalham de forma remota?', a: 'Sim. Atendemos 100% digital com canais de comunicação claros e documentação organizada.' },
  { q: 'Quais documentos preciso para abrir empresa?', a: 'Na consultoria, orientamos a lista exata para seu caso (RG, CPF, comprovantes, atividade, endereço, entre outros).' },
  { q: 'Como funcionam os relatórios e indicadores?', a: 'Entregamos DRE, fluxo de caixa e KPIs relevantes para apoiar sua tomada de decisão mensal.' },
  { q: 'Qual é o prazo médio para começar?', a: 'Após a consultoria, iniciamos o diagnóstico e o onboarding em poucos dias, conforme complexidade.' },
  { q: 'Existe contrato e cancelamento?', a: 'Sim. Temos contrato transparente e você pode cancelar com aviso prévio conforme termos acordados.' },
]
</script>