<template>
    <ul class="timeline">
        <timeline-entry :key="subblok._uid" v-for="subblok in blok.Entry" :blok="subblok"></timeline-entry>
    </ul>
</template>

<script>
import TimelineEntry from './TimelineEntry'

export default {
  name: 'Timeline',
  props: ['blok'],
  data () {
    return {
      entries: []
    }
  },
  components: {
    TimelineEntry
  },

  methods: {
    animateEntry (el,index) {
      if (this.isInView(el)) {
        el.style.opacity = 1
        el.style.transform = 'scale(1)'
        this.entries.splice(index, 1)
      }
    },
    handleScroll (e) {
      this.entries.forEach((entry, index) => {
        this.animateEntry(entry,index)
      })
    }
  },
  mounted () {
    this.$children.forEach((child,index) => {
      this.entries.push(child.$el)
      this.animateEntry(child.$el,index)
    })
    const el = document.querySelector('body')
    el.addEventListener('scroll', this.debounce(this.handleScroll), 250)

  },

  beforeDestroy () {
    const el = document.querySelector('body')
    el.removeEventListener('scroll', this.debounce(this.handleScroll), 250)
  }
}
</script>

<style lang="scss" scoped>
    .hero-body {
        flex-direction: column;
    }
    .timeline {
        position: relative;
        padding: 2em 0;
        margin-top: 2em;
        margin-bottom: 2em;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 15px;
            margin-left: -2px;
            height: 100%;
            width: 4px;
            background: $oldPink;

            @include from($desktop) {
                left: 25%;
            }
        }
    }
</style>
