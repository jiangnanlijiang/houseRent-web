import axios from 'axios'


const service = axios.create({
  baseURL: 'api',
  timeout: 10000
})

// 请求拦截（配置发送请求的信息）
service.interceptors.request.use(function (config) {
  // 处理请求之前的配置
  config.headers['Content-Type'] = 'application/json';
  config.headers['token'] = sessionStorage.getItem("token");
  return config
}, function (error) {
  // 请求失败的处理
  return Promise.reject(error)
})

// 响应拦截（配置请求回来的信息）
service.interceptors.response.use(
  response => {
    const responseData = response.data;
    // 处理响应数据
    return responseData;
  },
  error => {
  // 处理响应失败
  return Promise.reject(error)
})

export default service
