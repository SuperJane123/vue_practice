<template>
    <div class="get">
        <p>这个文件显示如何如何使用asiox发起get请求</p>
        <button @click="getAllUser">get的请求实例-无参数</button> <br>
        <button @click="getPostById">get的请求实例-参数</button><br>
        slug: <input type="text" v-model="cateObj.slug">
        name: <input type="text" v-model="cateObj.name">

        <button @click="addNewCate">post的请求实例</button><br>

    </div>

</template>

<script>
import { getAllUser, getPostById, addNewCate } from '@/unlits/myaxios'

export default {

  data () {
    return {
      cateObj: {
        slug: '',
        name: ''
      }
    }
  },

  // 无参的get请求参数
  // 请求阿里白秀所有用户的信息
  methods: {
    getAllUser () {
    //   Asiox.get('http://127.0.0.1:9090/getAllUser')
    //     .then(res => {
    //       console.log(res)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
      getAllUser().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },

    // get 请求带参数
    getPostById () {
    //   Asiox.get('http://127.0.0.1:9090/getPostById?', { params: { id: 25 } })
    //     .then(res => {
    //       console.log(res.data)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
      getPostById({ params: { id: 25 } }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },

    // post的请求
    addNewCate () {
    //   Asiox.post('http://127.0.0.1:9090/addNewCate', this.cateObj)
    //     .then(res => {
    //       console.log(res)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })

      addNewCate(this.cateObj).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }

  }

}
</script>

<style lang="less" scoped>

</style>
