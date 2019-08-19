// 这个文件进行asiox的封装

// 引入axios
import axios from 'axios'

// 设置基准路径
axios.defaults.baseURL = 'http://127.0.0.1:9090'

// 获取所有用户信息
export const getAllUser = () => {
  return axios({
    url: '/getAllUser'

  })
}

// get的请求方式带参数
export const getPostById = (params) => {
  return axios({
    url: '/getPostById',
    params
  })
}

// post的请求方式
export const addNewCate = (data) => {
  return axios({
    url: '/addNewCate',
    method: 'post',
    data
  })
}
