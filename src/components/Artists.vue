<template>
  <div class="artists-holder">
    <h2>Artists</h2>
    <div class="filter">
      <button
        class="btn-letter"
        v-for="letter in letters"
      >
        {{letter}}
      </button>
    </div>
    <ul>
      <li
        v-for="name in filterList"
      >
        {{ name.acf.artist_first_name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Artists',
    data() {
      return {
        artist_first_name: '',
        artists: [],
        errors: [],
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        startFilter: false
      }
    },
    created() {
      axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/artists')
        .then(response => {
          this.artists = response.data
          this.startFilter = true
          console.log(this.artists)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    computed: {
      filterList() {
        if(this.startFilter === true) {
          const name = this.artist_first_name
          return this.artists.filter(elem => {
            if(name === '') {
              return true
            }
            else {
              return elem.acf.artist_first_name.indexOf(name) > -1
            }
          })
        }
      }
    }
  }
</script>
