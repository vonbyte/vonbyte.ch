<template>
    <div class="skills">
        <div class="skills__top">
            <h2>Skills on Senior Level</h2>
            <div class="tags are-medium">
                <span class="tag " v-for="skill in topSkills">{{skill.title}}</span>
            </div>
        </div>
        <div class="skills__more">
            <h3>but there is more...</h3>
            <div class="columns is-multiline">
                <div class="column is-one-third-desktop has-text-centered" v-for="key in Object.keys(groups)">
                    <div class="skill__toggler" :class="activeGroup === key ? 'is-active' : null"
                         @click="activeGroup = key">{{key}}
                    </div>
                </div>
            </div>
        </div>

        <div class="skills__showcase" :class="fadeClass">
            <SkillGroup v-for="group in groups[activeGroup]" :is-personal="activeGroup === 'Personal Skills'"
                        :key="group._uid" :group="group"/>
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
      activeGroup: 'Professional Skills',
      fadeClass: '',
      topSkills: []
    }
  },
  computed: {
    skills() {
      return this.blok.filter(element => element.component === 'SkillGroup');
    },
    groups () {
      return this.groupArrayOfObjects(this.skills, 'type')
    }
  },
  mounted () {
    const tops = this.blok.filter((group, index) => {
      return group.type === 'Professional Skills'
    }).map(group => {
      return group.entries.filter(entry => {
        return entry.knowhow > 80
      })
    })
    this.topSkills = [].concat(...tops).sort((a, b) => (parseInt(a.knowhow) < parseInt(b.knowhow)) ? 1 : (parseInt(a.title) < parseInt(b.title)) ? 1 : -1)
  },
  watch: {
    activeGroup (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.fadeClass = 'fade-out'
        setTimeout(() => {
          this.fadeClass = ''
        }, 600)
        setTimeout(() => {
          this.fadeClass = 'fade-in'
        }, 200)

      }
    }
  }
}
</script>

<style lang="scss" scoped>

    h2 {
        font-size: $size-3;
        text-align: center;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }
    h3 {
        font-size: $size-4;
        text-align: center;
        margin-bottom: 2rem;
        margin-top: 3rem;
    }
    .tags {
       justify-content: center;
        width: 80%;
        margin: auto;
        max-width: 900px;
    }
    .tag {
        background: $oldPink;
        color: $white;
        padding: 1rem 1.5rem;
        //border-radius: 4px;
        //font-size: 1.1rem;
    }
    .skill__toggler {
        border: 2px solid $primary;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: all 0.5s ease-out;
        &.is-active {
            background: $primary;
            cursor: default;
        }
        &:hover:not(.is-active), &:focus:not(.is-active) {
            border-color: $oldPink;
            transition: all 0.3s ease-in;
        }

    }

    .skills__more {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

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
