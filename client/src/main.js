import '@/assets/style/main.css'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css' // Accordion styles

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@/stores/langI18n.js'
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel' //Accardion

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueCollapsiblePanel)


app.use(i18n)

app.mount('#app')
