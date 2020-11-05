import axios from "axios"
import qs from 'qs'

const service = axios.create({
  timeout: 60000, 
  paramsSerializer: params => qs.stringify(params, {
    arrayFormat: 'repeat'
  }),
})

service.interceptors.request.use(config => config, err => Promise.reject(err))

service.interceptors.response.use(res => Promise.resolve(res.data), err => Promise.reject(err))


export function get(url, params) {
  // let loading = Vue.$vux.loading
  // loading.show({
  //     text: '正在加载...'
  // })
  url+='?'+qs.stringify(params)
  return new Promise((resolve, reject) => {
      service.get(url)
          .then(response => {
              // loading.hide()
              resolve(response.data);
          }, err => {
              // loading.hide()
              reject(err);
          })
          .catch((error) => {
              // loading.hide()
              reject(error)
          })
  })
}
export function post(url, params) {
  // let loading = Vue.$vux.loading
  // loading.show({
  //     text: '正在加载...'
  // })
  return new Promise((resolve, reject) => {
      service.post(url, params)
          .then(response => {
              // loading.hide()
              resolve(response.data);
          }, err => {
              // loading.hide()
              reject(err);
          })
          .catch((error) => {
              // loading.hide()
              reject(error)
          })
  })
}