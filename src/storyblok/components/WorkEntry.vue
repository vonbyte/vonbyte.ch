<template>
    <div class="column is-6-tablet is-4-desktop is-3-fullhd work-entry" @focusout="handleFocusOut"
         tabindex="-1" :class="entryClass"
         @click="handleClick">
        <div class="work-entry__content">
            <transition name="fade" mode="out-in">
                <div v-if="!isActive" :key="'inactive'">
                    <h3 class="work-entry__title">{{blok.title}}</h3>
                    <p class="work-entry__year">{{blok.year}}</p>
                    <ul class="work-entry__services">
                        <li v-for="service in blok.services" :key="service._uid"
                            class="work-entry__service">{{service}}
                        </li>
                    </ul>
                </div>
                <div v-else :key="'active'" class="columns is-desktop"  @focus="handleFocus"
                     >
                    <div class="work-entry__close" @click.stop="isActive = false">X</div>
                    <div class="column is-5-desktop work-entry__image">
                        <h3 class="work-entry__title">{{blok.title}}</h3>
                        <img v-if="getImage()" :src="getImage()" alt="">
                        <p class="work-entry__year">{{blok.year}}</p>
                    </div>
                    <div class="column is-7-desktop work-entry__text">
                        <p class="work-entry__description">{{blok.description}}</p>
                        <ul class="work-entry__services">
                            <li v-for="service in blok.services" :key="service._uid"
                                class="work-entry__service">{{service}}
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
    </div>

</template>

<script>
export default {
  name: 'WorkEntry',
  props: ['blok'],
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    entryClass () {
      let className = this.isActive ? 'work-entry--active' : ''
      if (this.blok.image) {
        className = className + ' work-entry--has-image'
      }
      return className.trim()
    }
  },
  methods: {
    handleClick (e) {
      if (!this.isActive) {
        this.isActive = true
        e.stopPropagation()

        e.target.focus()
      }
    },
    handleFocus () {
      console.log('focused')

    },
    handleFocusOut () {
      if (this.isActive) {
        this.isActive = false
      }
    },
    getImage () {
      let image = this.blok.image
      const imageService = '//img2.storyblok.com'
      const resolution = '/400x0'
      return image.replace('//a.storyblok.com', imageService + resolution)
    }
  }
}
</script>

<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.5s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

    .work-entry {
        outline: none;
        @include keepRatio(100%);
        max-width: 500px;
        @include until($tablet) {
            margin: auto;
        }
        &__close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            font-size: 1.1rem;
            cursor: pointer;
            line-height: 1.8;
            text-align: center;
            transition: 0.2s;
            background: rgba($secondary-dark, 0.5);
            color: $primary-light;
            opacity: 0;
        }

        &__content {
            position: absolute;
            top: 1.1rem;
            bottom: 1.1rem;
            left: 1.1rem;
            right: 1.1rem;
            padding: 2rem;
            display: flex;
            z-index: 1;
            justify-content: center;
            text-align: center;
            flex-direction: column;
            color: $secondary-dark;
            background: $primary-light;
            box-shadow: 5px 5px 0 0 $secondary;
            cursor: pointer;
            transition: 0.2s;
            transition-delay: 0.4s;
            transition-property: z-index, left, right, top, bottom;

            &:hover, &:active {
                border: 5px solid darken($primary-light, 5%);
            }
        }

        &:nth-child(even) {
            .work-entry__content {
                background: $secondary-light;
                &:hover, &:active {
                    border-color: darken($secondary-light,8%);
                }
            }
        }

        &:nth-child(3n+1) {
            .work-entry__content {
                background: lighten($primary, 3%);
                &:hover, &:active {
                    border-color: darken($primary,2%);
                }
            }
        }

        &:nth-child(6n) {
            .work-entry__content {
                background: lighten($secondary, 25%);
                &:hover, &:active {
                    border-color: lighten($secondary,15%);
                }
            }
        }

        &__title {
            font-size: $size-4;
            margin-bottom: 1rem;
        }

        &__year {
            font-size: $size-5;
            margin-bottom: 1rem;
        }

        &__services {
            font-size: $size-6;
        }


        &__image {
            img {
                border: 5px solid $primary-light;
                box-shadow: 0 0 10px 0 rgba($secondary-dark, 0.6);
            }
        }

        &--active {

            .work-entry {
                &__content {
                    cursor: default;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: auto;
                    z-index: 100;
                    transition: 0.5s;
                    transition-delay: 0.4s;
                    transition-property: z-index, left, right, top, bottom;
                    @include from($tablet) {
                        bottom: -40%;
                    }
                    &:hover, &:active {
                        border: none;
                    }
                }

                &__text {
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    > p {
                        white-space: pre-line;
                        font-size: $size-6;
                    }
                }
                &__services {
                        margin-top: 3rem;
                    li {
                        display: inline-block;
                        background: $secondary;
                        padding: 0.5rem;
                        margin-right: 0.5rem;
                        margin-top: 0.5rem;
                        font-size: $size-6;
                        border-radius: 5px;
                        color: $primary-light;
                    }
                }

                &__close {
                    opacity: 1;

                    &:hover, &:active {
                        background: rgba($secondary-dark, 0.9);
                        transition: 0.2s;
                    }
                }
            }
            &.work-entry--has-image {
                .work-entry__content {
                    @include from($tablet) {
                        bottom: -80%;
                    }
                    @include from($desktop) {
                        .work-entry__entries {
                            margin-top: 0;
                        }
                    }
                }

            }
            @include from($tablet) {
                &:nth-child(odd) {
                    .work-entry__content {
                        left: 0;
                        right: -100%
                    }
                }
                &:nth-child(even) {
                    .work-entry__content {
                        right: 0;
                        left: -100%
                    }
                }

            }
            @include from($desktop) {
                &:nth-child(2n) {
                    .work-entry__content {
                        right: -100%;
                        left: -100%;
                    }
                }
                &:nth-child(2n+1) {
                    .work-entry__content {
                        right: -100%;
                        left: -100%;
                    }
                }
                &:nth-child(3n) {
                    .work-entry__content {
                        right: 0;
                        left: -200%;
                    }
                }
                &:nth-child(3n+1) {
                    .work-entry__content {
                        right: -200%;
                        left: 0;
                    }
                }
            }
            @include from($fullhd) {
                &:nth-child(4n) {
                    .work-entry__content {
                        right: 0;
                        left: -300%;
                    }
                }
                &:nth-child(4n+1) {
                    .work-entry__content {
                        right: -300%;
                        left: 0;
                    }
                }
                &:nth-child(4n+2) {
                    .work-entry__content {
                        right: -200%;
                        left: -100%;
                    }
                }
                &:nth-child(4n+3) {
                    .work-entry__content {
                        right: -100%;
                        left: -200%;
                    }
                }
            }
        }
    }
</style>
