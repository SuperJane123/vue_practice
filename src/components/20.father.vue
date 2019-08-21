<template>
    <div class="father">
        <p>我是父组件，我的名叫{{myname}}</p>
        <p>我有一个儿子，我的儿子的名字叫{{sname}}</p>
        <p>大喜事，我的儿子终于找到女朋友了，她的名字叫{{mysongfname}}</p>
        <!-- <son :sname='sname' @cangetname='getname'></son> -->
        <button @click="tellname">点击告诉我，我的儿子名字叫{{sname}}</button>
        <son @cangetname='getname'></son>

        <daughter :dname='dname'></daughter>
    </div>
</template>

<script>
import eventBust from '../unlits/myevent'
import son from '../components/21.son'
import daughter from '../components/22.daughter'
export default {
  data () {
    return {
      myname: 'jack',
      sname: 'little jack',
      dname: 'little rose',
      mysongfname: '？？'
    }
  },

  methods: {
    getname (data) {
    //   console.log(data)
      this.mysongfname = data
    },
    tellname () {
      eventBust.$emit('cangetsnane', this.sname)
    }
  },

  mounted () {
    eventBust.$on('cangetname', data => {
      console.log(data)
      this.mysongfname = data
    })
  },

  //   注册子组件
  components: {
    son, daughter
  }
}
</script>

<style lang="less" scoped>
    .father {
        background-color:#ff0;
    }
</style>
