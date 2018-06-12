<template>
  <div class="carousel">
    <el-carousel v-on:change="aaa" ref="carousel" indicator-position="none">
      <el-carousel-item v-for="item in 1" :key="item">
        <div class="home-png">
          <!-- <img src="../assets/home-2.png" /> -->
        </div>
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
  .carousel .el-carousel__item {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: calc(100vh - 50px - 38px);
    margin: 0;
    text-align: center;
    @media (max-width: 600px) {
      line-height: calc(100vh - 50px);
    }
    .home-png {
      background: url("../assets/home-2.png") center;
      height: 100%;
    }
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .el-carousel__arrow {
    display: none;
  }
</style>
