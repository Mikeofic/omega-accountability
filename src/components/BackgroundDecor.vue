<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div ref="wrap" class="parallax h-full w-full">
      <span class="blob blob--brand" data-speed="0.06" style="top:8%; left:5%; width:420px; height:420px;"></span>
      <span class="blob blob--accent" data-speed="0.1" style="top:20%; right:10%; width:360px; height:360px;"></span>
      <span class="blob blob--success" data-speed="0.08" style="bottom:5%; left:15%; width:380px; height:380px;"></span>

      <!-- Linha decorativa que gira conforme o scroll -->
      <span
        ref="line"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block rounded"
        :style="{
          width: '140vmax',
          height: '1px',
          background: 'linear-gradient(90deg, rgba(69,151,201,0.55), rgba(69,151,201,0.25), rgba(69,151,201,0))',
          boxShadow: '0 0 32px rgba(69,151,201,0.22)',
          transform: `translate(-50%, -50%) rotate(${angle}deg)`
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const wrap = ref(null)
const line = ref(null)
let raf = 0
let lastY = 0
const angle = ref(0)
let reduced = false

function onScroll() {
  if (raf) return
  raf = requestAnimationFrame(() => {
    raf = 0
    const y = window.scrollY || 0

    // Atualiza camadas parallax
    const layers = wrap.value?.querySelectorAll('[data-speed]') || []
    layers.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed') || '0.06')
      el.style.transform = `translate3d(0, ${y * speed}px, 0)`
    })

    // Rotação da linha baseada na direção/velocidade do scroll
    if (!reduced) {
      const dy = y - lastY
      angle.value = (angle.value + dy * 0.12) % 360
    }

    lastY = y
  })
}

onMounted(() => {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  lastY = window.scrollY || 0
  if (!reduced) {
    window.addEventListener('scroll', onScroll, { passive: true })
  } else {
    onScroll()
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (raf) cancelAnimationFrame(raf)
})
</script>