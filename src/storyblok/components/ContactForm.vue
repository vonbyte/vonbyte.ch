<template>
    <div class="contact-form">
        <div class="contact-form__header">
            <h2>{{blok.Title}}</h2>
        </div>
        <form action="#" class="">
            <component :key="field._uid" v-for="field in blok.form" :blok="field" :is="field.component"></component>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import InputField from './InputField'

export default {
  name: 'ContactForm',
  props: ['blok'],
  components: {
    InputField
  }
}
</script>

<style scoped lang="scss">
    .contact-form {
        &__header {
            margin-top: 3rem;
        }

        form {
            max-width: 500px;
        }
    }
</style>
