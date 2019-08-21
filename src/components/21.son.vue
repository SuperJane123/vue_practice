<template>
    <div class="son">
        <p>我是儿子组件,我的名字{{sname}}</p>
        <p>我找到了一个女朋友，她的名字叫{{mygname}}</p>
        <p>我妹妹告诉我，她的男朋友名字叫{{meifuname}}</p>
        <button @click="tellname">点击告诉我爸爸我的女朋友叫{{mygname}}</button>
    </div>
</template>

<script>
import eventBust from '../unlits/myevent'
export default {
  // 用来接收父亲的传递的数据信息
  // props: ['sname'],
  data () {
    return {
    //   sname: 'litle jack'
      mygname: '小红',
      meifuname: '??',
      sname: '??'
    }
  },

  methods: {
    tellname () {
      //   通过$$emit来发射
    //   this.$emit(事件名称，需要传递的数据)
      // this.$emit('cangetname', this.mygname)
      eventBust.$emit('cangetname', this.mygname)
    }
  },

  mounted () {
    eventBust.$on('cangetbfname', (data) => {
      console.log(data)
      this.meifuname = data
    })
    eventBust.$on('cangetsnane', data => {
      console.log(data)
      this.sname = data
    })
  }

}
</script>

<style lang="less" scoped>
    .son {
        background-color: yellowgreen
    }

</style>
