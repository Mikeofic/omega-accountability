<template>
  <div class="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
    <span class="px-3 py-1 rounded-full text-xs font-medium bg-surface/90 border border-white/10 text-text" :class="withinBusinessHours ? 'ring-1 ring-green-500/30' : 'opacity-80'">
      {{ withinBusinessHours ? 'Online agora · Seg–Sex 8h–18h' : 'Fora do expediente · Seg–Sex 8h–18h' }}
    </span>
    <a :href="whatsUrl" target="_blank" rel="noopener" :aria-label="ariaLabel" :title="title"
       class="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.794.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z"/>
      </svg>
    </a>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const phone = '556593384827' // +55 65 9338-4827
const message = encodeURIComponent('Olá! Vim pelo site e gostaria de falar com um especialista.')
const whatsUrl = computed(() => `https://wa.me/${phone}?text=${message}`)

const now = ref(new Date())
let interval = null

function updateNow() { now.value = new Date() }

onMounted(() => { interval = setInterval(updateNow, 60000) })
onBeforeUnmount(() => { if (interval) clearInterval(interval) })

// Considera horário comercial local: seg–sex, 8h–18h
const withinBusinessHours = computed(() => {
  const d = now.value
  const day = d.getDay() // 0 dom, 6 sáb
  const hour = d.getHours()
  const isWeekday = day >= 1 && day <= 5
  const inHours = hour >= 8 && hour < 18
  return isWeekday && inHours
})

const ariaLabel = computed(() => withinBusinessHours.value ? 'Fale conosco no WhatsApp (online agora)' : 'Fale conosco no WhatsApp (retornaremos no próximo dia útil)')
const title = ariaLabel
</script>