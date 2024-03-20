<template>
  <div>
    <button @click="changeLocale('kz')">Казахский</button>
    <button @click="changeLocale('ru')">Русский</button>
    <button @click="changeLocale('en')">Английский</button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })

const changeLocale = (newLocale) => {
  locale.value = newLocale
}
</script>
