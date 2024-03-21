import '@/assets/style/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n' //For switching language

import App from './App.vue'
import router from './router'

<<<<<<< HEAD
=======
const app = createApp(App)

app.use(createPinia())
app.use(router)

>>>>>>> 25cfb710a08830448ac422b1f84f83ec39fca663
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

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
