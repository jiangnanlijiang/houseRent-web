import request from '../utils/request'

export function login (data) {
  return request({
    url: '/sysUser/login',
    method: 'post',
    data
  })
}

export function register (data) {
  return request({
    url: '/sysUser/register',
    method: 'post',
    data
  })
}
