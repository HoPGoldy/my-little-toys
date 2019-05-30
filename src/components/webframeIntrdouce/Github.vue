<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
    detail-template(title="Github" url="https://github.com")
        content
            p
                span github不必多做介绍，在该框架里github起到了一个呈上启下的作用，我们直接把前端服务的代码推送到github的指定分支，然后github page和netlify会根据推送的代码
                b 自动部署
                span 站点，从而让发布更加简单。
            p
                span 该过程存在一个矛盾点，github page只能部署静态站点，而且没办法指定站点代码的路径（只能是源分支的跟路径）。
                | 这样我们就必须在本地手动构建然后再推送代码，增加了发布成本。
                | 如果可以做到像netlify自动构建并以指定路径下代码部署网站的话，就可以让发布过程更加的统一和简洁。
</template>

<script>
import DetailTemplate from './DetailTemplate'
export default {
    name: 'Github',
    components: { DetailTemplate },
    data: () => ({

    }),
    methods: {
        
    }
}
</script>
