<template>
    <div class="contact-form">
        <div class="contact-form__header">
            <h2>{{blok.Title}}</h2>
            <div v-if="feedback.mode" class="notification" :class="`is-${feedback.mode}`">
                <p>{{feedback.message}}</p>
            </div>
        </div>
        <form @submit="onSubmit" class="">
            <input type="text" name="_gotcha" style="display: none"/>
            <input type="text" name="honeypot" style="display: none"/>
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
      honeypot: '',
      feedback: {
        mode: '',
        message: ''
      }
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
      data.append('_subject', this.blok.form.subject)

      // Check for spam bot
      if (data.get(this.honeypot)) {
        window.location.reload()
      }
      axios.post('https://formspree.io/mgenzyon',data)
      .then((response) => {
        console.log(response)
        this.feedback.mode = 'success'
        this.feedback.message = 'Thanks for your email'
        form.reset()
      })
      .catch((err) => {
        console.log(err.response)
        this.feedback.mode = 'error'
        this.feedback.message = 'Something went wrong. Please try again.'
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .contact-form {
            max-width: 500px;
    }
</style>
