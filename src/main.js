import Vue from 'vue'
import 'lib-flexible/flexible'
import store from "./vuex/store";
import router from "./router";
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import  "./mock/mock-server"
import Header from "./components/header/Header.vue";

Vue.config.productionTip = false
// 注册全局组件
Vue.component('Header', Header);

Vue.use(VueLazyload,{
  
  loading:require("../src/assets/images/lazyLoading.gif") 
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

