import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import plugins
import App from '@/App.vue'
import router from '@/router'

// Import components
import BaseCard from '@/components/base-components/BaseCard.vue'

const app = createApp(App)
// plugins
app.use(createPinia())
app.use(router)
// components
app.component('base-card', BaseCard)
// mount
app.mount('#app')
