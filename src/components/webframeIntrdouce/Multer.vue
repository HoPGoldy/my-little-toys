<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
    detail-template(title="中间件 - Multer & Body-parser")
        content 
            p
                span Multer 和 Body-parser 都是用于处理前端传来的post请求的，因为
                b express本身不支持对post请求里body的解析
                span ，所以我们需要用到这两个中间件来加以完善。
            p
                b Multer:
            p
                span Multer是一个 node.js 用于处理 multipart/form-data 的中间件。在这里我们使用它来解析处理前端传来的post请求中的form-data。
            p
                b Body-parser:
            p
                span body-parser是非常常用的一个express中间件，作用是对post请求的请求体进行解析。它可以处理不同类型的请求体：比如text、json、urlencoded等，也可以处理不同的编码和压缩类型。
</template>

<script>
import DetailTemplate from './DetailTemplate'
export default {
    name: 'Multer',
    components: { DetailTemplate },
    data: () => ({

    }),
    methods: {
        
    }
}
</script>
