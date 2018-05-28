<template>
  <div class="detail">
    <p class="description">
      detail{{routeParam}}
    </p>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      routeParam: 0,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.routeParam = this.$route.params.id
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.description {
  padding: 50px;
  text-align: center;
  line-height: 1.5;
}
</style>
