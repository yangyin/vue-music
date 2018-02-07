import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress'
import { Observable } from 'rxjs'

import Config from './config';

axios.interceptors.request.use(config => {
    NProgress.start()
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

function checkStatus(response) {
    NProgress.done()
    if (response.status === 200 || response.status === 304) {
        return response
    }
    return {
        data: {
            code: -404,
            message: response.statusText,
            data: response.statusText,
        }
    }
}

function checkCode(res) {
    if (res.data.code !== 200) {
        alert(res.data.code)
    }
    return res
}

export default {
    post(url, data) {
        return Observable.fromPromise(
            axios({
                xhrFields: {
                    withCredentials: true
                },
                method: 'post',
                url,
                data: qs.stringify(data),
                timeout: 30000,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            })
            .map(checkStatus)
            .map(checkCode)
            .map(res =>res.data)
        )
    },
    get(url, params) {
        return Observable.fromPromise(
            axios({
                xhrFields: {
                    withCredentials: true
                },
                method: 'get',
                baseURL: Config.baseURL,
                url,
                params,
                timeout: 30000
            })         
        )
        .map(checkStatus)
        .map(checkCode)
        .map(res =>res.data)
    }
}