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
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Artists',
    data() {
      return {
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
          this.artists.sort(function(a, b) {
            if( a.slug > b.slug ) {
              return 1
            }
            if (a.slug < b.slug) {
              return -1;
            }
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    computed: {
      sortList() {
        if( this.startFilter === true ) {
          this.artists.sort()
        }
      }
    }
  }
</script>
