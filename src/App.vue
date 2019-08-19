<template>
  <div id="app">
    <p>这是根组件</p>
    <!-- 添加路由展示区域 -->
    <router-link to="/index">首页</router-link> &nbsp;&nbsp;&nbsp;&nbsp;
    <!-- <router-link to="/product">产品</router-link>&nbsp;&nbsp;&nbsp;&nbsp; -->
    <router-link to="/product/1">水果</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/product/2">电器</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/product/3">服装</router-link>

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
