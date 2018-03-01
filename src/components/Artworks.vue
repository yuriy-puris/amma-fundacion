<template>
  <div class="container">
    <h2>Artworks</h2>
    <div class="artworks-holder">
      <div class="filter-checkboxes">
        <label>Filter By Type</label>
        <ul class="artworks-types">
          <li
            v-for="(value, key, index) in filter_settings.types"
            :key="index"
          >
            <label>
              <input
                type="checkbox"
                v-model="filter_types"
                v-bind:value="value"
              >
              {{ value }}
            </label>
          </li>
        </ul>
        <label>Show Only</label>
        <ul>
          <li><a href="#">New Acquisitions</a></li>
        </ul>
      </div>
      <!--filter types-->
      <div class="toolbar-sorting">
        <div class="sorting">
          Per page:
          <div class="select-wrap">
            <select v-model="perPage">
              <option
                v-for="(perPageOption, index) in filter_settings.per_page"
                :value="perPageOption"
                :key="index"
              >
                  {{ perPageOption }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <!--toolbar sorting-->
      <div class="collection-wrap">
        <ul class="collection-gallery">
          <li
            v-for="(item, index) in artworks"
          >
            <div class="item">
              <figure>
                <a href="#">
                  <img :src="item.acf.artwork_gallery[1].url">
                </a>
              </figure>
              <h3>
                <a href="#">
                  {{ item.acf.artwork_artist_label }}
                </a>
              </h3>
              <h4>
                <a href="#">
                  {{ item.title.rendered }}
                </a>
              </h4>
              <span class="date">
                  {{ item.acf.artwork_year }}
              </span>
              <span class="category">
                  {{ item.acf.artwork_medium }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  const queryString = require('query-string');
  import { mapState } from 'vuex'
  import router from '../router'
  import FilterSettings from '../components/FilterSettings'

  export default {
    name: 'Artworks',
    data() {
      return {
        filter_types: [],
        perPage: this.$route.query.per_page || 4
      }
    },
    watch: {
      $route({ query }) {
        this.getArtworks(query)
      },
      filter_types(info) {
        let prevQuery = this.$route.query
        let nextQuery = {...prevQuery, types: info.length ? info.join('%2C') : undefined }
        this.$router.push({query: nextQuery})
      },
      perPage(info) {
        let prevQuery = this.$route.query
        let nextQuery = {...prevQuery, per_page: info }
        this.$router.push({query: nextQuery})
      }
    },
    computed: {
      ...mapState([
        'artworks',
        'filter_settings'
      ])
    },
    methods: {
      getArtworks(query) {
        this.$store.dispatch('LOAD_ARTWORKS', query)
      },
      getSettings() {
        this.$store.dispatch('LOAD_FILTER_SETTINGS')
      },
    },
    created() {
      this.getArtworks()
      this.getSettings()
    },
  }

</script>
