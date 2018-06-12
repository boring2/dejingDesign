<template>
  <div class="header">
    <img src="../assets/logo.svg" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  height: 50px;
  background: #E5E0D6;
  line-height: 50px;
  text-align: center;
  img {
    padding-top: 18px;
  }
  @media (max-width: 600px) {
    text-align: left;
    img {
      width: 50%;
      padding-left: 10px;
    }
  }
}
</style>
