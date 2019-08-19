<template>
    <div class="tran">
        <button @click="show=!show">点击切换</button>
        <!-- <transition name="fade" enter-active-class="">
            <p v-show="show">hello</p>
        </transition> -->

        <transition enter-active-class="animated bounceInDown" leave-active-class="animated bounceInUp">
            <p v-show="show" class="with">hello</p>
        </transition>

    </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  }

  // methods: {

  // }
}
</script>

<style lang="less" scoped>
    .fade-enter {
        margin-left: 200px
    }
    .fade-enter-active {
        transition: all 3s
    }

    .fade-enter-to {
        margin-left: 0
    }

    .fade-leave {
        margin-left: 0
    }

    .fade-leave-active {
        transition: all 3s
    }

    .fade-leave-to {
        margin-left: 200px
    }

    .with {
        width: 200px;
        height:50px;

    }
</style>
