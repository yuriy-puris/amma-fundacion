<template>
  <div class="about-holder">
    <h1>Collection</h1>
    {{page_content}}
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Artists from '../components/Artists'

  export default {
    name: 'Collection',
    data() {
      return {
        page_content: []
      }
    },
    components: {
      Artists
    },
    computed: mapState([
      'pages'
    ]),
    created() {
      this.page_content = this.$store.state.pages
    }
  }
</script>
