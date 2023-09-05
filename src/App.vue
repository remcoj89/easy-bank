<template>
  <nav id="nav-bar">
    <Nav_Component />
  </nav>
  <mobile-nav-modal />
  <header>
    <Hero_Component />
  </header>

  <RouterView />

  <footer>
    <Footer_Component />
  </footer>
</template>

<script>
import Nav_Component from './components/SectionNav.vue'
import Hero_Component from './components/SectionHero.vue'
import Footer_Component from './components/SectionFooter.vue'

export default {
  name: 'app-vue',
  components: {
    Nav_Component,
    Hero_Component,
    Footer_Component
  }
}
</script>
