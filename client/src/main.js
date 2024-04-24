import '@/assets/style/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@/stores/langI18n.js'

import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'
import 'v-calendar/style.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VCalendar, {})
app.use(i18n)

app.mount('#app')
