import { createApp } from 'vue'
import './assets/css/base.css'
import './assets/fonts/fontawesome-free-6.4.2/css/all.min.css'
import { useStorage } from "vue3-storage";
import App from '@/App.vue'

const app = createApp(App);

app.config.globalProperties.sessionStorage = useStorage();
app.mount('#app')
