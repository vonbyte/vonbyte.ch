<template>
    <div class="skill-group">
        <h2 class="skill-group__title">{{group.title}}</h2>
        <div class="columns is-multiline">
            <skill-entry v-for="skill in group.entries" :key="skill._uid" :skill="skill"/>
        </div>
    </div>
</template>

<script>
import SkillEntry from './SkillEntry'

export default {
  name: 'SkillGroup',
  components: { SkillEntry },
  props: ['group']
}
</script>

<style lang="scss" scoped>
    h2 {
        border-bottom: 2px solid $oldPink;
        padding: 0.3rem 0.5rem;
    }
    .skill-group {
        margin: 2.5rem 0;

        &__title {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            margin-top: 1.5rem;
        }
    }
</style>
