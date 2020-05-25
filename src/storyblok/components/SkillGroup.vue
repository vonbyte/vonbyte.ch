<template>
    <div class="skill-group">
        <template v-if="!isPersonal">
            <h2 class="skill-group__title">{{group.title}}</h2>
            <div class="columns is-multiline">
                <skill-entry v-for="skill in group.entries" :key="skill._uid" :skill="skill"/>
            </div>
        </template>
        <div v-else class="personal">
            <ul class="hc">
                <li v-for="skill in group.entries" :key="skill._uid" class="hc-cell">
                    <div class="hc-cell__title">{{skill.title}}</div>
                </li>

                <li class="hc-cell hc__placeholder"></li>

            </ul>
        </div>
    </div>
</template>

<script>
import SkillEntry from './SkillEntry'
import Avatar from '../../components/Avatar'

export default {
  name: 'SkillGroup',
  components: { SkillEntry, Avatar },
  props: ['group', 'isPersonal']
}
</script>

<style lang="scss" scoped>
    h2 {
        border-bottom: 2px solid $oldPink;
        padding: 0.3rem 0.5rem;
    }

    .skill-group {
        margin: 2.5rem 0;

        &__title {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            margin-top: 1.5rem;
        }
    }

    $cell-width: 120px;
    $cell-height: $cell-width*.55;
    $cell-margin: 15px;
    $grid-max-width: 800px;
    $viewport-thereshold: $cell-width + $cell-margin;

    .personal {
        display: flex;
        justify-content: center;
        .hc {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            max-width: $grid-max-width;
            transform: translateY(#{$cell-height/4});

            &-cell {
                flex: 0 1 $cell-width;
                max-width: $cell-width;
                height: $cell-height;
                margin: $cell-height/2.1 $cell-margin/2 $cell-margin;
                position: relative;
                padding: 0.5em;
                text-align: center;
                transition: transform 0.3s ease-in;

                &__title {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    hyphens: auto;
                    word-break: break-word;
                    color: $black;
                    font-size: 0.85rem;
                    transition: opacity 350ms;
                }

                &::before, &::after {
                    content: '';
                    top: -50%;
                    left: 0;
                    width: 100%;
                    height: 200%;
                    display: block;
                    position: absolute;
                    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                    z-index: -1;
                }

                &::before {
                    background: $primary;
                    transform: scale(1.02);
                }

                &::after {
                    background: $white;
                    opacity: 1;
                    transition: opacity 350ms;
                    transform: scale(0.98);
                }

                &:hover {
                    transform: scale(1.1);
                    cursor: default;
                    transition: transform 0.3s ease-out;
                }
            }

            &__placeholder{
                display:none;
                opacity: 0;
                width: $cell-width;
                margin: 0 $cell-margin/2;
            }

        }
        @media (max-width:#{2*$viewport-thereshold}){
            .hc-cell {
                margin: #{$cell-margin/2 + $cell-height/2} $cell-margin;
            }
        }

        @media (min-width: #{2*$viewport-thereshold}) and (max-width:#{3*$viewport-thereshold}){
            .hc-cell:nth-child(3n) {
                margin-right: calc(50% - #{$cell-width/2});
                margin-left: calc(50% - #{$cell-width/2});
            }

            .hc__placeholder:nth-child(3n + 5) {
                display:block;
            }
        }

        @media (min-width: #{3*$viewport-thereshold}) and (max-width:#{4*$viewport-thereshold}) {
            .hc-cell:nth-child(5n + 4) {
                margin-left: calc(50% - #{$cell-width + $cell-margin});
            }

            .hc-cell:nth-child(5n + 5) {
                margin-right: calc(50% - #{$cell-width + $cell-margin});
            }

            .hc__placeholder:nth-child(5n), .hc__placeholder:nth-child(5n + 3) {
                display:block;
            }
        }

        @media (min-width: #{4*$viewport-thereshold}) {
            .hc-cell:nth-child(7n + 5)  {
                margin-left: calc(50% - #{$cell-width*1.5 + $cell-margin});
            }

            .hc-cell:nth-child(7n + 7), .hc-cell:nth-child(7n + 5):nth-last-child(2) {
                margin-right: calc(50% - #{$cell-width*1.5 + $cell-margin});
            }

            .hc__placeholder:nth-child(7n + 7), .hc__placeholder:nth-child(7n + 9), .hc__placeholder:nth-child(7n + 11){
                display:block;
            }
        }
    }
    .honeycomb {



    }




</style>
