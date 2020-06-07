<template>
<div class="work-group">
        <h2 class="work-group__title">{{blok.title}}</h2>
        <p class="work-group__description">{{blok.intro}}</p>
        <div class="columns is-multiline is-marginless work-group__entries">
            <work-entry v-for="entry in blok.entries" :blok="entry" :key="entry._uid"/>
        </div>
</div>
</template>

<script>
import WorkEntry from './WorkEntry'

export default {
  name: 'ProjectGroup',
  props: ['blok'],
  data () {
    return {
      entries: []
    }
  },
  components: {
    WorkEntry
  },
}
</script>

<style lang="scss" scoped>
h2 {
    font-size: $size-3;
    text-align: center;
    border-bottom: 2px solid $oldPink;
    padding: 0.3rem 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
    .work-group {
        &__description {
            text-align: center;
            font-size: 1.1rem;
            max-width: 800px;
            margin: 1rem auto;
        }
    }
</style>
