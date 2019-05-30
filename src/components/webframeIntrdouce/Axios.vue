<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
    detail-template(title="Axios" url="https://www.kancloud.cn/yunye/axios/234845")
        content
            p
                span axios是vue官方维护的一个HTTP库，本框架使用该插件进行与后端的沟通。
            p
                span 在实际的开发过程中，我发现很有必要对axios进行再封装，解析后端传来的数据又或是使用自带的qs插件来把post的数据放在body的form-data中。
</template>

<script>
import DetailTemplate from './DetailTemplate'
export default {
    name: 'Axios',
    components: { DetailTemplate },
    data: () => ({

    }),
    methods: {
        
    }
}
</script>
