<template>
  <div id="app">
    <dj-head/>
    <dj-nav/>
    <router-view/>
  </div>
</template>

<script>

import DjHead from './components/Head.vue'
import DjNav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    DjHead,
    DjNav
  }
}
</script>

<style>

@import './css/normalize.css';
body {
  min-width: 300px;
}
</style>
