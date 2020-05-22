<template>
    <div class="layout hero is-fullheight" :class="isLanding ? 'is-landing' : null">
        <header class="header" :class="isLanding ? null : 'has-background-white'">
            <div class="menu-toggler text-center" :class="menuClass">
                <g-link v-if="!isLanding" to="/">
                    <logo wrapper-class="headerLogo"/>
                </g-link>
                <div class="hamburger is-hidden-desktop" :class="showMenu ? 'is-active' : null"
                     @click="handleMobileToggler">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
                <span class="is-hidden-touch" :class="showMenu ? 'is-active' : null"
                      @click="showMenu = !showMenu">{{showMenu ? 'Close' : 'About me'}}</span>
            </div>
            <navigation :show-menu="showMenu"></navigation>
        </header>
        <transition name="fade" appear>
        <main>
            <slot/>
        </main>
        </transition>
        <footer></footer>
    </div>
</template>

<script>
import Navigation from '../storyblok/components/Navigation'
import Logo from '../components/Logo'

export default {
  props: {
    isLanding: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Navigation,
    Logo
  },
  data () {
    return {
      showMenu: false,
      currentRoute: null
    }
  },
  methods: {
    handleMobileToggler () {
      this.showMenu = !this.showMenu
    }
  },
  computed: {
    menuClass () {
      let alignClass = this.showMenu && this.isLanding ? 'has-menu' : ''
      let contentClass = this.isLanding ? 'is-landing-toggler' : ''
      let menuClass = alignClass + ' ' + contentClass
      return menuClass.trim()
    },
  },
  mounted () {
    this.currentRoute = this.$route
  },
  updated () {
    if (this.$route !== this.currentRoute) {
      this.showMenu = false
      this.currentRoute = this.$route
    }
  }
}
</script>

<style lang="scss">
    .layout {
        background-color: #fdfdfb;
        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbc9d4' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

        &:not(.is-landing) {
            justify-content: flex-start;

            .header {
                box-shadow: 0 0 10px 0 rgba($primary, 0.5);
            }
        }

    }
    .fade-enter-active {
        transition: opacity 2s;
    }

    .fade-enter {
        opacity: 0;
    }

</style>
