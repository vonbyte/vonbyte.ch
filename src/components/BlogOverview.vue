<template>
    <div>Ich bin die Blog Overview</div>
</template>

<script>
export default {
  name: 'Index',
  mounted () {
    // check redirects
    const path = window.location.pathname
    const navigatorLang = navigator.language || navigator.userLanguage;

    const lang = !navigatorLang|| ['de','en'].indexOf(navigatorLang.split('-')[0]) === -1 ? 'en' : navigatorLang.split('-')[0];

    if (path === '/') {
      window.location.href = window.location.origin + '/' + lang + '/'
    }
  }
}
</script>

<style scoped>

</style>
