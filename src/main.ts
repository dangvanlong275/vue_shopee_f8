import { createApp } from 'vue';
import { useStorage } from 'vue3-storage';
import App from '@/App.vue'
import ElementPlus from 'element-plus';
import { router } from '@/routes';

const app = createApp(App);
app.config.globalProperties.sessionStorage = useStorage();
app.use(router);
app.use(ElementPlus);

app.mount('#app')
