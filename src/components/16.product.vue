<template>
  <div class="product">
    <h1>产品页</h1>
    <p>{{info}}</p>
    <button @click="detail" v-show="show = !show">点击查看详情信息</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: '??',
      show: true
    }
  },

  // 监听路由参数的变化，只有这个路由参数变化的时候才会触发
  // 同一个路由，参数变化
  watch: {
    '$route' (to, from) {
      let id = to.params.id
      if (id === '1') {
        this.info = '这是水果页面'
      } else if (id === '2') {
        this.info = '这是电脑页面'
      } else if (id === '3') {
        this.info = '这是服装页面'
      }
    }

  },

  // 组件一加载就触发的钩子函数
  // 这个才可以监听路由变化
  mounted () {
    console.log(this.$route)
    let id = this.$route.params.id
    if (id === '1') {
      this.info = '这是水果页面'
    } else if (id === '2') {
      this.info = '这是电脑页面'
    } else if (id === '3') {
      this.info = '这是服装页面'
    }
  },

  methods: {
    detail () {
      // 使用编程式跳转
      let id = this.$route.params.id
      if (id === '1') {
        // 注意，如果用了path跳转，传参数需要用query
        this.$router.push({ name: 'fruit' })
      } else if (id === '2') {
        this.$router.push({ name: 'computer' })
      } else if (id === '3') {
        this.$router.push({ name: 'cloths' })
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
