<template>
    <div class="contact-form">
        <div class="contact-form__header">
            <h2>{{blok.Title}}</h2>
        </div>
        <form @submit="onSubmit" class="">
            <input type="hidden" name="_subject" v-model="blok.form.subject" />
            <input type="hidden" :name="honeypot" />
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
  },
  data () {
    return {
      honeypot: ''
    }
  },
  mounted() {

      const random = Math.floor(Math.random() * 999999) + 100000;
      this.honeypot ='_pot-'+random.toString()

  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      let form = e.target
      let data = new FormData(form)

      // Check for spam bot
      if (data.get(this.honeypot)) {
        window.location.reload()
      }
      axios.post('https://formspree.io/mgenzyon',data)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .contact-form {

        form {
            max-width: 500px;
        }
    }
</style>
