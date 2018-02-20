<template>
  <div class="container">
    <h1>Collection</h1>
    <div class="info-area">
      <figure style="background-image: url('../src/assets/collection.jpg')"></figure>
      <div class="description">
        <h2 class="title">{{page_item.title.rendered}}</h2>
        <p>{{page_item.content.rendered}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Artists from '../components/Artists'

  export default {
    name: 'Collection',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        page_item: null,
      }
    },
    components: {
      Artists
    },
    computed: mapState([
      'pages'
    ]),
    created() {
      this.$store.state.pages.forEach((item, index) => {
        if( item.slug === this.name ) {
          this.page_item = item
        }
      })
    }
  }
</script>
