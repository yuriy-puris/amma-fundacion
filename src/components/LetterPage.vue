<template>
  <div class="letter-holder">
    <ul>
      <li
        v-on:send-letter="saveLetter(ltr)"
        v-for="name in artists"
        v-if="name.slug.toLowerCase().charAt(0) === letter.toLowerCase()"
      >
        letter
      </li>
    </ul>
  </div>
</template>

<script>
  import { EventBus } from '../components/eventBus.js';
  export default {
    name: 'LetterPage',
    props: ['artists'],
    data() {
      return {
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      }
    },
    methods: {
      saveLetter() {
        console.log(this.letter)
      }
    },
    created() {
      EventBus.$on('save-letter', (ltr) => {
        this.letter = ltr
        console.log(ltr)
      })
      console.log(this.letter)
    }
  }
</script>
