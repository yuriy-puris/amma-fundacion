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
    components: {
      Posts
    }
  }
</script>
