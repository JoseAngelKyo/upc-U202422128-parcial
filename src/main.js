import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Material from "@primeuix/themes/material"

import './style.css'
import App from './App.vue'
import i18n from 'vue-i18n'
import pinia from "pinia";
import router from './router'


createApp(App).
    use(i18n)
    .use(pinia)
    .use(router)
    .mount('#app')
