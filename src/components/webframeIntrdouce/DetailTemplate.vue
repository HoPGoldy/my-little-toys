<style lang="stylus" scoped>
.container
    padding 10px
    text-align left
    .header
        padding 10px
        .title
            font-size 30px
            font-weight bolder
        .url
            padding-top 10px
            font-size 18px
            float right
    .content
        padding 0px 10px
        font-size 18px
        line-height 30px
</style>

<template lang="pug">
.container
    .header
        span.title {{title}}
        .url(v-if="url")
            span 官网: 
            a(:href="url" target="_blank") {{url}}
    hr
    .content
        slot 正文
</template>

<script>
export default {
    name: 'DetailTemplate',
    props: ['title', 'url'],
    data: () => ({

    }),
    methods: {
        
    }
}
</script>
