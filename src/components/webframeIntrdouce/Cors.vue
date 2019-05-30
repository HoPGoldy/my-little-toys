<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
    detail-template(title="中间件 - cors")
        content 这里的cors是指express的一个中间件，它实现了跨域资源共享机制，在这里我们可以通过它很轻易的实现前端服务器的跨域请求。
</template>

<script>
import DetailTemplate from './DetailTemplate'
export default {
    name: 'Cors',
    components: { DetailTemplate },
    data: () => ({

    }),
    methods: {
        
    }
}
</script>
