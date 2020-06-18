<template>
    <div class="hero-body">
        <div class="container is-full-fullhd">
            <div v-if="isSkills">
                <SkillWrapper :blok="blok.body"/>
            </div>
            <component v-else :key="subblok._uid" v-for="subblok in blok.body" :blok="subblok" :is="subblok.component"></component>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Page',
  props: ['blok'],
  computed: {
    isSkills() {
      return this.blok.body.some(element => element.component === 'SkillGroup');
    }
  }
}
</script>

<style lang="scss" scoped>
.hero.is-fullheight {
    .hero-body {
        flex-direction: column;
        > .container {
            width: 100%;
        }
}

}
</style>
