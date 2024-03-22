<template>
  <div class="lang">
    <Transition mode="out-in" name="lang">
      <button class="lang__btn" @click="changeLocale('ru')" v-if="locale == 'kz'">Kaz</button>
      <button class="lang__btn" @click="changeLocale('en')" v-else-if="locale == 'ru'">Ru</button>
      <button class="lang__btn" @click="changeLocale('kz')" v-else-if="locale == 'en'">Eng</button>
    </Transition>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })

const changeLocale = (newLocale) => {
  locale.value = newLocale
}
</script>

<style scoped lang="scss">
// .lang {
//   position: absolute;
//   top: 50px;
// }

.lang-enter-active,
.lang-leave-active {
  transition: all 0.25s ease-out;
}

.lang-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.lang-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
