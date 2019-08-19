// 这个模块主要实现路由封装

// 引入模块区域
import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '@/components/15.index.vue'
import product from '@/components/16.product.vue'
import fruit from '../components/17.fruit.vue'
import computer from '../components/18.computer.vue'
import cloths from '../components/19.cloths.vue'

// 让vue来使用vue-router进行路由管理
Vue.use(VueRouter)

// 路由是个构造函数，创建一个路由对象，实现路由和组件的映射
export default new VueRouter({
  // 添加路由配置，通过routes可以实现路由配置
  routes: [
    // 添加一个启动路由
    {
      name: 'default',
      path: '/',
      redirect: { name: 'index' }
    },
    // 每个单独的路由配置都是一个对象
    {
      name: 'index',
      path: '/index',
      component: index
    }, {
      name: 'product',
      path: '/product/:id',
      component: product,
      children: [{
        name: 'fruit',
        path: 'fruit',
        component: fruit
      },
      {
        name: 'computer',
        path: 'computer',
        component: computer
      }, {
        name: 'cloths',
        path: 'cloths',
        component: cloths
      }]
    } ]
})
