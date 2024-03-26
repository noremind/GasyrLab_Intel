<template>
  <main>
    <div class="form-container sign-in">
      <form class="container-auth__form">
        <h1 class="container-auth__title">{{ t('page.login.title') }}</h1>
        <input
          class="container-auth__input"
          type="email"
          :placeholder="t('page.login.inputEmail')"
          autocomplete="current-password"
        />
        <input
          class="container-auth__input"
          type="password"
          :placeholder="t('page.login.inputPassword')"
          autocomplete="current-password"
        />
        <Button class="btn btn--outline">{{ t('page.login.signIn') }}</Button>
      </form>
    </div>
  </main>
</template>

<script setup>
// import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '@/components/littleComponent/ButtonComponent.vue'

const { t } = useI18n()
</script>

<style lang="scss" scoped></style>
