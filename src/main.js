import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import '@/store/subscribe'
import './assets/css/style.css'
import 'toastr/build/toastr.min.css'

axios.defaults.baseURL = "http://localhost:8000";

store.dispatch('auth/authenticate', localStorage.getItem('token')).then(() => {
    createApp(App)
        .use(store)
        .use(router)
        .mount('#app')
})