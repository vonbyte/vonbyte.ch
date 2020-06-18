<template>
    <div class="field">
        <label class="label" :for="fieldIdentifier">{{blok.label}}</label>
        <div class="control">
            <input class="input" :id="fieldIdentifier" :name="fieldIdentifier" :placeholder="blok.placeholder" v-if="blok.fieldtype !== 'textarea'" v-model="inputValue"/>
            <textarea class="textarea" v-else :id="fieldIdentifier" :name="fieldIdentifier" cols="30" rows="10"></textarea>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InputField',
  props: ['blok'],
  data () {
    return {
      inputValue: '',
    }
  },
  computed: {
    fieldIdentifier () {
      return this.blok.name.toLowerCase()

    }
  }
}
</script>

<style scoped>

</style>
