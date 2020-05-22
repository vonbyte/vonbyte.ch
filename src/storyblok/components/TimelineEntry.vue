<template>
    <li class="timeline-entry columns is-multiline is-desktop">
        <div class="timeline-entry__image">
            <component :is="ucFirst(blok.type)"></component>
        </div>
        <div class="is-hidden-touch column is-3-desktop timeline-entry__date">
            <p v-html="splittedDate"></p>
        </div>
        <div class="column is-9-desktop is-7-fullhd timeline-entry__block">
            <div class="timeline-entry__content">
                <p class="is-hidden-desktop timeline-entry__date">{{blok.Date}}</p>
                <h2 class="timeline-entry__content-title">{{blok.Heading}}</h2>
                <div  v-if="blok.company" class="timeline-entry__content-company">
                    <span class="timeline-entry__content-description"><building/>&nbsp;{{blok.company}}</span>
                    <span v-if="blok.company_url">, <web/>&nbsp;{{blok.company_url}}</span>
                </div>
                <p class="timeline-entry__content-description">{{blok.description}}</p>
                <p v-if="blok.graduation" class="timeline-entry__content-graduation"><degree/>&nbsp;{{blok.graduation}}</p>
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
import Degree from '../../icons/degree'
import Web from '../../icons/web'
import Building from '../../icons/building'

export default {

  name: 'TimelineEntry',
  props: ['blok'],
  components: {
    Education, Job, School, Other, Degree
  },
  data () {
    return {

    }

  },
  computed: {
    splittedDate () {
      let blokDate = this.stripTags(this.blok.Date)
      if (blokDate.indexOf(' - ') !== -1) {
          return blokDate.replace(' - ',' -<br/>') + '&nbsp;&nbsp;&nbsp;'
      }
      return blokDate
    }
  },

  mounted () {
  }
}
</script>

<style lang="scss" scoped>
    .timeline-entry {
        opacity: 0;
        height: 0;
        transform: scaleY(0.8);
        transition: 1.5s opacity ease-out, 0.5s transform ease-in;
        position: relative;

        &__image {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            box-shadow: 0 0 0 4px $oldPink, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
            background: $primary;
            -webkit-transform: translateZ(0);
            -webkit-backface-visibility: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            svg {
                width: 22px;
                fill: $grey-dark;
            }
        }

        &__date {
            border-bottom: 1px solid $oldPink;
            margin-bottom: 0.5rem;
            padding-bottom: 0.5rem;
            @include from($desktop) {
                border:none;
                margin-bottom: 0;
                text-align: right;
                padding: 1rem;
                padding-right: 2.5rem;
            }
        }

        &__block {
            margin-bottom: 2rem;
            padding: 0 0 0 4rem;
            @include from($desktop) {
                padding-left: 3rem;
                padding-right: 3rem;
            }

        }

        &__content {
            background: $primary-light;
            position: relative;
            padding: 1.5rem;
            border-radius: 6px;
            ::before {
                content: '';
                position: absolute;
                top: 1.8rem;
                @include until($desktop) {
                    top: 1.5rem;
                }
                left:-24px;
                height: 0;
                width: 0;
                border: 12px solid transparent;
                border-right-color: $primary-light;
            }


            &-title {
                font-size: 1.5em;
                font-weight: $weight-semibold;
            }
            &-company {
                font-style: italic;
                font-size: 1.1em;
                margin-bottom: 0.5rem;
            }
            &-description {
                margin-bottom: 0.5rem;
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
        &.in-view {
            opacity: 1;
            transform: scaleY(1);
            height: auto;
            transition: 1.5s opacity ease-out, 0.5s transform ease-out;
            .timeline-entry__image {
                position: absolute;
                left: 12px;
                top: 1.3rem;
                @include from($desktop) {
                    left: 25%;
                    top: 0;
                    margin-left: -9px;
                    margin-top: 1.5rem;
                }
            }
        }
    }
</style>
