<template>
  <div>
    <label for="name">Name: </label>
    <input type="text" id="name" placeholder="Name" v-model="v$.name.$model" />
    <p v-if="v$.name.$error && v$.name.$dirty">{{ !v$.name.required.$invalid }}</p>
    <p>{{ !v$.name.required.$invalid }}</p>
    <button @click="validations">Click</button>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      name: ''
    }
  },
  validations() {
    return {
      name: { required }
    }
  }
}
</script>

<style lang="scss" scoped></style>
