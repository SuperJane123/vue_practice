<template>
    <div class="daughter">
        <p>我是女儿组件，我的名字叫{{dname}}</p>
        <p>我找到男朋友了，他的名字叫{{mybfname}}</p>
        <button @click="tellname">我要告诉我哥哥我的男朋友名字叫{{mybfname}}</button>
    </div>
</template>

<script>
// 事件总线
import eventBust from '../unlits/myevent'
export default {
  props: ['dname'],
  data () {
    return {
      mybfname: '小王'
    }
  },
  methods: {
    tellname () {
      // 因为现在这里的this指向的是当前组件对象
      console.log(this)
      console.log(eventBust) // 指向vue实例
      eventBust.$emit('cangetbfname', this.mybfname)
    }
  }
}
</script>

<style lang="less" scoped>
.daughter {
    background-color: pink;
}

</style>
