<template>
  <div class="container">
    <div class="artists-holder">
      <h1>Artists</h1>
      <FilterArtists />
      <div class="filter-holder">
        <div
          class="item-letter"
          v-for="letter in letters"
        >
          <strong
            class="title-letter"
          >
            {{ letter }}
          </strong>
          <ul>
            <li
              v-for="name in artists"
              v-if="name.slug.toLowerCase().charAt(0) === letter.toLowerCase()"
            >
              {{ name.slug }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import FilterArtists from '../components/FilterArtists'

  export default {
    name: 'Artists',
    components: {
      FilterArtists
    },
    data() {
      return {
        letter: '',
        artists: [],
        errors: [],
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      }
    },
    created() {
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
