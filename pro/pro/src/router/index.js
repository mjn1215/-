import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import one from '@/views/one'
import second from '@/views/second'
import three from '@/views/three'
import four from '@/views/four'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/second',
      name: 'second',
      component: second
    },
    {
      path: '/one',
      name: 'one',
      component: one
    },
    {
      path: '/three',
      name: 'three',
      component: three
    },
    {
      path: '/four',
      name: 'four',
      component: four
    }
  ]
})
