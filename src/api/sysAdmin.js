import request from '../utils/request'

export function findAll () {
  return request({
    url: '/admin/findAll',
    method: 'get'
  })
}

export function saveInfo (data) {
  debugger
  return request({
    url: '/admin/saveInfo',
    method: 'post',
    data
  })
}
