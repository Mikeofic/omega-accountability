<template>
  <header class="bg-surface/80 backdrop-blur-lg sticky top-0 z-40 w-full border-b border-white/10">
    <div class="container mx-auto flex justify-between items-center p-4">
      <div class="text-2xl font-bold text-brand">
        <a href="#">Omega</a>
      </div>
      <nav class="hidden md:flex space-x-8">
        <a href="#about" class="text-text-muted hover:text-text transition-colors">Sobre</a>
        <a href="#services" class="text-text-muted hover:text-text transition-colors">Serviços</a>
        <a href="#process" class="text-text-muted hover:text-text transition-colors">Como trabalhamos</a>
        <a href="#social-proof" class="text-text-muted hover:text-text transition-colors">Depoimentos</a>
        <a href="#cta" class="text-text-muted hover:text-text transition-colors">Contato</a>
      </nav>
      <a href="https://wa.me/556593384827" target="_blank" class="btn btn-primary hidden md:inline-flex">
        Fale com um especialista
      </a>
      <button @click="isOpen = !isOpen" class="md:hidden text-text">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>
    </div>
    <div v-if="isOpen" class="md:hidden bg-surface">
      <nav class="flex flex-col items-center space-y-4 p-4">
        <a href="#about" @click="isOpen = false" class="text-text-muted hover:text-text transition-colors">Sobre</a>
        <a href="#services" @click="isOpen = false" class="text-text-muted hover:text-text transition-colors">Serviços</a>
        <a href="#process" @click="isOpen = false" class="text-text-muted hover:text-text transition-colors">Como trabalhamos</a>
        <a href="#social-proof" @click="isOpen = false" class="text-text-muted hover:text-text transition-colors">Depoimentos</a>
        <a href="#cta" @click="isOpen = false" class="text-text-muted hover:text-text transition-colors">Contato</a>
        <a href="https://wa.me/556593384827" target="_blank" class="btn btn-primary mt-4">
          Fale com um especialista
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>