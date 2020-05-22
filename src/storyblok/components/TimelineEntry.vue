<template>
    <li class="timeline-entry columns is-multiline is-desktop">
        <div class="timeline-entry__image">
            <component :is="ucFirst(blok.type)"></component>
        </div>
        <div class="is-hidden-touch column is-3-desktop timeline-entry__date">
            <p v-html="formattedSmallDate"></p>
        </div>
        <div class="column is-9-desktop is-7-fullhd timeline-entry__block">
            <div class="timeline-entry__content">
                <p v-html="formattedDate" class="is-hidden-desktop timeline-entry__date"></p>
                <h2 class="timeline-entry__content-title">{{blok.heading}}</h2>
                <p v-if="blok.graduation" class="timeline-entry__content-graduation">
                    <degree/>&nbsp;{{blok.graduation}}
                </p>
                <div v-if="blok.company" class="timeline-entry__content-company">
                    <span><building/>&nbsp;{{blok.company}}</span>
                    <span v-if="blok.company_url.cached_url">, <br class="is-hidden-tablet"/><web/>&nbsp;{{blok.company_url.cached_url}}</span>
                </div>
                <p class="timeline-entry__content-description">{{blok.description}}</p>
                <div class="timeline-entry__content-tags">
                    <div v-for="(tech,index) in blok.technologies" :key="index">{{tech}}</div>
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
    Education, Job, School, Other, Degree, Web, Building
  },
  computed: {
    formattedSmallDate () {
      return this.formatDate(true)
    },
    formattedDate () {
      return this.formatDate()
    }
  },
  methods: {
    formatDate (small) {
      const isSmall = small || false
      let startDate = this.$dayjs(this.blok.startDate)
      let endDate = this.blok.endDate ? this.$dayjs(this.blok.endDate) : null
      const separator = isSmall ? ' - <br/>' : ' - '

      // Do we have a date range?
      if (endDate && !startDate.isSame(endDate)) {
        return startDate.locale('de').format('MMMM YYYY') + separator + endDate.locale('de').format('MMMM YYYY') + '&nbsp;&nbsp;&nbsp;'
      }

      // Is the date range ongoing?
      if (this.blok.current) {
        return startDate.locale('de').format('MMMM YYYY') + separator + 'Heute' + '&nbsp;&nbsp;&nbsp;'
      }

      // Otherwise return only the single date
      return startDate.locale('de').format('MMMM YYYY')
    }
  },
}
</script>

<style lang="scss" scoped>
    .timeline-entry {
        opacity: 0;
        height: 0;
        transform: scaleY(0.7);
        position: relative;

        &__image {
            @include centerAll;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            box-shadow: 0 0 0 4px $oldPink, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
            background: $primary;

            // Hack for hardware acceleration
            -webkit-transform: translateZ(0);
            -webkit-backface-visibility: hidden;

            svg {
                width: 1.5rem;
                fill: $grey-dark;
            }
        }

        &__date {
            border-bottom: 1px solid $oldPink;
            margin-bottom: 0.5rem;
            padding-bottom: 0.5rem;
            @include from($desktop) {
                border: none;
                margin-bottom: 0;
                text-align: right;
                padding: 1rem 2.5rem 1rem 1rem;
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
                left: -1.5rem;
                height: 0;
                width: 0;
                border: 0.75rem solid transparent;
                border-right-color: $primary-light;
            }

            &-title {
                font-size: 1.3rem;
                font-weight: $weight-semibold;
            }

            &-company,
            &-graduation {
                font-size: 1.05rem;

                svg {
                    height: 1.3rem;
                    vertical-align: middle;
                }
            }

            &-company {
                font-style: italic;
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;

                svg {
                    margin-bottom: 0.25em;
                }
            }

            &-graduation {
                margin-top: 0.3rem;
                font-weight: bold;
                text-indent: -1.75rem;
                margin-left: 1.75rem;

                svg {
                    height: 1.5rem;
                }
            }

            &-description {
                margin-bottom: 0.5rem;
                white-space: pre-wrap;
                padding-left: 1.5rem;
            }

            &-tags {
                display: flex;
                flex-flow: row wrap;
                padding-left: 1.5rem;

                > div {
                    padding: 0.3rem 0.5rem;
                    font-size: 0.8em;
                    border-radius: 4px;
                    background: $primary;
                    margin-right: 0.5rem;
                    margin-top: 0.5rem;
                }
            }
        }

        &.in-view {
            opacity: 1;
            transform: scaleY(1);
            height: auto;
            transition: 2s opacity ease-out, 0.8s transform ease-in;

            .timeline-entry__image {
                position: absolute;
                left: 0.75rem;
                top: 1.3rem;
                @include from($desktop) {
                    left: 25%;
                    top: 0;
                    margin-left: -0.6rem;
                    margin-top: 1.5rem;
                }
            }
        }
    }
</style>
