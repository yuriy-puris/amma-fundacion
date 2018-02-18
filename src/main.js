import $ from 'jquery';
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './css/app.css'
import router from './router'
import 'slick-carousel'
import './sliderVue'
import store from './components/store'
Vue.use(Vuex)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router,
  store
})


//slider
$('.big-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  lazyLoad: 'progressive'
})
