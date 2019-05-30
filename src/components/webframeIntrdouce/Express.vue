<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
    detail-template(title="Express" url="https://expressjs.com")
        content
            p
                span express是基于nodejs的一个
                b 流行web开发框架
                span ，这里我将其用作框架的后端服务。
            p
                span express小巧且灵活，为Web和移动应用程序提供了一组强大的功能，也可以通过添加无数的HTTP实用程序方法和
                b 中间件
                span 来增强应用的能力。
</template>

<script>
import DetailTemplate from './DetailTemplate'
export default {
    name: 'Express',
    components: { DetailTemplate },
    data: () => ({

    }),
    methods: {
        
    }
}
</script>
