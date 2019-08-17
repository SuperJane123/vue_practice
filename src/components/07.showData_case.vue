<template>
      <div id="app">
        <div class="add">
            编号:
            <input type="text" v-model="product.id" v-mycolor='"red"'> 品牌名称:
            <input type="text" v-model="product.brand"  @keydown.enter='add' v-myfocus v-mycolor='"blue"'>
            <input type="button" value="添加" @click='add'>
        </div>
        <div class="add">
            品牌名称:
            <input type="text" placeholder="请输入搜索条件" v-model="keyworld">
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
                    <!-- 遍历数据生成结构 -->
                    <tr v-for='(value,i) in search' :key='i'>
                        <td>{{value.id}}</td>
                        <td>{{value.brand}}</td>
                        <td>{{value.time | timeFormat('/')}}</td>
                        <td>
                            <a href="#" @click.prevent='del(i)'>删除</a>
                        </td>
                    </tr>
                    <tr v-show='search.length == 0'>没有数据显示</tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// 引用全局指令
import { myfocus, mycolor } from '@/tools/mydirectives'
import { timeformat } from '@/tools/myfilters'

export default {
  data () {
    return {
      keyworld: '',
      product: {
        id: '',
        brand: ''
      },
      branList: [
        {
          id: 1,
          brand: '法拉利',
          time: new Date()
        },
        {
          id: 2,
          brand: '布加迪',
          time: new Date()
        },
        {
          id: 3,
          brand: '迈巴赫',
          time: new Date()
        },
        {
          id: 4,
          brand: '保时捷',
          time: new Date()
        }

      ]
    }
  },
  methods: {
    add () {
    //   console.log(123)
      this.product.time = new Date()
      this.branList.push({ ...this.product })
      this.product.id = ''
      this.product.brand = ''
    },
    del (i) {
      console.log(i)
      this.branList.splice(i, 1)
    }
  },
  // directives: {
  //   myfocus: {
  //     inserted (el) {
  //       el.focus()
  //     }
  //   },
  //   mycolor: {
  //     inserted (el, bind) {
  //       el.style.color = bind.value
  //     }
  //   }

  // }
  directives: {
    myfocus, mycolor
  },

  //   filters: {
  //     timeFormat (time, spe) {
  //       let year = time.getFullYear()
  //       let month = time.getMonth() + 1
  //       let day = time.getDate()
  //       return year + spe + month + spe + day
  //     }
  //   }

  //   筛选属性

  filters: {
    timeFormat: timeformat
  },

  //   计算属性
  computed: {
    search () {
      let arr = []
      this.branList.filter((e) => {
        if (e.brand.indexOf(this.keyworld) !== -1) {
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
