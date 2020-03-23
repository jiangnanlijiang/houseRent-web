import axios from 'axios'
import { Notification } from 'element-ui'

const service = axios.create({
  baseURL: 'api',
  timeout: 10000
})

// 请求拦截（配置发送请求的信息）
service.interceptors.request.use(function (config) {
  // 处理请求之前的配置
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
    let code = 0
    try {
      code = error.response.data.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        Notification.error({
          title: '网络请求超时',
          duration: 2500
        })
        return Promise.reject(error)
      }
      if (error.toString().indexOf('Error: Network Error') !== -1) {
        Notification.error({
          title: '网络请求错误',
          duration: 2500
        })
        return Promise.reject(error)
      }
    }
    Notification.error({
      title: error.response.data.message,
      duration: 2*1000
    })
  // 处理响应失败
  return Promise.reject(error)
})

export default service
