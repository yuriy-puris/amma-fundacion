<template>
  <div class="about-holder">
    <div class="info-area">
      <figure style="background-image: url('../src/assets/aboutimg.jpg')"></figure>
      <!--<div class="description">-->
        <!--{{page_item}}-->
        <!--<h2 class="title">{{page_item.title.rendered}}</h2>-->
        <!--<p>{{page_item.content.rendered}}</p>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'About',
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
    computed: mapState([
        'pages'
      ]),
    methods: {
      getContentPage (name) {
        this.$store.getters.getPage(name)
      }
    },
    created() {
      this.getContentPage(this.name)
    }
  }
</script>
