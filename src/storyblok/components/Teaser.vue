<template>
    <div class="teaser">
        <h1>{{blok.headline}}</h1>
        <p v-if="blok.introtext">{{blok.introtext}}</p>
    </div>
</template>

<script>
export default {
  name: 'Teaser',
  props: ['blok']
}
</script>

<style scoped lang="scss">
.teaser {
    h1 {
        font-size : $size-1;
    }
}
</style>
