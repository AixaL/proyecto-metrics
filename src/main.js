import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueHtml2Canvas from 'vue-html2canvas'
// import imageDataURI from 'image-data-uri'
// import webshot from 'webshot';
// .use(webshot)

createApp(App).use(store).use(VueHtml2Canvas).use(VueAxios, axios).use(router).mount('#app')
