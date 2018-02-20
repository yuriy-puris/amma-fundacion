<template>
  <div class="container">
    <h1>Exhibitions</h1>
    <nav class="nav-exhibitions">
      <router-link
        v-for="(item, index) in sub_menu"
        :to="{
          name: `${ item.object_slug === null ? item.object : item.object_slug  }`,
          params: { name: `${ item.object_slug === null ? item.object : item.object_slug }` }
        }"
        exact >
        {{ item.title }}
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

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
        page_item: null,
        sub_menu: null
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
      })
      this.$store.state.page_exhibitions.forEach((item) => {
        if( item.slug === this.name ) {
          this.page_item = item
        }
      })
    }
  }
</script>
