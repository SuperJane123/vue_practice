<template>
    <div class="first">
        <!-- 插值表达式可以拼接字符串，能写判断 -->
        <!-- <p>{{msg +'今年十八岁'}},{{gender ? "男" : "女"}}</p> -->
        <!-- <p>{{msg+","+"今年"}}{{age+1+"性别"}}{{gender ? "男" : "女"}}</p> -->
        <!-- 使用API -->
        <p>{{hi.toUpperCase()}},{{msg}},今年{{age}},性别{{gender ? "男" : "女"}}</p>

    </div>

</template>

<script>
export default {
  data () {
    return {
      hi: 'hello',
      msg: '我是小明',
      gender: true,
      age: 18
    }
  }
}
</script>

<style scoped>
    .first {
        color: blue
    }
</style>
