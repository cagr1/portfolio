import { createApp } from 'vue'
import App from './App.vue'
import { inject } from '@vercel/analytics'
import './style.css'

inject()
createApp(App).mount('#app')
