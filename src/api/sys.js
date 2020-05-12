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

export function changePassword (data) {
  return request({
    url: '/sysUser/changePassword',
    method: 'post',
    data
  })
}

export function getUserInfo () {
  return request({
    url: '/sysUser/findUserInfo',
    method: 'get'
  })
}

export function editUserInfo (data) {
  return request({
    url: '/sysUser/editUserInfo',
    method: 'post',
    data
  })
}
