<template>

<div class="playback-wrap">
  <span class="arrow-icon left" @click="changeTransform($event, true)">
    <img src="../assets/left-arrow.png" />
  </span>
  <div class="playback" ref="playback">
    <div class="playback-inner">
      <div class="playback-list" :style="playbackListStyle" ref="playbackList">
        <router-link v-for="(list, index) in playbackLists" :key="index" :to="'/brand'+'/' + list.id">
          <div class="img" style="display: inline-block;" ref="refImg" :style="{backgroundImage: 'url(' + list.gallery + ')'}">
            <span class="title">
              {{list.title}}
            </span>
          </div>
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
import rest1 from '../assets/rest.png'
import rest2 from '../assets/rest2.png'
import rest3 from '../assets/rest3.png'
import rest4 from '../assets/rest4.png'
export default {
  data () {
    return {
      playbackLists: [
        {id: 1, gallery: rest1, title: '月星环球港五月罗马'},
        {id: 2, gallery: rest2, title: '上瘾水产'},
        {id: 3, gallery: rest3, title: '上海黄山酒店'},
        {id: 4, gallery: rest4, title: '上海建国西路'},
        {id: 5, gallery: rest1, title: '上海建国西路'},
        {id: 6, gallery: rest2, title: '上海建国西路'},
        {id: 7, gallery: rest3, title: '上海建国西路'},
        {id: 8, gallery: rest4, title: '上海建国西路'},
        {id: 9, gallery: rest1, title: '上海建国西路'}
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
      let width = (document.body.clientWidth - 30) / 4
      let playBackWidth = self.playbackLists.length * width + (self.playbackLists.length - 1) * 10 + 'px'
      if (document.body.clientWidth <= 600) {
        width = document.body.clientWidth
        playBackWidth = self.playbackLists.length * width + 'px'
      }
      if (!self.$refs.playbackLists) {
        return
      }
      self.$refs.playbackList.style.width = playBackWidth
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
      // return
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
      if (document.body.clientWidth > 600) {
        let width = (document.body.clientWidth - 30) / 4
        let playBackWidth = this.playbackLists.length * width + (this.playbackLists.length - 1) * 10 + 'px'
        return {
          width: playBackWidth,
          webkitTransform: `translateX(${-this.transformCount * width - this.transformCount * 10}px)`,
          transform: `translateX(${-this.transformCount * width - this.transformCount * 10}px)`
        }
      } else {
        let width = document.body.clientWidth
        let playBackWidth = this.playbackLists.length * width + 'px'
        return {
          width: playBackWidth,
          webkitTransform: `translateX(${-this.transformCount * width}px)`,
          transform: `translateX(${-this.transformCount * width}px)`
        }
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
      background-color: #DEDEDE;
      @media (max-width: 600px) {
        height: calc(100vh - 50px);
      }
    }

    .playback {
      align-items: center;
      height: calc(100vh - 50px - 38px);
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
        &:not(:first-child) {
          margin-left: 10px;
          @media (max-width: 600px) {
            margin-left: 0;
          }
        }
        &:visited {
          color: black;
        }
      }
      .img {
        float: left;
        // 100vw 减去左右两遍箭头的60 再减掉图片间距离30
        width: calc((100vw - 30px) / 4);
        height: calc(100vh - 50px - 38px);
        text-align: center;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        // border-right: 1px solid;
        @media (max-width: 600px) {
          height: calc(100vh - 50px);
          width: 100vw;
          background-size: cover;
        }
      }
      .title {
        color: white;
        font-size: 20px;
        position: absolute;
        bottom: 100px;
        transform: translate(-50%);
      }
    }
    .arrow-icon {
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      cursor: pointer;
      z-index: 1000;
      &.left {
        left: 10px;
      }
      &.right {
        right: 10px;
      }
    }
</style>
