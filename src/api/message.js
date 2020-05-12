import service from '../utils/request'

export function getApplyMessage (data) {
  return service({
    url: '/rentApply/findApplyLogInfo',
    method: 'post',
    data
  })
}
