<template>
  <div class="carousel">
    <el-carousel v-on:change="aaa" ref="carousel">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 v-on:touchmove="ddd">我是图片{{ item }}</h3>
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
<style lang="scss">
  .carousel .el-carousel__container {
    height: calc(100vh - 50px - 38px);
    @media (max-width: 600px) {
      height: calc(100vh - 50px);
    }
  }
  .carousel .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: calc(100vh - 50px - 38px);
    margin: 0;
    text-align: center;
    @media (max-width: 600px) {
      line-height: calc(100vh - 50px);
    }
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
