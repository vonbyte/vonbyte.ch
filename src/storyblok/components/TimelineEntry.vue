<template>
    <li class="timeline-entry columns is-multiline">
        <div class="timeline-entry__image">
            <component :is="ucFirst(blok.type)"></component>
        </div>
        <div class="column is-12-mobile is-3-desktop timeline-entry__date">
            <p v-html="splittedDate"></p>
        </div>
        <div class="column is-12-mobile  is-9-desktop is-7-fullhd timeline-entry__block">
            <div class="timeline-entry__content">
                <h2 class="timeline-entry__content-title">{{blok.Heading}}</h2>
                <h2 class="timeline-entry__content-company">Company</h2>
                <p class="timeline-entry__content-description">{{blok.description}}</p>
                <div class="timeline-entry__content-tags">
                    <div>Tag 1</div>
                    <div>Tag 2</div>
                    <div>Langer Tag 3</div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
import Education from '../../icons/education'
import School from '../../icons/school'
import Job from '../../icons/job'
import Other from '../../icons/other'
export default {

  name: 'TimelineEntry',
  props: ['blok'],
  components: {
    Education, Job, School, Other
  },
  data () {
    return {
      desktopMatch: ''
    }

  },
  computed: {
    splittedDate () {
      let blokDate = this.stripTags(this.blok.Date)
      if (this.desktopMatch.matches && blokDate.indexOf(' - ') !== -1) {
          return blokDate.replace(' - ',' -<br/>') + '&nbsp;&nbsp;&nbsp;'
      }
      return blokDate
    }
  },

  mounted () {
    this.desktopMatch = window.matchMedia('(min-width: 1024px) and (max-width: 1215px)')
  }
}
</script>

<style lang="scss" scoped>
    .timeline-entry {
        opacity: 0;
        transition: 1.5s all ease-out;

        &__image {
            position: absolute;
            padding: 0.3rem;
            top: 8px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            box-shadow: 0 0 0 4px $oldPink, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
            background: $primary;
            left: 8px;
            -webkit-transform: translateZ(0);
            -webkit-backface-visibility: hidden;
            @include from($desktop) {
                left: 25%;
                margin-left: -10px;
                margin-top: 10px;
            }
        }

        &__date {
            padding: 1rem;
            padding-right: 2.5rem;
            text-align: right;
        }

        &__block {
            margin-bottom: 2rem;
            padding: 0 3rem;

        }

        &__content {
            background: $primary-light;
            position: relative;
            padding: 1rem;
            ::before {
                content: '';
                position: absolute;
                top: 1.2rem;
                left:-24px;
                height: 0;
                width: 0;
                border: 12px solid transparent;
                border-right: 12px solid $primary-light;
            }

            &-title {
                font-size: 1.5em;
                font-weight: $weight-semibold;
            }
            &-company {
                font-style: italic;
                font-size: 1.1em;
            }
            &-description {

            }
            &-tags {
                display: flex;
                flex-flow: row wrap;
                > div {
                    padding: 0.3rem 0.5rem;
                    font-size: 0.8em;
                    border-radius: 4px;
                    background: $primary;
                    margin-right: 0.3rem;
                }
            }
        }


    }
</style>
