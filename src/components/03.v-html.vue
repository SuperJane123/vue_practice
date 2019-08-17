<template>
    <div class="html">
        <p>这个文件描述v-html文件</p>
        <p>v-html 是可以解析html网页结构</p>
        <p>{{msg}}</p>
        <p v-text="msg"></p>
        <p v-html="msg"></p>
        <ul v-html="li"></ul>

    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '<h3>我是一个组件</h3>',
      li: '<li>我是一个li</li><li>我是一个li</li><li>我是一个li</li><li>我是一个li</li>'
    }
  }
}
</script>

<style scoped>

</style>
