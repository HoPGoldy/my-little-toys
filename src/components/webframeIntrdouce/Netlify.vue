<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
    detail-template(title="Netlify" url="https://www.netlify.com/")
        content 
            p 
                span netlify是一个拥有持续集成功能的静态站点托管平台，我们只需要提前将其与指定的repository绑定，netlify就可以在我们把代码推送到远程仓库后
                b 自动构建并发布
                span ，让整个发布流程得以大大简化。另外netlify还支持对站点的版本管理，可以非常方便的进行一键回滚等操作。
            p
                span 唯一的缺点就是在qq内置的浏览器里打开会显示 
                i 如需访问，请长按复制后使用浏览器访问
                span  ，真是该死。
</template>

<script>
import DetailTemplate from './DetailTemplate'
export default {
    name: 'Netlify',
    components: { DetailTemplate },
    data: () => ({

    }),
    methods: {
        
    }
}
</script>
