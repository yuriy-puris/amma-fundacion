<template>
  <div class="about-holder">
    <h1>Collection</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  import Artists from '../components/Artists'

  export default {
    name: 'Collection',
    components: {
      Artists
    }
  }
</script>
