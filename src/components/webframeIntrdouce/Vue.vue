<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
    detail-template(title="Vue" url="https://cn.vuejs.org/")
        content 
            p 
                span Vue是一套简单易用的
                b 渐进式框架
                span ，非常易于上手，数据的双向绑定也可以使得结构更加清晰明了方便维护。vue还包含大量的第三方插件，可以很轻易的扩充自己应用的功能。
</template>

<script>
import DetailTemplate from './DetailTemplate'
export default {
    name: 'Vue',
    components: { DetailTemplate },
    data: () => ({

    }),
    methods: {
        
    }
}
</script>
