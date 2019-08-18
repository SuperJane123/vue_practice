<template>
  <div class="watch">
    <input type="text" v-model="person.firstname" /> :
    <input type="text" v-model="person.lastname" />
    <p>{{person.fullname}}</p>
    <!-- <p>{{fullName}}</p> -->
  </div>
</template>



<script>
import { setTimeout, setInterval } from "timers";
export default {
  data() {
    return {
      person: {
        firstname: "",
        lastname: "",
        fullname: ""
      }
    };
  },

  watch: {
    //watch可以实现响应异步操作,以下是深度监听
    'person.firstname'(newV) {
      console.log(123);
      setTimeout(() => {
        this.person.fullname = newV + this.person.lastname;
      }, 3000);
    },
    'person.lastname'(newV) {
      setTimeout(() => {
        this.person.fullname = this.person.firstname + newV;
      }, 3000);
    }
  }

  //   computed:{       计算属性没法响应异步操作
  //       fullName(){
  //           console.log(123)
  //          setTimeout(()=>{
  //              return this.firstname + this.lastname
  //          },3000)

  //       }
  //   }
};
</script>



<style lang="less">
</style>