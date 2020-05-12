import service from '../utils/request'

export function getSysRole (data) {
  return service({
    url: '/sysRole/findAll',
    method: 'post',
    data
  })
}
