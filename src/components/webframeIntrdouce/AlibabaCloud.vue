<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
    detail-template(title="阿里云" url="https://www.aliyun.com/")
        content 
            p
                span 该架构的后端服务完全部署在阿里云的
                b 轻量应用服务器
                span 上，操作系统为 ubuntu 16.04。
</template>

<script>
import DetailTemplate from './DetailTemplate'
export default {
    name: 'AlibabaCloud',
    components: { DetailTemplate },
    data: () => ({

    }),
    methods: {
        
    }
}
</script>
