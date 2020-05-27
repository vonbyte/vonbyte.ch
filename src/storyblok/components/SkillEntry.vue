<template>
    <div class="column is-6-tablet is-4-desktop is-3-fullhd progress__container">
        <p class="progress__title">{{skill.title}}</p>
        <progress class="progress" :value="knowhow" max="100" :class="knowhowClass"></progress>
    </div>
</template>

<script>
export default {
  name: 'SkillEntry',
  props: ['skill'],
  data () {
    return {
      knowhow: 0
    }
  },
  computed: {
    knowhowClass () {
      return this.skill.knowhow > 50 ? 'is-advanced' : 'is-basic'
    }
  },
  mounted () {
    setTimeout(() => {
      this.knowhow = this.skill.knowhow
    },500)

  }
}
</script>

<style lang="scss" scoped>


    .progress {
        &__container {
            padding: 0 2rem;
            margin-bottom: 1rem;
            margin-top: 0.5rem;
        }
        &__title {
            padding: 0 0.3rem;
            font-size: .9rem;
            letter-spacing: 2px;
            font-weight: $weight-semibold;
        }
        border-radius: 0;
        height: 0.4rem;
        &::-webkit-progress-value {
            transition: width 0.5s;
        }
        &::-moz-progress-bar {
            transition: width 0.5s;
        }
        &::-ms-fill {
            transition: width 0.5s;
        }
        [value]{
            transition: width 0.5s;
        }
        &.is-basic {
            &::-webkit-progress-value {
                background-color: $oldPink-bis;
                animation: 2s stretch;

            }
            &::-moz-progress-bar {
                background-color: $oldPink-bis ;
            }
            &::-ms-fill {
                background-color: $oldPink-bis;
                border: none
            }
            [value]{
                color: $oldPink-bis;
            }
        }

        &.is-advanced {
            &::-webkit-progress-value {
                background-color: $primary;
            }
            &::-moz-progress-bar {
                background-color: $primary ;
            }
            &::-ms-fill {
                background-color: $primary;
                border: none
            }
            [value]{
                color: $primary;
            }
        }

        span {
            position: absolute;
        }

    }
    @keyframes stretch {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }
</style>
