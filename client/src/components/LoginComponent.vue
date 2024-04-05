<template>
  <div class="form-container sign-in">
    <form @submit.prevent="submitForm()" class="container-auth__form">
      <ButtonCom @click="authUser.goHomePage()" class="btn btn--outline back-btn">{{
        t('global.btn.back')
      }}</ButtonCom>
      <h1 class="container-auth__title">{{ t('page.auth.login.title') }}</h1>
      <input
        class="container-auth__input"
        type="email"
        :placeholder="t('page.auth.login.inputEmail')"
        autocomplete="current-email"
        v-model="v$.loginEmail.$model"
      />
      <input
        class="container-auth__input"
        type="password"
        :placeholder="t('page.auth.login.inputPassword')"
        autocomplete="current-password"
        v-model="v$.loginPassword.$model"
      />
      <p v-if="errorMessage" class="container-auth__error-message">{{ errorMessage }}</p>
      <ButtonCom @submit.prevent="submitForm()" type="submit" class="btn btn--outline">{{
        t('page.auth.login.signIn')
      }}</ButtonCom>
    </form>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import ButtonCom from '@/components/littleComponent/ButtonComponent.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { useAuthUserStore } from '@/stores/authUser.js'
import { useRouter } from 'vue-router'

export default {
  components: {
    ButtonCom
  },
  setup() {
    const authUser = useAuthUserStore()
    const { t } = useI18n()
    const router = useRouter()

    return {
      v$: useVuelidate(),
      t,
      authUser,
      router
    }
  },
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
      errorMessage: ''
    }
  },
  validations() {
    return {
      loginEmail: { required, email },
      loginPassword: { required, minLength: minLength(6) }
    }
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return

      const isAuth = this.authUser.loggedIn(this.loginEmail, this.loginPassword)

      if (!isAuth) {
        this.errorMessage = this.t('page.auth.login.errors.existingPasswordAndEmail')
        return
      }

      this.loginEmail = ''
      this.loginPassword = ''
      this.errorMessage = ''

      this.router.push({ name: 'home' })
    }
  }
}
</script>
