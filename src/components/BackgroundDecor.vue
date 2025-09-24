<template>
  <div class="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
    <div ref="wrap" class="parallax h-full w-full">
      <span class="blob blob--brand" data-speed="0.06" style="top:8%; left:5%; width:420px; height:420px;"></span>
      <span class="blob blob--accent" data-speed="0.1" style="top:20%; right:10%; width:360px; height:360px;"></span>
      <span class="blob blob--success" data-speed="0.08" style="bottom:5%; left:15%; width:380px; height:380px;"></span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const wrap = ref(null)
let raf = 0

function onScroll() {
  if (raf) return
  raf = requestAnimationFrame(() => {
    raf = 0
    const y = window.scrollY || 0
    const layers = wrap.value?.querySelectorAll('[data-speed]') || []
    layers.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed') || '0.06')
      el.style.transform = `translate3d(0, ${y * speed}px, 0)`
    })
  })
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (raf) cancelAnimationFrame(raf)
})
</script>