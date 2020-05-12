import request from '../utils/request'

export function findAll (data) {
  return request({
    url: 'sysConfig/findAll',
    method: 'post',
    data
  })
}

export function saveInfo (data) {
  return request({
    url: '/sysConfig/saveInfo',
    method: 'post',
    data
  })
}
