import request from '@/utils/request'

export function rentApply (data) {
  return request({
    url: '/rentApply/apply',
    method: 'post',
    data
  })
}

export function rentConfirm (data) {
  return request({
    url: '/rentApply/confirm',
    method: 'post',
    data
  })
}
