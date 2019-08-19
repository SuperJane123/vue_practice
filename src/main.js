import Vue from 'vue'
import './styles/animate.css'

// 引入路由模块
import router from '@/router/index.js'
// 根组件
import App from './App.vue'
// 引入vue文件
// import first from './components/01-插值表达式.vue'
// import Vtext from './components/02-v-text指令.vue'
// import Vhtml from './components/03.v-html.vue'
// import Vbind from './components/04.v-bind.vue'
// import Vfor from './components/05.v-for.vue'
// import Vmodel from './components/06.v-model.vue'
// import showData from './components/07.showData_case.vue'
// import showData from './components/08.添加数据练习.vue'
// import Von from './components/09.v-on.vue'
// import VElseIf from './components/10.v-if-else.vue'
// import mounted from './components/11-mounted钩子函数.vue'
// import watch from './components/12.watch.vue'
// import transtion from './components/13.vue使用类方式和第三方库练习动画.vue'
// import asiox from './components/14.asiox中get和post的请求方式.vue'

// Vue.use(Asiox)

Vue.config.productionTip = false
new Vue({
  // 注入路由，让当前应用使用我们配置好的路由
  router,
  render: h => h(App)
}).$mount('#app')
