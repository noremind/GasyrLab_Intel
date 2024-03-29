<template>
  <div class="container-auth">
    <div class="form-container sign-up">
      <form class="container-auth__form">
        <h1 class="container-auth__title">{{ t('page.auth.register.title') }}</h1>
        <input
          class="container-auth__input"
          type="text"
          :placeholder="t('page.auth.register.inputName')"
          autocomplete="current-password"
        />
        <input
          class="container-auth__input"
          type="email"
          :placeholder="t('page.auth.register.inputEmail')"
        />
        <input
          class="container-auth__input"
          type="password"
          :placeholder="t('page.auth.register.inputPassword')"
          autocomplete="current-password"
        />
        <Button class="btn btn--outline">{{ t('page.auth.register.signUp') }}</Button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '@/components/littleComponent/ButtonComponent.vue'
// import { useAuthUserStore } from '@/stores/authUser.js'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const registerName = ref('')
const registerEmail = ref('')
const registerPassword = ref('')

const validations = {
  registerName: '',
  registerEmail: '',
  registerPassword: ''
}

const { t } = useI18n()

const v$ = useVuelidate(validations)
// const authUser = useAuthUserStore()
</script>

<style lang="scss" scoped></style>
