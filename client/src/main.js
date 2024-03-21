import '@/assets/style/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n' //For switching language

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import kz from '@/lang/kz.js'
import ru from '@/lang/ru.js'
import en from '@/lang/en.js'

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    kz,
    ru,
    en
  }
})

app.use(i18n).mount('#app')
