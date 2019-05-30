<style lang="stylus" scoped>
$mobile-width = 450px
.el-container
    .el-header
        background-color #B3C0D1
        padding 16px
        font-size 18px
        font-weight bolder
        box-shadow #eee 0px 0px 5px 3px
        @media screen and (min-width $mobile-width)
            text-align left
        @media screen and (max-width $mobile-width)
            text-align center
    .el-main
        .el-row
            margin 10px
            .el-button
                @media screen and (min-width $mobile-width)
                    width 300px
                @media screen and (max-width $mobile-width)
                    width 80%
</style>

<template lang="pug">
el-container
    el-header hopgoldy 的小玩意
    el-main
        el-row(v-for="menuItem in menuList" :key="menuItem.key")
            el-button(type="primary" @click="navigateTo(menuItem.key)" round) {{menuItem.label}}
</template>

<script>
    export default {
        name: 'Menu',
        data() {
            return {
                menuList: [{
                        'label': '宠物查找器',
                        'key': 'WhereIsMyPet'
                    },
                    {
                        'label': '考研倒计时',
                        'key': 'CountDown'
                    },
                    {
                        'label': '留言板',
                        'key': 'MessageBoard'
                    },
                    {
                        'label': '网站架构',
                        'key': 'WebsiteFrame'
                    }
                ]
            }
        },
        methods: {
            navigateTo: function(e) {
                this.$router.push(e)
            }
        }
    }
</script>
