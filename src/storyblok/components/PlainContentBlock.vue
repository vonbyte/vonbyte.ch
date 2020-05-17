<template>
    <article>
        <h2>{{blok.Heading}}</h2>
        <p class="lead">{{blok.LeadText}}</p>
        <p>{{blok.Content}}</p>
    </article>
</template>

<script>
export default {
  name: 'PlainContentBlock',
  props: ['blok']
}
</script>

<style scoped>

</style>
