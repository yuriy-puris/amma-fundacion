<template>
    <!--<div v-loading.body="loading" class="main-gallery-wrap">-->
      <!--<div class="big-slider">-->
        <!--<div-->
          <!--v-for="item in slider"-->
          <!--class="item"-->
        <!--&gt;-->
          <!--<div class="holder">-->
            <!--<div class="info">-->
              <!--<div class="date">{{item.date}}</div>-->
              <!--<div class="author">{{item.title}}</div>-->
            <!--</div>-->
            <!--<div-->
              <!--v-bind:style="{ backgroundImage: 'url(' + item.img + ')' }"-->
              <!--class="page-bg"-->
            <!--&gt;-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <div class="big-slider">
    <slick ref="slick" :options="slickOptions">
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
    </slick>
  </div>
</template>


<script>
  import Slick from 'vue-slick'

  export default {
    name: 'Slider',
    props: ['slider'],
    components: {
      Slick
    },
    data() {
      return {
        slickOptions: null
      }
    },
    mounted() {
      setTimeout(function() {
        this.slickOptions = {
          slidesToShow: 4,
          infinite: true,
          accessibility: true,
          adaptiveHeight: false,
          arrows: false,
          dots: true,
          draggable: true,
          edgeFriction: 0.30,
          swipe: true
        }
      }, 3000)
    }
  }
</script>

