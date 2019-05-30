<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
    detail-template(title="Github Page" url="https://pages.github.com")
        content
            p
                span github page 是github提供的免费的个人主页，可以托管静态站点，非常适合我们站点的发布。
            p 
                b 缺点
                span : github page 只提供了基本的代码托管服务，我们需要手动构建然后发布。
            p 
                b 优点
                span : github page 可以通过腾讯的网站审查，意味着发布在该平台的站点
                b 可以在qq的内置浏览器中访问
                span 而不会显示 “
                i 如需访问，请长按复制后使用浏览器访问
                span  ”的字样。
</template>

<script>
import DetailTemplate from './DetailTemplate'
export default {
    name: 'GithubPage',
    components: { DetailTemplate },
    data: () => ({

    }),
    methods: {
        
    }
}
</script>
