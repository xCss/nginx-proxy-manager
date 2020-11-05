import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import api from './api/'
import store from './store'

const app = createApp(App).use(store).use(router).use(api)
app.config.globalProperties = api
app.mount('#app')
