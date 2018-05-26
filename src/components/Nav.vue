<template>
  <div class="nav">
    <div class="menu-han" v-on:click="toggleMenu">
      <div class="border-wrap">
        <span class="border border-top" v-bind:class="{show: showMenu}"></span>
        <span class="border border-medium" v-bind:class="{show: showMenu}"></span>
        <span class="border border-bottom" v-bind:class="{show: showMenu}"></span>
      </div>
    </div>
    <ul class="nav-ul" v-bind:class="{show: showMenu}">
      <li>主页</li>
      <li>餐厅酒店</li>
      <li>品牌展示</li>
      <li>私人豪宅</li>
      <li>关于我们</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
      console.log('toggleMenu')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@keyframes rotationTop {
  to {
    transform: rotate(45deg) translateY(5px);
  }
}

@keyframes rotationBottom {
  to {
    transform: rotate(-45deg) translateY(-5px);
  }
}

@keyframes clearRotationTop {
  from {
    transform: rotate(45deg) translateY(5px);
  }
  to {
    transform: rotate(0deg) translateY(0px);
  }
}

@keyframes clearRotationBottom {
  from {
    transform: rotate(-45deg) translateY(-5px);
  }
  to {
    transform: rotate(0deg) translateY(0px);
  }
}

.nav {
  position: relative;
}
.menu-han {
  display: none;
  @media (max-width: 600px) {
    position: fixed;
    right: 10px;
    top: 10px;
    display: inline-block;
    .border-wrap {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .border {
      display: inline-block;
      width: 25px;
      height: 2px;
      margin: 5px 0 0 0;
      background-color: black;
    }
    .border-top {
      animation: 0.25s clearRotationTop forwards;
      &.show {
        animation: 0.25s rotationTop forwards;
      }
    }
    .border-medium {
      display: inline-block;
      &.show {
        display: none;
      }
    }
    .border-bottom {
      animation: 0.25s clearRotationBottom forwards;
      &.show {
        animation: 0.25s rotationBottom forwards;
      }
    }
  }
}
.nav-ul {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  li {
    display: inline-block;
    text-align: center;
    padding: 10px;
  }
  @media (max-width: 600px) {
    display: none;
    li {
      display: block;
      width: 100%;
    }
    &.show {
      position: absolute;
      top: 0;
      left: 0;
      flex-direction: column;
      display: flex;
      height: 100vh;
      width: 100%;
      justify-content: flex-start;
      background: #fff;
      overflow: hidden;
    }
  }
}

</style>
