<template>
    <div class="hero-body">
        <div class="container">
            <component :key="subblok._uid" v-for="subblok in blok.body" :blok="subblok" :is="subblok.component"></component>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Page',
  props: ['blok']
}
</script>

<style lang="scss" scoped>
.hero-body {
    flex-direction: column;

}
</style>
