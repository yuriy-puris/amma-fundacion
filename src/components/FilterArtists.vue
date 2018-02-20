<template>
  <div class="filter">
    <router-link
      class="btn-letter"
      v-for="(letter, index) in letters"
      :to="{
        name: `${ letter.toLowerCase() }`,
        params: { name: `${ letter.toLowerCase() }` }
      }"
    >
      {{letter}}
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'FilterArtists',
    data() {
      return {
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      }
    }
  }
</script>
