<template>
  <div class="container-auth">
    <div class="form-container sign-up">
      <form class="container-auth__form">
        <h1 class="container-auth__title">{{ t('page.register.title') }}</h1>
        <input
          class="container-auth__input"
          type="text"
          :placeholder="t('page.register.inputName')"
          autocomplete="current-password"
          v-model="authUser.registerName"
        />
        <input
          class="container-auth__input"
          type="email"
          :placeholder="t('page.register.inputEmail')"
          autocomplete="current-password"
          v-model="authUser.registerEmail"
        />
        <input
          class="container-auth__input"
          type="password"
          :placeholder="t('page.register.inputPassword')"
          autocomplete="current-password"
          v-model="authUser.registerPassword"
        />
        <Button class="btn btn--ontline">{{ t('page.register.signUp') }}</Button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '@/components/littleComponent/ButtonComponent.vue'
import { useAuthUserStore } from '@/stores/authUser.js'

const authUser = useAuthUserStore()

const { t } = useI18n()

// const containerDiv = ref(null)
</script>

<style lang="scss" scoped></style>
