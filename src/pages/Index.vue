<template>
  <Layout>
    <div class="hero-body is-relative">
      <div class="container has-text-centered">
        <logo/>
        <h1>web development with a touch of pink</h1>
      </div>

    </div>

  </Layout>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  metaInfo: {
    title: 'vonByte.ch - passionated web developer',
    titleTemplate: '%s'
  },
  components: {
    Logo
  },
}
</script>

<style scoped lang="scss">
.hero {
  &-body {
    top: -4rem
  }
  .vb-logo {
    animation: 2s grow;
    margin: auto;
    width: 80%;
    max-width: 800px;

    + h1 {
      animation: 2s grow;
      margin-top: 2rem;
      font-size: $size-4;
      @include from($tablet) {
        font-size: $size-3;
      }
      @include from($desktop) {
        font-size: $size-2;
      }
    }
  }
}
</style>
