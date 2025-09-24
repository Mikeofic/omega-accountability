<template>
  <div id="app" class="flex flex-col min-h-screen">
    <BackgroundDecor />
    <Header />
    <main class="flex-grow">
      <Hero />
      <About />
      <Services />
      <Process />
      <Benefits />
      <SocialProof />
      <CTA />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </div>
</template>

<script setup>
import BackgroundDecor from './components/BackgroundDecor.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Process from './components/Process.vue'
import Benefits from './components/Benefits.vue'
import SocialProof from './components/SocialProof.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'
import FloatingWhatsApp from './components/FloatingWhatsApp.vue'
</script>
