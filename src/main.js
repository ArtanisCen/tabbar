import Vue from 'vue'
import App from './App.vue'
import "./assets/fonts/iconfont.css"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.css"

axios.defaults.baseURL = "https://www.escook.cn";
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
