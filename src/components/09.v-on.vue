<template>
    <div class="on">
    <button @click="add('jack',$event)">点我啊</button>
    <button @[type]="dothat">我是鼠标移动</button>
    <input type="text" v-model="text" @keydown.13="key(text)">
    <button @click.once="onceDo">我只能点击一次</button>
    <button @click.once="text=123">我只能点击一次</button>
    </div>
</template>

<script>
export default {

  data () {
    return {
      type: 'mouseover',
      text: 'abc'
    }
  },

  methods: {
    add (name, $event) {
      console.log(name, $event)
    },
    dothat (e) {
      console.log(e)
      console.log(1234555)
    },
    key (text) {
      console.log(text)
    },
    onceDo () {
      console.log(123)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
