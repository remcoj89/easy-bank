<template>
  <header>
    <Hero_Component />
  </header>

  <RouterView />
</template>

<script>
import Hero_Component from './components/hero.vue'

export default {
  name: 'app-vue',
  components: {
    Hero_Component
  }
}
</script>
