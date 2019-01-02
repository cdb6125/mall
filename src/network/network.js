import axios from 'axios';

//3.使用es6的promise
export function require(option) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
    instance.interceptors.response.use(res => {
      return res.data
    },err => {
      return err
    })

    // instance.get()这个方法要
    instance(option)
        .then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
    })

  })
}


// export function require(option, success, failure) {

  //2.注册一个axios实例，使用拦截器
  // const instance = axios.create({
  //   baseURL: 'http://123.207.32.32:8000',
  //   timeout: 5000
  // })
  // instance.interceptors.response.use(res => {
  //   return res.data
  // })
  // instance.get(option.url)
  //     .then(res => {
  //       success(res)
  //     }).catch(error => {
  //       console.log(error);
  //     })

  //1.简单的写法
  // axios.get(option.url)
  //      .then(res => {
  //        success(res)
  //      }).catch(error => {
  //        failure(error)
  // })
// }

