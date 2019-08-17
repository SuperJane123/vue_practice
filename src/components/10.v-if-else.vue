<template>
    <div class="score">
        <input type="text" v-model="score">
        <p v-if="score>=90">A</p>
        <p v-else-if="score>=80">B</p>
        <p v-else-if="score>=70">C</p>
        <p v-else-if="score>=60">D</p>
        <p v-else>E</p>

    </div>
</template>

<script>
export default {
  data () {
    return {
      score: 90
    }
  }
}
</script>

<style lang="less" scoped>

</style>
