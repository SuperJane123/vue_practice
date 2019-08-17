<template>
<div class="text">
    <p>这个文件描述v-text的使用</p>
    <p>v-text的使用和插值类相似，都是为双标签展示内容，但是v-text是将指定的属性完全的替换标签之间的内容，而不管标签之间有什么</p>
    <p v-text="msg">{{name}}</p>
    <p v-text="age+1"></p>
    <p v-text='age>18 ? "成年" : "未成年"'>我是</p>
    <p v-text='gender? "男" : "女"'></p>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: '我叫superjane',
      msg: 'hello',
      age: 20,
      gender: true
    }
  }
}
</script>

<style scoped>

</style>
