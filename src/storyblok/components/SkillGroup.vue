<template>
    <div class="skill-group">
        <h2 class="skill-group__title">{{group.title}}</h2>
        <div v-if="!isPersonal" class="columns is-multiline">
            <skill-entry v-for="skill in group.entries" :key="skill._uid" :skill="skill"/>
        </div>
        <div v-else class="personal__wrapper is-flex">
            <div class="personal active">
                <div class="personal__item trigger">
                    <Avatar/>
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

        &__item {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: translateX(0);
            .vb-avatar {
                opacity: 0.75;
                z-index: 500;
                width: 150%;
                height: 150%;
                margin-left: -25%;
                margin-top: -25%;
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
                box-shadow: 0 0 7px 0 $primary;
                font-size: 0.9em;
                display: flex;
                justify-items: center;
                align-items: center;
            }
    }

    $numOfElems: 13;

    @for $i from 1 through $numOfElems {
        $deg: 360deg / $numOfElems;
        .personal__rotator:nth-child(#{$i}) {
            transform: rotate($deg/-2 + $deg * ($i - 1));
            .personal__cloud {
                transform: translateY(-15rem) rotate($deg/2 - $deg * ($i - 1));

            }
        }
    }

</style>
