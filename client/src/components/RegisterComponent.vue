<template>
  <div class="container-auth">
    <div class="form-container sign-up">
      <LangBtn class="lang-btn"></LangBtn>
      <form @submit.prevent="submitForm()" class="container-auth__form">
        <h1 class="container-auth__title">{{ t('page.auth.register.title') }}</h1>
        <input
          class="container-auth__input"
          type="text"
          :placeholder="t('page.auth.register.inputName')"
          autocomplete="current-name"
          v-model="v$.registerName.$model"
          :class="v$.registerName.$error ? 'container-auth__input--invalid' : ' '"
        />
        <p
          class="container-auth__error-message"
          v-if="v$.registerName.$dirty && v$.registerName.required.$invalid"
        >
          {{ t('page.auth.register.errors.requiredField') }}
        </p>
        <input
          class="container-auth__input"
          type="email"
          autocomplete="current-email"
          :placeholder="t('page.auth.register.inputEmail')"
          v-model.trim="v$.registerEmail.$model"
          :class="v$.registerEmail.$error ? 'container-auth__input--invalid' : ' '"
        />
        <p
          class="container-auth__error-message"
          v-if="v$.registerEmail.$dirty && v$.registerEmail.email.$invalid"
        >
          {{ t('page.auth.register.errors.correctEmail') }}
        </p>
        <p
          class="container-auth__error-message"
          v-if="v$.registerEmail.$dirty && v$.registerEmail.required.$invalid"
        >
          {{ t('page.auth.register.errors.requiredField') }}
        </p>
        <input
          class="container-auth__input"
          type="password"
          :placeholder="t('page.auth.register.inputPassword')"
          autocomplete="current-password"
          v-model.trim="v$.registerPassword.$model"
          :class="v$.registerPassword.$error ? 'container-auth__input--invalid' : ' '"
        />
        <p
          class="container-auth__error-message"
          v-if="v$.registerPassword.$dirty && v$.registerPassword.minLength.$invalid"
        >
          {{ t('page.auth.register.errors.minFieldLength') }}
        </p>
        <p
          class="container-auth__error-message"
          v-if="v$.registerPassword.$dirty && v$.registerPassword.required.$invalid"
        >
          {{ t('page.auth.register.errors.requiredField') }}
        </p>
        <ButtonCom type="submit" class="btn btn--primary">{{
          t('page.auth.register.signUp')
        }}</ButtonCom>
      </form>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import ButtonCom from '@/components/littleComponent/ButtonComponent.vue'
import LangBtn from '@/components/littleComponent/ToggleBtnLang.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { useRouter } from 'vue-router'
import { useAuthUserStore } from '@/stores/authUser.js'

export default {
  components: {
    ButtonCom,
    LangBtn
  },
  setup() {
    const { t } = useI18n()
    const authUser = useAuthUserStore()

    return {
      v$: useVuelidate(),
      authUser,
      t
    }
  },
  data() {
    return {
      // authUser: useAuthUserStore(),
      router: useRouter(),
      registerName: '',
      registerEmail: '',
      registerPassword: ''
    }
  },
  validations() {
    return {
      registerName: { required },
      registerEmail: { required, email },
      registerPassword: { required, minLength: minLength(6) }
    }
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return

      this.authUser.registrationUserCompleted(
        this.registerName,
        this.registerEmail,
        this.registerPassword
      )

      this.registerEmail = ''
      this.registerName = ''
      this.registerPassword = ''

      this.router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.lang-btn {
  float: right;
  position: relative;
  z-index: 10;
  top: clamp(0.625rem, 0.511rem + 0.57vw, 0.938rem);
  right: clamp(0.625rem, 0.17rem + 2.27vw, 1.875rem);
}
</style>
