import Vue from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import '@/assets/global.scss'

Vue.config.productionTip = false
Vue.prototype.$http = axios


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')






