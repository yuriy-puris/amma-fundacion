<template>
  <div class="container">
    <h1>Exhibitions</h1>
    <SubMenuExhibitions
      v-bind:sub_menu="this.sub_menu"
      v-bind:current_url="this.current_url"
    />
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import SubMenuExhibitions from '../components/SubMenuExhibitions'
  export default {
    name: 'Exhibitions',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        sub_menu: null,
        current_url: null
      }
    },
    components: {
      SubMenuExhibitions,
    },
    computed: {
      'getContentPage': function() {
        return this.$store.getters.getExhibitions()
      }
    },
    methods: {
      getSubMenu(name) {
        this.sub_menu = this.$store.getters.getSubMenuExhib(this.name)
      }
    },
    mounted() {
      this.getSubMenu(name)
    },
    created() {
      this.current_url = this.$route.path
    }
  }
</script>
