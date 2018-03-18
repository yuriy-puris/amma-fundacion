<template>
  <div class="collection-gallery-wrap">
    <h2>The Collection</h2>
    <div v-loading.body="loading">
      <div class="collection-gallery">
        <div
          v-for="item in collection"
          class="item"
        >
          <figure>
            <a
              v-bind:style="{ backgroundImage: 'url(' + item.img + ')' }"
              href="#">
            </a>
          </figure>
          <h4>
            <a href="#">{{item.full_name}}</a>
          </h4>
          <p></p>
          <span class="date">{{item.date}}</span>
        </div>
      </div>
    </div>
    <router-link
      class="link-more"
      :to="{
        name: 'about-the-collection',
        params: { name: 'about-the-collection' }
      }">
      Browse all
    </router-link>
  </div>
</template>

<script>
  import $ from 'jquery';
  import Slick from 'vue-slick'

  export default {
    name: 'HomeCollection',
    props: ['collection'],
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
        $('.collection-gallery').slick({
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
          infinite: true,
          speed: 500,
          cssEase: 'linear',
          arrows: false
        });
      }
    }
  }
</script>
