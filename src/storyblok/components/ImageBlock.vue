<template>
    <div class="image-block">
        <p>{{blok.description}}</p>
        <img :src="blok.image.filename" :alt="blok.image.alt">
        <p>{{blok.image.copyright}}</p>
    </div>
</template>

<script>
export default {
  name: 'ImageBlock',
  props: ['blok']
}
</script>

<style lang="scss" scoped>

</style>
