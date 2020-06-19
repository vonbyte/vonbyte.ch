<template>
        <div class="spacer" :class="className">&nbsp;</div>
</template>

<script>
export default {
  name: 'Teaser',
  props: ['blok'],
  computed: {
    className () {
      return `spacer--${this.blok.space}`
    }
  }
}
</script>

<style scoped lang="scss">
.spacer {
    &--single {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
    &--double {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    &--triple {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }
}
</style>
