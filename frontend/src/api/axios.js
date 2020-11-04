import axios from "axios";


//POST传参序列化
axios.interceptors.request.use((config) => {
  // if (config.method === 'post') {
  //     config.data = qs.stringify(config.data);
  // }
  return config;
}, err => Promise.reject(err))


//返回状态判断
axios.interceptors.response.use((res) => {
  return res;
}, err => Promise.reject(err))


export function get(url, params) {
  // let loading = Vue.$vux.loading
  // loading.show({
  //     text: '正在加载...'
  // })
  return new Promise((resolve, reject) => {
      axios.get(url, params)
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
      axios.get(url, params)
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