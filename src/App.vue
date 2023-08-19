<template>
  <header>
    <Hero_Component />
  </header>

  <RouterView />

  <footer>
    <Footer_Component />
  </footer>
</template>

<script>
import Hero_Component from './components/SectionHero.vue'
import Footer_Component from './components/SectionFooter.vue'

export default {
  name: 'app-vue',
  components: {
    Hero_Component,
    Footer_Component
  }
}
</script>
