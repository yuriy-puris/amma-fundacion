<template>
  <div class="container">
    <h1>Collection</h1>
    <div class="info-area">
      <figure style="background-image: url('../src/assets/collection.jpg')"></figure>
      <div class="description">
        <h2 class="title">{{getContentPage.title.rendered}}</h2>
        <p>{{getContentPage.content.rendered}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Collection',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    computed: {
      'getContentPage': function(name) {
        return this.$store.getters.getPage(this.name)
      }
    }
  }
</script>
