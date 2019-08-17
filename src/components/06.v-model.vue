<template>
    <div class="model">
        <p>登陆</p>
        用户名：<input type="text" v-model="loginForm.username"> <br>
        密码：<input type="text" v-model="loginForm.userpassword"><br>
        <input type="button" value="登陆" @click="login">
    </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'jane',
        userpassword: '123345'
      }

    }
  },
  methods: {
    login () {
      console.log(this.loginForm)
      console.log(this)
    }
  }
}
</script>

<style scoped>

</style>
