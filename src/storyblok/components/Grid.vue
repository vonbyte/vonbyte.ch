<template>
        <div class="columns is-marginless is-multiline" :class="rowClass">
            <div class="column" :key="column._uid" v-for="column in blok.columns">
                <component :is="column.component" :blok="column"></component>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Grid',
  props: ['blok'],
  mounted () {
    if (this.blok.containerwidth) {
      this.$el.style.maxWidth = `${this.blok.containerwidth}px`
    }
  },
  computed: {

    rowClass () {
      if (this.blok.stacked === 'none') {
        return 'is-mobile'
      }

      return this.blok.stacked ? `is-${this.blok.stacked.toLowerCase()}` : ''
    }
  }
}
</script>

<style scoped>

</style>
