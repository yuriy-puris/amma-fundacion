<template>
  <div class="container">
    <h1>Exhibitions</h1>
    <SubMenuExhibitions
      v-bind:sub_menu="this.sub_menu"
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
    components: {
      SubMenuExhibitions,
    },
    data() {
      return {
        sub_menu: null,
        page_item: null,
      }
    },
    computed: mapState([
      'menu_list',
      'page_exhibitions'
    ]),
    created() {
      this.$store.state.menu_list.forEach((item) => {
        if( item.object === this.name ) {
          this.sub_menu = item.children
        }
      }),
      this.$store.state.page_exhibitions.forEach((item) => {
        if( item.slug === this.name ) {
          this.page_item = item
        }
      })
    }
  }
</script>
