import request from '../utils/request'

export function findAll () {
  return request({
    url: '/config/findAll',
    method: 'get'
  })
}

export function saveInfo (data) {
  debugger
  return request({
    url: '/config/saveInfo',
    method: 'post',
    data
  })
}
