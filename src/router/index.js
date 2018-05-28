import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Brand from '@/components/Brand'
import Detail from '@/components/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/brand',
      name: 'Brand',
      component: Brand
    },
    {
      path: '/brand/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
