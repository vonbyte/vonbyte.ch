<template>
    <div class="skills">
        <div class="skills__top">
            <h2>Top Skills</h2>
            <span class="tag" v-for="skill in topSkills">{{skill.title}}</span>
        </div>
        <div class="columns is-mobile skills__more">
            <div class="column is-one-third-medium has-text-centered" v-for="key in Object.keys(groups)">
                <span class="skill__toggler" :class="activeGroup === key ? 'is-active' : null"
                      @click="activeGroup = key">{{key}}</span>
            </div>
        </div>
        <div class="skills__showcase" :class="fadeClass">
            <SkillGroup v-for="group in groups[activeGroup]" :key="group._uid" :group="group"/>
        </div>
    </div>
</template>

<script>
import SkillGroup from './SkillGroup'

export default {
  name: 'SkillWrapper',
  components: { SkillGroup },
  props: ['blok'],
  data () {
    return {
      activeGroup: '',
      fadeClass: ''
    }
  },
  computed: {
    groups () {
      return this.groupArrayOfObjects(this.blok, 'type')
    },
    topSkills () {
      const tops = this.blok.filter((group, index) => {
        return group.type === 'Professional Skills'
      }).map(group => {
        return group.entries.filter(entry => {
          return entry.knowhow > 80
        })
      })
      return [].concat(...tops).sort((a, b) => (a.knowhow < b.knowhow) ? 1 : -1)
    }
  },
  watch: {
    activeGroup(newVal, oldVal) {
      if (newVal !== oldVal) {
          this.fadeClass = 'fade-out'
        setTimeout(() => {
          this.fadeClass = ''
        },600)
        setTimeout(() => {
          this.fadeClass = 'fade-in'
        },200)

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.skills__showcase {
    &.fade-in {
        opacity: 1;
        transition: opacity 0.5s ease-in;
    }
    &.fade-out {
        opacity: 0.1;
    }
}
</style>
