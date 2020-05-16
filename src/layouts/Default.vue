<template>
    <div class="layout hero is-fullheight">
        <header class="header">
            <div class="menu-toggler" :class="showMenu ? 'has-menu' : null">
                <span @click="showMenu = !showMenu">{{showMenu ? 'Close' : 'About Me'}}</span>
            </div>
            <nav :class="showMenu ? 'show-menu' : 'hide-menu'">
                <ul class="columns is-multiline is-gapless menu">
                    <li class="column is-12-small is-6-tablet is-4-desktop">
                        <a href="#"><span>Profile</span></a>
                    </li>
                    <li class="column is-12-small is-6-tablet is-4-desktop">
                        <a href="#"><span>Experience</span></a>
                    </li>
                    <li class="column is-12-small is-6-tablet is-4-desktop">
                        <a href="#"><span>Skills</span></a>
                    </li>
                    <li class="column is-12-small is-6-tablet is-4-desktop">
                        <a href="#"><span>Work</span></a>
                    </li>
                    <li class="column is-12-small is-6-tablet is-4-desktop">
                        <a href="#"><span>Blog</span></a>
                    </li>
                    <li class="column is-12-small is-6-tablet is-4-desktop">
                        <a href="#"><span>Contact</span></a>
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
        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eeeeeb' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
</style>
