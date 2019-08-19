// 1.这个模块主要实现路由封装

// 2.引入vue
import Vue from 'vue'
// 引入v-router
import VueRouter from 'vue-router'

// 引入组件
import index from '../components/15.index.vue'
import product from '../components/16.product.vue'

// 3. 让vue使用v-router进行路由管理
Vue.use(VueRouter)

// 4.创建路由对象，实现路由和组件的映射
const router = new VueRouter({
  // 5.添加路由配置，通过routers可以实现路由配置
  // 每一个单独的路由配置都是一个对象，一般来说，常见的属性有：
  // name ：当前路由名称
  // path：路由路径
  // component: 当前路由所映射的对象
  routes: [{
    name: 'index',
    path: '/index',
    component: index
  },
  {
    name: 'product',
    path: '/product',
    component: product
  }
  ]
})

// 6.暴露router
export default router
