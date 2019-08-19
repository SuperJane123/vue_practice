<template>
  <div id="app">
    <p>这是组件</p>
<!-- 使用router-link实现路由导航 -->
    <router-link to="/index">首页</router-link> &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/product">产品页</router-link>
    <!-- <a href="#/index">首页</a>
    <a href="#/product">产品页</a> -->

    <!-- 添加路由展示区域 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style lang="less">
</style>
