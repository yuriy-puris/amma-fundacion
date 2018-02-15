<template>
  <div class="other-news">
    <div
      v-for="(item, index) in paginate"
      :key="index"
      class="news-item">
      <div class="info">
        <div class="date">{{ item.date }}</div>
        <h3>
          <a v-bind:href="item.link">
            {{ item.title.rendered }}
          </a>
        </h3>
        <p>{{ item.excerpt.rendered }}</p>
      </div>
    </div>
    <div class="pagination-template">
      <button
        :disabled="currentPage < 2"
        v-on:click="prevPage()"
        class="prev"
      >
        Prev
      </button>
      <ul class="pagination">
        <li v-for="pageNumber in totalPages"
            v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0">
          <a
            href="#"
            v-on:click="setPage(pageNumber)"
            :class="{ current: currentPage === pageNumber }"
          >
            {{ pageNumber }}
          </a>
        </li>
      </ul>
      <button
        :disabled="currentPage == totalPages"
        v-on:click="nextPage()"
        class="left"
      >
        Left
      </button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Posts',
    data() {
      return {
        post_item: [],
        errors: [],
        currentPage: 1,
        itemsPerPage: 4,
        resultCount: 0,
        startPaginate: false
      }
    },
    computed: {
      totalPages: function() {
        return Math.ceil(this.resultCount / this.itemsPerPage)
      },
      paginate: function() {
        if ( this.startPaginate === true ) {
          if (!this.post_item || this.post_item.length != this.post_item.length) {
            return
          }
          this.resultCount = this.post_item.length

          if (this.currentPage >= this.totalPages) {
            this.currentPage = this.totalPages
          }
          var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
          return this.post_item.slice(index, index + this.itemsPerPage)
        }
      }
    },
    methods: {
      setPage(pageNumber) {
        this.currentPage = pageNumber
      },
      prevPage() {
        if( this.currentPage > 1 ) {
          this.currentPage = this.currentPage - 1
        }
      },
      nextPage() {
        if( this.currentPage < this.post_item.length ) {
          this.currentPage = this.currentPage + 1
        }
      }
    },
    created() {
      axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/posts')
        .then(response => {
          this.post_item = response.data
          this.startPaginate = true
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>
