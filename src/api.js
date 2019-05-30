import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'
import config from './config'

export const $get = (url, params={}) => {
    return axios({
        url: config.serverUrl + url,
        params,
        method: 'get'
    })
}

export const $post = (url, params={}) => {
    return axios({
        url: config.serverUrl + url,
        data: Qs.stringify(params),
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
}

Vue.use({
    install(Vue) {
        Vue.prototype.$get = $get
        Vue.prototype.$post = $post
    }
})