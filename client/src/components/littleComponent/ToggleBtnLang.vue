<template>
  <div class="lang">
    <Transition mode="out-in" name="lang">
      <button class="lang__btn" @click="changeLocale('ru')" v-if="locale == 'kz'">KZ</button>
      <button class="lang__btn" @click="changeLocale('en')" v-else-if="locale == 'ru'">RU</button>
      <button class="lang__btn" @click="changeLocale('kz')" v-else-if="locale == 'en'">ENG</button>
    </Transition>
  </div>
</template>

<script setup>
import { usehashLangStores } from '@/stores/hashLang'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })
const hashLang = usehashLangStores()
const route = useRoute()
const router = useRouter()
const { tm } = useI18n()

const changeLocale = (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('localLang', newLocale)

  if (route.name === 'course') {
    const tmp = tm('page.main.main.ourCourses.courses')

    const localeTmp = localStorage.getItem('idCurrentCourse')

    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i].detail.id === +localeTmp) {
        hashLang.goToCourse(router, tmp[i].detail.title, tmp[i].detail)
      }
    }
  }
  setTimeout(() => {
    window.location.reload()
  }, 100)
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/abstracts/' as abs;

.lang__btn {
  transition: 0.2s all ease;

  &:hover {
    color: abs.$accent-color;
  }
}

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
