import request from '../utils/request'

export function findAll (data) {
  return request({
    url: '/house/findAll',
    method: 'post',
    data
  })
}

export function saveInfo (data) {
  return request({
    url: '/house/saveInfo',
    method: 'post',
    data
  })
}
