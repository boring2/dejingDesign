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
      <li v-for="(list, index) in routes" :to="list.href" :key="index" v-on:click="hideMenu">
        <router-link :to="list.href">{{list.title}}</router-link>
      </li>
      <!-- <li><router-link to="/">主页</router-link></li>
      <li><router-link to="/">餐厅酒店</router-link></li>
      <li><router-link to="/brand">品牌展示</router-link></li>
      <li><router-link to="/">私人豪宅</router-link></li>
      <li><router-link to="/about">关于我们</router-link></li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routes: [
        { href: '/', title: '主页' },
        { href: '/rest', title: '餐厅酒店' },
        { href: '/brand', title: '品牌展示' },
        { href: '/self', title: '私人豪宅' },
        { href: '/about', title: '关于我们' }
      ],
      showMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
      console.log('toggleMenu')
    },
    hideMenu () {
      this.showMenu = false
      console.log('hidemenu')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@keyframes rotationTop {
  to {
    transform: rotate(45deg) translateY(4px);
  }
}

@keyframes rotationBottom {
  to {
    transform: rotate(-45deg) translateY(-4px);
  }
}

@keyframes clearRotationTop {
  from {
    transform: rotate(45deg) translateY(4px);
  }
  to {
    transform: rotate(0deg) translateY(0px);
  }
}

@keyframes clearRotationBottom {
  from {
    transform: rotate(-45deg) translateY(-4px);
  }
  to {
    transform: rotate(0deg) translateY(0px);
  }
}

.nav {
  position: relative;
  background-color: #E5E0D6;
}
.menu-han {
  display: none;
  @media (max-width: 600px) {
    position: fixed;
    right: 10px;
    top: 15px;
    display: inline-block;
    .border-wrap {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .border {
      display: inline-block;
      width: 20px;
      height: 1px;
      margin: 5px 0 0 0;
      background-color: #676560;
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
  z-index: 100;
  ul {
    margin: 0;
  }
  li {
    display: inline-block;
    text-align: center;
    padding: 10px;
    font-size: 12px;
    color: #8C8A86;
    a {
      text-decoration: none;
      color: #8C8A86;
      display: block;
      &.router-link-exact-active.router-link-active {
        color: #474440;
      }
    }
  }
  @media (max-width: 600px) {
    display: none;
    li {
      display: block;
      width: 100%;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    &.show {
      position: absolute;
      top: 0;
      left: 0;
      flex-direction: column;
      display: flex;
      height: calc(100vh - 50px);
      width: 100%;
      justify-content: center;
      background-color: #EAE6DE;
      overflow: hidden;
    }
  }
}

</style>
