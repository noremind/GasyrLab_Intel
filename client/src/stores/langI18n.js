import { createI18n } from 'vue-i18n'
import kz from '@/lang/kz.js'
import ru from '@/lang/ru.js'
import en from '@/lang/en.js'


const currentLocalLang = localStorage.getItem('localLang') ? localStorage.getItem('localLang') : 'ru';

export const i18n = createI18n({
	legacy: false,
	locale: currentLocalLang,
	fallbackLocale: 'ru',
	messages: {
		kz,
		ru,
		en
	}
})
