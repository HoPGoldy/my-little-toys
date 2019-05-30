<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
    detail-template(title="MySQL" url="https://www.mysql.com/cn/")
        content 
            p 
                span MySql 数据库 好使 没了
            p
                i 打算找时间学习下mongodb
</template>

<script>
import DetailTemplate from './DetailTemplate'
export default {
    name: 'Mysql',
    components: { DetailTemplate },
    data: () => ({

    }),
    methods: {
        
    }
}
</script>
