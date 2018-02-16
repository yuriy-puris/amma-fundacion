<template>
  <div class="container">
    <div class="about-holder">
      <h1>News</h1>
      <Posts />
    </div>
  </div>
</template>

<script>
  import Posts from '../components/Posts'

  export default {
    name: 'News',
    data() {
      return {
        currentPage: 1
      }
    },
    components: {
      Posts,
    },
  }
</script>
