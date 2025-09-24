<template>
  <section id="social-proof" class="section" aria-label="Depoimentos de clientes">
    <div class="container">
      <div class="text-center mb-10">
        <h2 class="heading-2">Resultados que falam por si</h2>
        <p class="text-text-muted mt-3">Cases reais com impacto mensurável.</p>
      </div>

      <div class="relative group" @mouseenter="pause" @mouseleave="play">
        <div class="overflow-hidden rounded-xl border border-white/10 bg-surface/60 backdrop-blur">
          <div class="flex transition-transform duration-500 ease-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }" role="list">
            <article v-for="(item, i) in items" :key="i" role="listitem" class="min-w-full p-6 md:p-10">
              <figure class="max-w-3xl mx-auto text-center">
                <blockquote class="text-lg md:text-xl text-text-muted leading-relaxed">“{{ item.quote }}”</blockquote>
                <figcaption class="mt-6 font-semibold">— {{ item.author }}</figcaption>
                <ul class="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-text-muted/90">
                  <li v-for="(m, mi) in item.metrics" :key="mi" class="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {{ m }}
                  </li>
                </ul>
              </figure>
            </article>
          </div>
        </div>

        <!-- Controles -->
        <button @click="prev" aria-label="Anterior" class="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-surface/90 border border-white/10 text-text hover:-translate-x-0.5 transition group-hover:flex">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button @click="next" aria-label="Próximo" class="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-surface/90 border border-white/10 text-text hover:translate-x-0.5 transition group-hover:flex">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>

        <!-- Indicadores -->
        <div class="mt-6 flex items-center justify-center gap-2">
          <button v-for="(item, i) in items" :key="i" @click="goTo(i)" :aria-label="`Ir para o slide ${i+1}`" class="h-2.5 rounded-full transition-colors" :class="i === currentIndex ? 'w-6 bg-brand' : 'w-2.5 bg-white/20 hover:bg-white/40'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const items = [
  {
    quote: 'A Omega reduziu nossos custos tributários e organizou toda a rotina contábil em menos de 30 dias.',
    author: 'João da Silva, CEO da Tech Solutions',
    metrics: ['↓ 22% custos fiscais', '⏱ fechamento -30%', 'NPS 91']
  },
  {
    quote: 'Atendimento proativo e relatórios que realmente ajudam na decisão. Crescemos com previsibilidade.',
    author: 'Maria Oliveira, Fundadora da Creative Design',
    metrics: ['↑ 18% margem líquida', '📊 DRE mensal', 'SLA < 24h']
  },
  {
    quote: 'Transparência total e suporte ágil. Viramos referência no nosso segmento com a ajuda da Omega.',
    author: 'Carlos Pereira, Diretor da AgroMax',
    metrics: ['↑ 35% eficiência operacional', '✔ conformidade fiscal', 'NPS 94']
  }
]

const currentIndex = ref(0)
let timer = null

function next() {
  currentIndex.value = (currentIndex.value + 1) % items.length
}
function prev() {
  currentIndex.value = (currentIndex.value - 1 + items.length) % items.length
}
function goTo(i) {
  currentIndex.value = i
}
function play() {
  stop()
  timer = setInterval(next, 5000)
}
function pause() {
  stop()
}
function stop() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(play)
onBeforeUnmount(stop)
</script>