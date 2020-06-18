<template>
    <div>
        <a :href="blok.Link.cached_url" :title="blok.Icon.title" target="_blank">
            <img :src="blok.Icon.filename" :alt="blok.Icon.alt">
        </a>
    </div>
</template>

<script>
export default {
  name: 'ContactItem',
  props: ['blok'],
}
</script>

<style scoped lang="scss">
    img {
        height: 28px;
        width: auto;
    }
</style>
