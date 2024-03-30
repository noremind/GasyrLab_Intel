<template>
  <div class="form-container sign-in">
    <ButtonCom class="btn btn--outline back-btn">Назад</ButtonCom>
    <form class="container-auth__form">
      <h1 class="container-auth__title">{{ t('page.auth.login.title') }}</h1>
      <input
        class="container-auth__input"
        type="email"
        :placeholder="t('page.auth.login.inputEmail')"
        autocomplete="current-email"
        v-model="v$.loginEmail.$model"
        :class="v$.loginEmail.$error ? 'container-auth__input--invalid' : ' '"
      />
      <p class="container-auth__error-message" v-if="v$.loginEmail.$dirty && isCorrectEmail()">
        {{ t('page.auth.login.errors.existingEmail') }}
      </p>
      <input
        class="container-auth__input"
        type="password"
        :placeholder="t('page.auth.login.inputPassword')"
        autocomplete="current-password"
        v-model="v$.loginPassword.$model"
        :class="v$.loginPassword.$error ? 'container-auth__input--invalid' : ' '"
      />
      <p
        class="container-auth__error-message"
        v-if="v$.loginPassword.$dirty && isCorrectPassword()"
      >
        {{ t('page.auth.login.errors.existingPassword') }}
      </p>
      <ButtonCom class="btn btn--outline">{{ t('page.auth.login.signIn') }}</ButtonCom>
    </form>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import ButtonCom from '@/components/littleComponent/ButtonComponent.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  components: {
    ButtonCom
  },
  setup() {
    const { t } = useI18n()
    function isCorrectEmail() {
      return true
    }
    function isCorrectPassword() {
      return true
    }
    return {
      v$: useVuelidate(),
      t,
      isCorrectEmail,
      isCorrectPassword
    }
  },
  data() {
    return {
      loginEmail: '',
      loginPassword: ''
    }
  },
  validations() {
    return {
      loginEmail: { required, email },
      loginPassword: { required, minLength: minLength(6) }
    }
  }
}
</script>

<style lang="scss">
.back-btn {
  position: absolute;
  top: 0;
  left: clamp(0rem, -0.341rem + 1.7vw, 0.938rem);
  z-index: 5;
  max-width: 100px;
  width: 100%;
}
</style>
