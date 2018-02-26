<template>
  <div class="container">
    <h2>Artworks</h2>
    <div class="artworks-holder">
      <FilterSettings />
    </div>
  </div>
</template>

<script>
  import FilterSettings from '../components/FilterSettings'

  export default {
    name: 'Artworks',
    components: {
      FilterSettings,
    },
  }

</script>
