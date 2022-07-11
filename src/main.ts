import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

import './index.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
