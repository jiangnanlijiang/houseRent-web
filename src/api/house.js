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

export function updateStatus (data) {
  return request({
    url: '/house/updateStatus',
    method: 'post',
    data
  })
}

export function findInfo (data) {
  return request({
    url: '/house/findInfo',
    method: 'post',
    data
  })
}
