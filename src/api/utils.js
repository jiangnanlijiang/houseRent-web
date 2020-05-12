import request from '../utils/request'

export function getUploadData () {
  return request({
    url: '/qiniu/getUploadData',
    method: 'post',
  })
}
