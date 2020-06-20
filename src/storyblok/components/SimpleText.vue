<template>
    <div v-html="markdownText"/>
</template>

<script>
import marked from 'marked'
export default {
  name: 'Plaincontent',
  props: ['blok'],
  computed: {
    markdownText () {
      return marked(this.blok.content).replace(/<code>\s<\/code>/g, '<br/>');
    }
  }
}
</script>

<style lang="scss" scoped>
div {
    margin-bottom: 1rem;
}
</style>
