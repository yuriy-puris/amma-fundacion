<template>
  <div id="pagination-template">
    <div class="pagination">
      <div class="pagination-left">
        <a href="#" v-on:click="changePage(prevPages)">Prev</a>
      </div>
      <div class="pagination-right">
        <a href="#" v-on:click="changePage(nextPages)">Next</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pagination',
    data() {
      return {
        current: {
          type: Number,
          default: 1
        }
      }
    },
    computed: {
      prevPages() {
        return this.current - 1
      },
      nextPages() {
        return this.current + 1
      },
    },
    methods: {
      changePage(page) {
        this.$emit('page-changed', page)
      }
    }
  }
</script>
