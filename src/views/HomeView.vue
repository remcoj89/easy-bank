<template>
  <main>
    <SectionUsp />
    <SectionArticles />
  </main>
</template>

<script>
import SectionUsp from '../components/SectionUsp.vue'
import SectionArticles from '../components/SectionArticles.vue'

export default {
  name: 'home-view',
  components: {
    SectionUsp,
    SectionArticles
  }
}
</script>
