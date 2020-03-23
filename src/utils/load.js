import request from './request'

export function region () {
  return request({
    url: '/cmn/region',
    method: 'get'
  })
}

export function readRegion () {
  region().then(res => {
    sessionStorage.setItem("province", JSON.stringify(res.data.province));
    sessionStorage.setItem("city", JSON.stringify(res.data.city));
    sessionStorage.setItem("county", JSON.stringify(res.data.county));
  })
}
