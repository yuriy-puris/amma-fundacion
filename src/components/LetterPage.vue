<template>
  <div class="container">
    <h1>Artists</h1>
    <FilterArtists />
    <div class="people-list">
      <ul>
        <li
          v-for="name in artists"
          v-if="name.slug.toLowerCase().charAt(0) === id.toLowerCase()"
        >
          <h3>
            {{ name.slug }}
          </h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import FilterArtists from '../components/FilterArtists'

  export default {
    name: 'LetterPage',
    props: ['id'],
    components: {
      FilterArtists
    },
    data() {
      return {
        artists: [],
        error: [],
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      }
    },
    created() {
      console.log(this.name)
      axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/artists')
        .then(response => {
          this.artists = response.data
        })
        .catch(e => {
            this.errors.push(e)
        })
    },
  }
</script>
