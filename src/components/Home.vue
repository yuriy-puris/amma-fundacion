<template>
  <div class="home-holder">
    <Slider
      v-bind:slider="data_slider_artworks"
    />
    <HomeCollection
      v-bind:collection="data_collection"
    />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Slider from '../components/Slider'
  import HomeCollection from '../components/HomeCollection'

  export default {
    name: 'Home',
    data() {
      return {
        data_collection: null,
        data_slider_artworks: null,
        data_exhibitions: null,
        data_artists: null,
      }
    },
    components: {
      Slider,
      HomeCollection
    },
    watch: {
      'home_page': function() {
        this.data_collection = this.home_page.home_collection
        this.data_slider_artworks = this.home_page.home_slider_artworks
        this.data_exhibitions = this.home_page.home_exhibitions
        this.data_artists = this.home_page.home_artists
      }
    },
    computed: {
      ...mapState([
        'home_page'
      ])
    },
    created() {
      this.loadHomePage()
    },
    mounted() {
      this.loadHomePage()
    },
    methods: {
      loadHomePage() {
        this.$store.dispatch('LOAD_HOME_PAGE')
      }
    },
  }
</script>
