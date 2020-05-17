<template>
    <div class="layout hero is-fullheight" :class="isLanding ? null : 'is-content-top'">
        <header class="header">
            <div class="menu-toggler" :class="showMenu ? 'has-menu' : null">
                <span @click="showMenu = !showMenu">{{showMenu ? 'Close' : 'About Me'}}</span>
            </div>
            <nav :class="showMenu ? 'show-menu' : 'hide-menu'">
                <ul class="columns is-multiline is-gapless menu">
                    <li class="column is-12-small is-6-tablet is-4-desktop">
                        <g-link to="/about/"><span>Profile</span></g-link>
                    </li>
                    <li class="column is-12-small is-6-tablet is-4-desktop">
                        <g-link to="/experience/"><span>Experience</span></g-link>>
                    </li>
                    <li class="column is-12-small is-6-tablet is-4-desktop">
                        <g-link to="/skills/"><span>Skills</span></g-link>>
                    </li>
                    <li class="column is-12-small is-6-tablet is-4-desktop">
                        <g-link to="/work/"><span>Work</span></g-link>>
                    </li>
                    <li class="column is-12-small is-6-tablet is-4-desktop">
                        <g-link to="/blog/"><span>Blog</span></g-link>>
                    </li>
                    <li class="column is-12-small is-6-tablet is-4-desktop">
                        <g-link to="/contact/"><span>Contact</span></g-link>>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <slot/>
        </main>
        <footer></footer>
    </div>
</template>

<script>
export default {
  props: {
    isLanding: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="scss">
    .layout {
        background-color: #fdfdfb;
        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbc9d4' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        &.is-content-top {
            justify-content: flex-start;
        }
    }
</style>
