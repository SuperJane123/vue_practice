import Vue from 'vue'
// import App from './App.vue'
// 引入vue文件
// import first from './components/01-插值表达式.vue'
// import Vtext from './components/02-v-text指令.vue'
// import Vhtml from './components/03.v-html.vue'
// import Vbind from './components/04.v-bind.vue'
// import Vfor from './components/05.v-for.vue'
// import Vmodel from './components/06.v-model.vue'
// import showData from './components/07.showData_case.vue'
// import showData from './components/08.添加数据练习.vue'
import Von from './components/09.v-on.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Von)
}).$mount('#app')