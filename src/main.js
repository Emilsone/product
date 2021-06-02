import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
// import VueCarousel from 'vue-carousel'
import './assets/styles/index.css';


// Vue.use(VueCarousel);
Vue.config.productionTip = false
Vue.use(Vuelidate) 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
