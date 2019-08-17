<template>
    <div class="for">
        <table border="1" width='600px'>
            <thead>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>

            </thead>
            <tbody>
                <tr v-for='(value,index) in userList' :key='index'>
                    <td>{{value.name}}</td>
                    <td>{{value.age}}</td>
                    <td>{{value.gender}}</td>

                </tr>
            </tbody>
        </table>
        <ul>
            <li v-for='(value,index) in arr' :key='index'>{{value}}:{{index}}</li>
        </ul>
        <div v-for='(v,k) in obj' :key='k'>{{v+":"+k}}</div>
    </div>
</template>

<script>
module.exports = {
  data () {
    return {
      userList: [{
        name: 'jack',
        age: 20,
        gender: '男'
      },
      {
        name: 'rose',
        age: 18,
        gender: '女'
      },
      {
        name: 'tom',
        age: 22,
        gender: '男'
      }],
      arr: [1, 3, 5, 7, 3, 7, 9],
      obj: {
        name: '小明',
        age: 30,
        gender: '男'
      }
    }
  }
}

</script>

<style scoped>

</style>
