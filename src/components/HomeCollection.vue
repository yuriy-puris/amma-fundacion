<template>
  <div class="collection-gallery-wrap">
    <h2>The Collection</h2>
    <div class="collection-gallery">
      <div
        v-for="item in collection"
        class="item"
      >
        <figure>
          <a href="#">
            <img :src="item.img" :alt="item.link">
          </a>
        </figure>
        <h4>
          <a href="#">{{item.full_name}}</a>
        </h4>
        <p></p>
        <span class="date">{{item.date}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeCollection',
    props: ['collection'],
    created() {
      console.log(this.home_collection)
    }
  }
</script>
