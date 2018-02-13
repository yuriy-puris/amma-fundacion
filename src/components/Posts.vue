<template>
  <div class="other-news">
    <div
      v-for="(item, index) in post_item"
      :key="index"
      class="news-item">
        <!--<figure v-if="item.acf.post_author_photo ">-->
          <!--<a-->
            <!--v-bind:href="item.link"-->
          <!--&gt;-->
            <!--<img :src="item.acf.post_author_photo.url" alt="">-->
          <!--</a>-->
        <!--</figure>-->
      <div class="info">
        <div class="date">{{ item.date }}</div>
        <h3>
          <a v-bind:href="item.link">
            {{ item.title.rendered }}
          </a>
        </h3>
        <p>{{ item.excerpt.rendered }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Posts',
    data() {
      return {
        post_item: [],
        errors: []
      }
    },
    created() {
      axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/posts')
        .then(response => {
          this.post_item = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>
