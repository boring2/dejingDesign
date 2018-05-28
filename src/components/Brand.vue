<template>
  <div class="brand">
    <carousel2 />
  </div>
</template>

<script>

import Carousel2 from './Carousel2.vue'

export default {
  name: 'Brand',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Carousel2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
