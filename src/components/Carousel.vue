<template>
  <div class="block">
    <span class="demonstration" v-on:click="ccc">默认 Hover 指示器触发</span>
    <el-carousel height="150px" v-on:change="aaa" ref="carousel">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 v-on:touchmove="ddd">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  methods: {
    ccc () {
      console.log('1111111111111111111')
      this.$refs.carousel.next()
    },
    aaa () {
      console.log('aaaaaaaaaaaaaa')
    },
    ddd (e) {
      console.log('ddddddddddddd', e)
    }
  }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
