<template>
    <div class="bind">
        <p>v-bind是绑定动态数据的</p>
        <img :src="img" alt="">
        <p></p>
        <a :href='"?id="+id'>删除</a>
        <!-- 动态特性名缩写 -->
        <p :[prop] ="userName">123</p>
        <hr>
        <p>以下是为动态属性绑定样式</p>
        <!-- <p :class="{isBlue:hasBlue}">我是蓝色字体</p> -->
        <!-- <p :class="{isblue:hasBlue}">我是蓝色字体</p> -->
        <!-- <p :class="{isbule:hasBlue}">我是蓝色字体</p> -->
        <p :class="{isblue:hasBlue}">我是蓝色字体</p>
        <!-- 实现展开和合并 -->
        <button @click="hasCollapse=!hasCollapse">点击展开合并</button>
        <div :class="{left:true,collapse:hasCollapse}"></div>
        <p :class="[isBlue,isUnder]">我好烦啊</p>
        <!-- 绑定style{属性：变量+单位} -->
        <!-- <p :style="{fontSize:fontSize+'px'}">我是一个大字体</p> -->
        <p :style="'font-size:'+fontSize+'px'">我是一个大字体</p>

    </div>
</template>

<script>
// @代表的是这个文件的根目录
import img from '@/assets/logo.png'
export default {
  data: function () {
    return {
      img: img,
      id: 7,
      prop: 'myname',
      userName: 'jack',
      hasBlue: true,
      hasCollapse: false,
      isBlue: 'isblue',
      isUnder: 'underline',
      fontSize: 30

    }
  }

}
</script>

<style  lang="less" scoped>
.isblue {
    color: blue;
    font-size: 20px
}
.left {
    width: 200px;
    height:  300px;
    border: 2px solid blue;
}
.collapse{
    width: 30px;
}
.underline {
    text-decoration: underline;
}

</style>
