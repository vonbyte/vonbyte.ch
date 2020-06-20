<template>
    <div class="container is-full-fullhd">
        <article>
            <div class="post__header">
                <h1>{{blok.heading}}</h1>
                <p v-if="blok.abstract">{{blok.abstract}}</p>
            </div>
            <component :key="subblok._uid" v-for="subblok in blok.body" :blok="subblok" :is="subblok.component"></component>
        </article>

    </div>
</template>

<script>
export default {
  name: 'Blog',
  props: ['blok'],
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
