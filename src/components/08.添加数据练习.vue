<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" v-mycolor='"blue"' v-model="produce.id"/> 品牌名称:
      <input type="text"  v-myFoucs  v-mycolor='"red"' v-model="produce.brand"/>
      <input type="button" value="添加" @click="add"/>
    </div>
    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件" v-model="keyword"/>
    </div>
    <div>
      <table class="tb">
          <thead>
             <th>编号</th>
            <th>品牌名称</th>
            <th>创立时间</th>
            <th>操作</th>
          </thead>
        <tbody>
          <tr v-for='(value,index) in search' :key='index'>
            <td>{{value.id}}</td>
            <td>{{value.brand}}</td>
            <td>{{value.time | timeformat('-')}}</td>
            <td>
              <a href="#" @click.prevent="del(index)">删除</a>
            </td>
          </tr>
          <tr v-show="search.length === 0">没有数据显示</tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import { myfoucs } from '../tools/mydirectives'
var { myfoucs } = require('../tools/mydirectives')

export default {

  data () {
    return {
      keyword: '',

      produce: {
        id: '',
        brand: ''
      },
      brandList: [
        {
          id: 1,
          brand: '前端',
          time: new Date()

        },
        {
          id: 2,
          brand: 'JAVA',
          time: new Date()

        },
        {
          id: 3,
          brand: 'PHP',
          time: new Date()

        },
        {
          id: 4,
          brand: 'UI',
          time: new Date()

        }]

    }
  },

  directives: {
    myFoucs: myfoucs,
    mycolor: {
      inserted (el, binding, vnode, i) {
        el.style.color = binding.value
        console.log(vnode) // 标签名
        console.log(i)
        // console.log(el)  //元素
        // console.log(binding)  //name: "mycolor", rawName: "v-mycolor", value: "red", expression: ""red"", modifiers: {…}, …}
      }
    }
  },

  methods: {
    add () {
      this.produce.time = new Date()
      this.brandList.push({ ...this.produce })
      this.produce.id = ''
      this.produce.brand = ''
    },
    del (index) {
      this.brandList.splice(index, 1)
    }
  },

  filters: { // timeformat:function(){}
    timeformat (time, spe) {
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let date = time.getDate()
      let hours = time.getHours()
      let min = time.getMinutes()
      return year + spe + month + spe + date + spe + hours + ':' + min
    }
  },

  computed: {
    search () {
      let arr = []
      this.brandList.filter((e) => {
        if (e.brand.indexOf(this.keyword) !== -1) {
          arr.push(e)
        }
      })
      return arr
    }
  }

}
</script>

<style lang="less" scoped>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
