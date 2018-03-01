<template>
  <div class="filter-settings">
    <div class="search-filter">

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

    <!--<div class="filter-selects">-->
      <!--<label>Date</label>-->
      <!--<div class="select-wrap">-->
        <!--<select name="artwork_year">-->
          <!--<option-->
            <!--v-for="item in settings.artwork_year"-->
            <!--v-bind:value="item"-->
          <!--&gt;-->
            <!--{{item}}-->
          <!--</option>-->
        <!--</select>-->
      <!--</div>-->
      <!--<label>Sort By</label>-->
      <!--<div class="select-wrap">-->
        <!--<select name="orderby">-->
          <!--<option-->
            <!--v-for="item in settings.orderby"-->
            <!--v-bind:value="item"-->
          <!--&gt;-->
            <!--{{item}}-->
          <!--</option>-->
        <!--</select>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="toolbar-sorting">-->
      <!--<div class="items-showing">Showing: <span>1</span> Works</div>-->
      <!--<div class="sorting">-->
        <!--<label>Per page</label>-->
        <!--<div class="select-wrap">-->
          <!--<select-->
            <!--v-on:change="changeRoute"-->
          <!--&gt;-->
            <!--<option-->
              <!--v-for="item in settings.per_page"-->
              <!--v-bind:value="item"-->
            <!--&gt;-->
              <!--{{ item }}-->
            <!--</option>-->
          <!--</select>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    </div>
  </div>
</template>

<script>
  const queryString = require('query-string');
  import router from '../router'
  import vSelect from 'vue-select'
  import { mapState } from 'vuex'
  export default {
    name: 'FilterSettings',
    components: {
      vSelect,
    },
    data() {
      return {
        filter_types: [],
        settings: null,
        query_string: ''
      }
    },
    watch: {
      filter_types(info) {
        let prevQuery = this.$route.query
        let nextQuery = {...prevQuery, types: info.length ? info.join('%2C') : undefined }
        this.$router.push({query: nextQuery})
      }
    },
    computed: {
      ...mapState([
        'filter_settings'
      ])
    },
    methods: {
      getSettings() {
        this.$store.dispatch('LOAD_FILTER_SETTINGS')
      },
      changeRoute(event) {
        const path = event.target.value
        router.push({ query: { per_page: `${path}` } })
        this.query_string = queryString.stringify(this.$route.query);
        this.$store.dispatch('LOAD_ARTWORKS', { query: '&'+this.query_string })
      }
    },
    created() {
      this.getSettings()
    },
  }
</script>
