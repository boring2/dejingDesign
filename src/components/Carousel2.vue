<template>

<div class="playback-wrap">
  <span class="arrow-icon left" @click="changeTransform($event, true)">
    <img src="../assets/left-arrow.png" />
  </span>
  <div class="playback" ref="playback">
    <div class="playback-inner">
      <div class="playback-list" :style="playbackListStyle" ref="playbackList">
        <router-link v-for="(list, index) in playbackLists" :key="index" :to="'/brand'+'/' + list.id">
          <div class="img" style="display: inline-block;" ref="refImg">我是图片{{list.id}}</div>
          <!-- <img :src="list.gallery"> -->
        </router-link>
      </div>
    </div>
  </div>
  <span class="arrow-icon right" @click="changeTransform">
    <img src="../assets/right-arrow.png"/>
  </span>
</div>

</template>

<script>
export default {
  data () {
    return {
      playbackLists: [
        {id: 1, gallery: 'a.png'},
        {id: 2, gallery: 'a.png'},
        {id: 3, gallery: 'a.png'},
        {id: 4, gallery: 'a.png'},
        {id: 5, gallery: 'a.png'},
        {id: 6, gallery: 'a.png'},
        {id: 7, gallery: 'a.png'},
        {id: 8, gallery: 'a.png'},
        {id: 9, gallery: 'a.png'}
      ],
      transformCount: 0,
      playListTimer: null,
      initCount: 4
    }
  },
  mounted () {
    this.setInitCount()
    let self = this
    window.onresize = function () {
      let width = (document.body.clientWidth - 60) / 4
      if (document.body.clientWidth <= 600) {
        width = document.body.clientWidth - 60
      }
      self.$refs.playbackList.style.width = self.playbackLists.length * width + 'px'
      self.$refs.playbackList.style.transform = `translateX(0)`
      self.$refs.playbackList.style.webkitTransform = `translateX(0)`
      self.transformCount = 0
      self.setInitCount()
    }
    this.setPlayListTimer()
  },
  methods: {
    setInitCount () {
      if (document.body.clientWidth <= 600) {
        this.initCount = 1
      } else {
        this.initCount = 4
      }
    },
    changeTransform (e, isLeft) {
      clearInterval(this.playListTimer)
      this.playListTimer = null
      if (isLeft) {
        this.changeTransformLeft()
      } else {
        this.changeTransformRight()
      }
      setTimeout(() => {
        this.setPlayListTimer()
      }, 0)
    },
    changeTransformLeft () {
      if (this.transformCount > 0) {
        this.transformCount -= 1
      }
    },
    changeTransformRight () {
      if (this.transformCount + this.initCount < this.playbackLists.length) {
        this.transformCount += 1
      }
    },
    setPlayListTimer () {
      this.playListTimer = setInterval(() => {
        if (this.transformCount >= this.playbackLists.length - this.initCount) {
          return
        }
        this.transformCount += 1
      }, 5000)
    }
  },
  computed: {
    playbackListStyle () {
      let width = (document.body.clientWidth - 60) / 4
      if (document.body.clientWidth <= 600) {
        width = document.body.clientWidth - 60
      }
      return {
        width: this.playbackLists.length * width + 'px',
        webkitTransform: `translateX(${-this.transformCount * width}px)`,
        transform: `translateX(${-this.transformCount * width}px)`
      }
    }
  }
}
</script>
<style lang="scss">
    .playback-wrap {
      position: relative;
      overflow:hidden;
      height: calc(100vh - 50px - 38px);
      @media (max-width: 600px) {
        height: calc(100vh - 50px);
      }
    }

    .playback {
      align-items: center;
      height: calc(100vh - 50px - 38px);
      margin: 0 30px;
      @media (max-width: 600px) {
        height: calc(100vh - 50px);
      }
      .playback-inner {
        overflow: hidden;
        margin: 0 auto;
      }
      .playback-list {
        overflow: hidden;
        transition: transform 1s;
      }
      a {
        display: inline-block;
        color: black;
        &:visited {
          color: black;
        }
      }
      .img {
        float: left;
        width: calc((100vw - 60px) / 4);
        height: calc(100vh - 50px - 38px);
        line-height: calc(100vh - 50px - 38px);
        text-align: center;
        // border-right: 1px solid;
        @media (max-width: 600px) {
          height: calc(100vh - 50px);
          width: calc(100vw - 60px);
        }
      }
    }
    .arrow-icon {
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      cursor: pointer;
      &.left {
        left: 10px;
      }
      &.right {
        right: 10px;
      }
    }
</style>
