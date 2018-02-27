<template>
  <div class="filter-settings">
    <div class="search-filter">

    <div class="filter-checkboxes">
      <label>Filter By Type</label>
      <ul class="artworks-types">
        <li>
          <span class="jcf-checkbox jcf-checked">
            <input type="checkbox" value="painting" style="position: absolute; height: 100%; width: 100%; opacity: 0; margin: 0px;">
            <span></span>
          </span>
          <router-link
            :to="{
              query: { types: `${ settings.types.painting.toLowerCase() }` }
            }"
          >
            {{ settings.types.painting }}
          </router-link>
        </li>
        <li>
          <span class="jcf-checkbox jcf-checked">
            <input type="checkbox" value="painting" style="position: absolute; height: 100%; width: 100%; opacity: 0; margin: 0px;">
            <span></span>
          </span>
          <router-link
            :to="{
              query: { types: `${ settings.types.sculpture.toLowerCase() }` }
            }"
          >
            {{ settings.types.sculpture }}
          </router-link>
        </li>
        <li>
          <span class="jcf-checkbox jcf-checked">
            <input type="checkbox" value="painting" style="position: absolute; height: 100%; width: 100%; opacity: 0; margin: 0px;">
            <span></span>
          </span>
          <router-link
            :to="{
              query: { types: `${ settings.types.other.toLowerCase() }` }
            }"
          >
            {{ settings.types.other }}
          </router-link>
        </li>
        <li>
          <span class="jcf-checkbox jcf-checked">
            <input type="checkbox" value="painting" style="position: absolute; height: 100%; width: 100%; opacity: 0; margin: 0px;">
            <span></span>
          </span>
          <router-link
            :to="{
              query: { types: `${ settings.types.photography.toLowerCase() }` }
            }"
          >
            {{ settings.types.photography }}
          </router-link>
        </li>
      </ul>
      <label>Show Only</label>
      <ul>
        <li><a href="#">New Acquisitions</a></li>
      </ul>
    </div>

    <div class="filter-selects">
      <label>Date</label>
      <div class="select-wrap">
        <select name="artwork_year">
          <option
            v-for="item in settings.artwork_year"
            v-bind:value="item"
          >
            {{item}}
          </option>
        </select>
      </div>
      <label>Sort By</label>
      <div class="select-wrap">
        <select name="orderby">
          <option
            v-for="item in settings.orderby"
            v-bind:value="item"
          >
            {{item}}
          </option>
        </select>
      </div>
    </div>
    </div>
    <div class="toolbar-sorting">
      <div class="items-showing">Showing: <span>1</span> Works</div>
      <div class="sorting">
        <label>Per page</label>
        <div class="select-wrap">
          <select
            v-on:change="changeRoute"
          >
            <option
              v-for="item in settings.per_page"
              v-bind:value="item"
            >
              {{ item }}
            </option>
          </select>
        </div>
      </div>
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
        settings: null,
        query_string: ''
      }
    },
    computed: ([
      'filter_settings'
    ]),
    methods: {
      changeRoute(event) {
        const path = event.target.value
        router.push({ query: { per_page: `${path}` } })
        this.query_string = queryString.stringify(this.$route.query);
      }
    },
    created() {
      this.settings = this.$store.state.filter_settings
    },
  }
</script>
