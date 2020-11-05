import axios from "axios"
import qs from 'qs'

const service = axios.create({
  timeout: 60000 // request timeout
})

//POST传参序列化
service.interceptors.request.use((config) => {
  // if (config.method === 'post') {
  //     config.data = qs.stringify(config.data);
  // }
  return config;
}, err => Promise.reject(err))


//返回状态判断
service.interceptors.response.use((res) => {
  return res;
}, err => Promise.reject(err))


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