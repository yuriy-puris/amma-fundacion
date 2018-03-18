<template>
  <div v-loading.body="loading">
    <div class="big-slider">
      <div
        v-for="item in slider"
        class="item"
      >
        <div class="holder">
          <div class="info">
            <div class="date">{{item.date}}</div>
            <div class="author">{{item.title}}</div>
          </div>
          <div
            v-bind:style="{ backgroundImage: 'url(' + item.img + ')' }"
            class="page-bg"
          >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import $ from 'jquery';
  import Slick from 'vue-slick'

  export default {
    name: 'Slider',
    props: ['slider'],
    components: {
      Slick
    },
    data() {
      return {
        loading: true
      }
    },
    created() {
      setTimeout(() => {
        this.initSlick()
        this.loading= false
    }, 1000)
    },
    methods: {
      initSlick() {
        $('.big-slider').slick({
          dots: true,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: 'linear',
          arrows: false
        });
      }
    }
  }
</script>

