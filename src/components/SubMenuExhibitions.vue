<template>
  <nav class="nav-exhibitions">
    <router-link
      v-for="(item, index) in sub_menu"
      :to=" `${ item.object_slug === null ? item.object : item.object_slug  }` " >
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: 'SubMenuExhibitions',
    props: ['sub_menu'],
  }
</script>
