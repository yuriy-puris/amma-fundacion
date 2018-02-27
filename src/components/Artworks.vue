<template>
  <div class="container">
    <h2>Artworks</h2>
    <div class="artworks-holder">
      <FilterSettings />
      <div class="collection-wrap">
        <ul class="collection-gallery">
          <li
            v-for="(item, index) in artworks"
          >
            <div class="item">
              <figure>
                <a href="#">
                  <img :src="item.acf.artwork_gallery[1].url">
                </a>
              </figure>
              <h3>
                <a href="#">
                  {{ item.acf.artwork_artist_label }}
                </a>
              </h3>
              <h4>
                <a href="#">
                  {{ item.title.rendered }}
                </a>
              </h4>
              <span class="date">
                  {{ item.acf.artwork_year }}
              </span>
              <span class="category">
                  {{ item.acf.artwork_medium }}
              </span>
            </div>
          </li>
        </ul>
      </div>
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
    data() {
      return {
        artworks: []
      }
    },
    created() {
      this.artworks = this.$store.state.artworks
    }
  }

</script>
