// 这个模块主要实现路由封装

// 引入模块区域
import Vue from 'vue'
import VueRouter from 'vue-router'

import father from '../components/20.father.vue'

// 让vue来使用vue-router进行路由管理
Vue.use(VueRouter)

// 路由是个构造函数，创建一个路由对象，实现路由和组件的映射
export default new VueRouter({
  // 添加路由配置，通过routes可以实现路由配置
  routes: [
    // 开启一个路由启动
    { name: 'default',
      path: '/',
      redirect: { name: 'father' } },

    {
      name: 'fahter',
      path: '/fahter',
      component: father
    }

  ]
})
