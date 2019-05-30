<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
    detail-template(title="总体介绍")
        content
            p
                span 该架构为本站点 
                a(href="https://hopgoldy.github.io/#/" target="_blank") hopgoldy.github.io
                span  / 
                a(href="https://hpg.netlify.com/" target="_blank") hpg.netlify.com
                span  的设计架构，主要采用了以nodejs为基础的 express / vue 前后端分离设计。并采用MySQL作为数据库，部署在后端服务器内部。
            p
                span 前端服务为静态站点，使用 vue + pug + stylus 开发，托管在 github page 和 netlify 上。
            p
                span 后端服务部署在私有的阿里云服务器上，采用RESTful架构，配置了域名以及https证书来使得访问更加的安全。
</template>

<script>
import DetailTemplate from './DetailTemplate'
export default {
    name: 'Total',
    components: { DetailTemplate },
    data: () => ({

    }),
    methods: {
        
    }
}
</script>
