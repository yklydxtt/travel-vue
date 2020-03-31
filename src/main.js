import Vue from 'vue'
import VueRouter from 'vue-router'
import fastclick from 'fastclick'
import App from './App.vue'
import routes from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.use(VueRouter)
fastclick.attach(document.body);
Vue.config.productionTip = false
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
