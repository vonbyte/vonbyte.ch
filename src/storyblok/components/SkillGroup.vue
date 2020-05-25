<template>
    <div class="skill-group">
        <template v-if="!isPersonal">
            <h2 class="skill-group__title">{{group.title}}</h2>
            <div class="columns is-multiline">
                <skill-entry v-for="skill in group.entries" :key="skill._uid" :skill="skill"/>
            </div>
        </template>
        <div v-else class="personal__wrapper is-flex">
            <div class="personal active">
                <div class="personal__title">
                    <span>Personal Skills</span>
                </div>
                <div class="clouds">
                    <div v-for="skill in group.entries" :key="skill._uid" class="personal__rotator">
                        <div class="personal__cloud">
                            <div class="personal__content">{{skill.title}}</div>
                        </div>
                    </div>
                </div>
            </div>
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

    .absolute-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .personal {
        &__wrapper {
            width: 100%;
            justify-content: center;
            align-items: center;
            margin-top: 18em;
        }
        width: 8rem;
        height: 8rem;
        position: relative;

        &__title {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: translateX(0);
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            > span {
                font-size: 1.5rem;
                border-bottom: 3px solid $primary;
                border-top: 3px solid $primary;
                position: relative;
                &:after,
                &:before {
                    display: block;
                    background: $primary;
                    content: '';
                    width: 80%;
                    height: 3px;
                    position: absolute;
                    top: -10px;
                    left: 10%;
                }
                &::after {
                    top: auto;
                    bottom: -10px;
                }
            }
        }

        &__rotator {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform-origin: 50% 50%;
        }

            .personal__cloud {
                text-align: center;
                padding: 1.2rem;
                opacity: 1;
                z-index: 50;
                border-radius: 50%;
                width: 8rem;
                height: 8rem;
                background: $primary;
                font-size: 0.9em;
                display: flex;
                justify-items: center;
                align-items: center;
            }
        .personal__content {

        }
    }

    $numOfElems: 13;

    @for $i from 1 through $numOfElems {
        $deg: 360deg / $numOfElems;
        .personal__rotator:nth-child(#{$i}) {
            transform: rotate($deg/-2 + $deg * ($i - 1));
            .personal__cloud {
                transform: translateY(-14rem) rotate($deg/2 - $deg * ($i - 1));
            }
        }
    }

</style>
