import Vue from 'vue'
import App from './App.vue'
import Vant from "vant"
import axios from 'axios'
import pure from 'purecss'
import 'vant/lib/vant-css/index.css'


import routerConfig from './router'


Vue.use(pure)
Vue.use(Vant)
Vue.prototype.$http=axios
Vue.config.productionTip = false



new Vue({
    routerConfig,
    render: h => h(App)
}).$mount('#app')
