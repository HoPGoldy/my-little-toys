<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
    detail-template(title="中间件 - Https")
        content 
            p
                span Https中间件是express框架自带的一个中间件，express默认使用http服务，如果服务器域名升级到https协议的话，需及时
                b 使用https中间件升级express
                span 。
</template>

<script>
import DetailTemplate from './DetailTemplate'
export default {
    name: 'Https',
    components: { DetailTemplate },
    data: () => ({

    }),
    methods: {
        
    }
}
</script>
