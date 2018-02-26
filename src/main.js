import $ from 'jquery';
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './components/store'
import './css/app.css'
import router from './router'
import 'query-string'
import 'slick-carousel'
import './sliderVue'

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
