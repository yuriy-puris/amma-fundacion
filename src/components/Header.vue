<template>
  <header class="header_">
    <div class="header-area">
      <strong class="logo"><a href="/">Amma Foundacion</a></strong>
      <nav class="main-menu">
        <div class="inner">
          <ul class="main-nav">
            <li v-for="(item, index) in menu"
                :key="index"
                v-bind:class="item.classes">
              <router-link
                :to="{
                  name: `${ item.object_slug === null ? item.object : item.object_slug  }`,
                  params: { name: `${ item.object_slug === null ? item.object : item.object_slug }` }
                }">
                {{ item.title }}
              </router-link>
              <ul v-if="item.children">
                <li v-for="(itm, idx) in item.children">
                  <router-link
                    :to="{
                      name: `${ itm.object_slug === null ? itm.object : itm.object_slug  }`,
                      params: { name: `${ itm.object_slug === null ? itm.object : itm.object_slug }` }
                    }">
                    {{ itm.title }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Header',
    data() {
      return {
        menu: [],
        errors: []
      }
    },
    created() {
      axios.get('http://amma-test.bigdropinc.net/wp-json/wp-api-menus/v2/menus/18')
        .then(response => {
          const res = response.data.items
          res.forEach(function (item) {
            let url = item.url.slice(32)
            item.url = url
          })
          this.menu = res
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
  }
</script>














