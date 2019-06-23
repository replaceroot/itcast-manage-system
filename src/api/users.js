// 引入axios模块
import axios from 'axios'

// 设置基准路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

// 添加了请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送之前获取可能存在的token数据,进行请求头的设置,格式Authorization:token
  var token = localStorage.getItem('itcast_pro_token')
  console.log(config)
  config.headers.Authorization = token
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
}
)
// 添加登录验证方法
// 在vue中，暴露成员可以使用export
export const userlogin = (params) => {
  return axios({
    url: 'login',
    method: 'post',
    params: params
  })
}

// 获取用户所有数据
export const getAllList = (params) => {
  return axios({
    url: 'users',
    params: params
  })
}

// 新增用户
export const addUser = (data) => {
  return axios({
    method: 'post',
    url: 'users',
    data
  })
}
