<template>
    <article>
        <h2>{{blok.Heading}}</h2>
        <p class="lead">{{blok.LeadText}}</p>
        <p>{{blok.Content}}</p>
    </article>
</template>

<script>
export default {
  name: 'Plaincontent',
  props: ['blok']
}
</script>

<style lang="scss" scoped>
article {
    margin-bottom: 1rem;
    &:not(:last-of-type) {
        &::after {
            content: '';
            display: block;
            width: 90%;
            margin: 2rem auto;
            height: 1px;
            background: $primary;
        }
    }

}
</style>
