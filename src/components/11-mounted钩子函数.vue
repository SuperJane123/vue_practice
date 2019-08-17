<template>
    <input type="text" ref="id">
</template>

<script>
export default {
  mounted () { // 当组件加载完毕时，就会触发的函数
    // console.log(123)
    console.log(this)
    console.log(this.$refs.id.focus())
  }
}
</script>

<style lang="less" scoped>

</style>
