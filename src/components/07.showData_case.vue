<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" ref="id" v-mycolor = '"red"' v-model="product.id" /> 品牌名称:
      <input type="text" ref="ad" v-mycolor = '"green"' v-model="product.name" @keydown.enter="key"/>
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
          <tr v-for='(val,index) in search' :key='index'>
            <td>{{val.id}}</td>
            <td>{{val.name}}</td>
            <td>{{val.time | timeFormat('-')}}</td>
            <td>
              <a href="#" @click.prevent="del(index)">删除</a>
            </td>
          </tr>
          <tr v-show="search.length == 0">没有数据显示</tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mycolor } from '@/tools/mydirectives'
export default {
  data () {
    return {
      keyword: '',
      product: {
        id: '',
        name: ''
      },

      brandList: [
        {
          id: 1,
          name: '大前端',
          time: new Date()
        },
        {
          id: 2,
          name: 'UI',
          time: new Date()
        },
        {
          id: 3,
          name: 'JAVA',
          time: new Date()
        },
        {
          id: 4,
          name: 'PHP',
          time: new Date()
        }
      ]
    }
  },

  // 自定义属性
  directives: {
    myfoucs: {
      inserted (el) {
        el.focus()
      }
    },
    mycolor
  },

  // 添加方法
  methods: {
    add () {
      this.product.time = new Date()
      this.brandList.push({ ...this.product })
    },
    // 根据索引删除
    del (index) {
      this.brandList.splice(index, 1)
    },

    // 键盘事件
    key () {
      this.product.time = new Date()
      this.brandList.push({ ...this.product })
    }

  },

  // 筛选
  filters: {
    timeFormat (time, spe) {
      let year = time.getFullYear()
      let mon = time.getMonth() + 1
      let day = time.getDate()
      return year + spe + mon + spe + day
    }
  },

  // 计算属性
  computed: {
    search () {
      return this.brandList.filter(e =>
        e.name.indexOf(this.keyword) !== -1
      )
    }
  },

  mounted () {
    console.log(this.$refs)
    this.$refs.id.focus()
    this.$refs.ad.focus()
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
