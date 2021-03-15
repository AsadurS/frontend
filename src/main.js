import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

import CKEditor from '@ckeditor/ckeditor5-vue'
import  '@/store/subscribe'
import './assets/css/style.css'
import 'toastr/build/toastr.min.css'

axios.defaults.baseURL = "http://localhost:8000";

createApp(App)
.use(store)
.use(router)
.use(CKEditor).mount('#app')
