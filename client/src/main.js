import '@/assets/style/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n' //For switching language

import App from './App.vue'
import router from './router'

<<<<<<< HEAD
const app = createApp(App)

app.use(createPinia())
app.use(router)

=======
>>>>>>> 4567020cbeec503dde8d6db65ef086f3f84916d9
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

<<<<<<< HEAD
=======
const app = createApp(App)

app.use(createPinia())
app.use(router)
>>>>>>> 4567020cbeec503dde8d6db65ef086f3f84916d9
app.use(i18n)

app.mount('#app')
