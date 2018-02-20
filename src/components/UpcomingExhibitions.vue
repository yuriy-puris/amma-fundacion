<template>
  <div class="upcoming-holder">
    <div class="current-holder">
      <div class="info-area">
        <figure style="background-image: url('../src/assets/aboutimg.jpg')"></figure>
        <div class="description">
          <h2 class="title">{{page_item[1].title.rendered}}</h2>
          <p>{{page_item[1].content.rendered}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'UpcomingExhibitions',
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
      'page_exhibitions'
    ]),
    created() {
      this.page_item = this.$store.state.page_exhibitions
    }
  }
</script>
