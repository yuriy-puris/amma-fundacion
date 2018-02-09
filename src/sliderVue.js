import Vue from 'vue';
import Slider from './components/Slider.vue';
import ElementUI from 'element-ui';
import '../node_modules/slick-carousel/slick/slick.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  components: {
    'app-slider-top': Slider
  }
});


