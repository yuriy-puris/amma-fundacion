import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './components/store'
import './css/app.css'
import router from './router'
import 'query-string'
import 'slick-carousel'
import '../node_modules/slick-carousel/slick/slick.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.use(Vuex)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router,
  store
})





