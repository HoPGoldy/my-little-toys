<style lang="stylus" scoped>
$mobile-width = 450px
.container
    column-gap 20
    padding 10px
    @media screen and (min-width $mobile-width)
        column-count 4
    @media screen and (max-width $mobile-width)
        column-count 2
    
.item
    box-sizing border-box
    break-inside avoid
    margin-bottom 16px
    &:last-child
        margin-bottom 0px
    .item-title
        padding 18px 20px
        background-color #8CE6FF
        transition background-color 2s
        @media screen and (min-width $mobile-width)
            text-align left
        @media screen and (max-width $mobile-width)
            text-align center
        .item-time
            @media screen and (min-width $mobile-width)
                float right
            @media screen and (max-width $mobile-width)
                text-align center
            padding 3px 0
    .item-content
        display flex
        flex-direction column
        justify-content center
        align-items center
        box-sizing border-box
        @media screen and (min-width $mobile-width)
            padding 10px

>>>.el-dialog
    @media screen and (max-width $mobile-width)
        width 70%
    .el-input
        margin-bottom 20px
    .el-button
        @media screen and (max-width $mobile-width)
            width 100%
    .el-dialog__body
        padding 15px 20px
>>>.el-card__header
    padding 0px
    @media screen and (max-width $mobile-width)
        padding 12px 10px 6px 10px

>>>.el-card__body
    padding 12px

>>>.el-textarea__inner
    font: 400 13.3333px Arial
    padding 10px 15px
    font-size inherit
</style>

<template lang="pug">
.container
    template(v-for="item,index in itemList")
        el-card.item
            .item-title(slot="header" @click="easteregg" :style="titlesStyle[index]") 
                span 
                    b {{item.name}}
                .item-time {{item.time}}
            .item-content(@click="dialogVisible = true") {{item.content}}
        el-dialog(title="新建留言" :visible.sync="dialogVisible")
            el-input(placeholder="陌生人" v-model="newMessageForm.name")
                template(slot="prepend") 留言者
            el-input(type="textarea" placeholder="请填写留言" v-model="newMessageForm.content" :autosize="{ minRows: 2, maxRows: 6 }")
            span(slot="footer")
                el-button(type="primary" @click="onSubmit") 确 定
</template>

<script>
import qs from 'qs'

export default {
    name: 'MessageBoard',
    data: () => ({
        dialogVisible: false,
        defaultTitleStyle: {
            'background-color': ''
        },
        titlesStyle: [],
        colors: [
            '#ECFFA6',
            '#A6ECFF',
            '#B9A6FF',
            '#FFB9A6',
            '#B3FFA6',
            '#FFA6B3',
            '#A6FFF2',
            '#F2A6FF',
            '#FBFFA6',
            '#FFA6FB',
            '#A6FFAA',
            '#AAA6FF',
            '#A6FFF3',
            '#FFF3A6',
            '#A6B2FF',
            '#FFA6B2'
        ],
        itemList: [],
        newMessageForm: {
            name: '',
            content: '',
            time: ''
        },
    }),
    methods: {
        easteregg() {
            if (this.colorChangeTimer) {
                this.$message({
                    message: '咔嚓 你留住了这一刻',
                    type: 'success',
                    center: true
                })
                clearInterval(this.colorChangeTimer)
                this.colorChangeTimer = null
            }
            else {
                this.$message({
                    message: '愿生活永远缤纷多彩',
                    type: 'success',
                    center: true
                })
                this.changeTitleColor()
                this.colorChangeTimer = setInterval(this.changeTitleColor, 2000)
            }
        },

        changeTitleColor() {
            this.titlesStyle.forEach(item => {
                const rand = this.getRand(0, this.colors.length - 1)
                item['background-color'] = this.colors[rand]
            })
        },
        onSubmit() {
            if (!this.newMessageForm.content) {
                this.$message({
                    message: '留言不能为空！',
                    type: 'error',
                    center: true
                })
                return
            }
            if (!this.newMessageForm.name) {
                this.newMessageForm.name = "陌生人"
            }
            
            const date = new Date()
            this.newMessageForm.time = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`

            this.$post('/messageborad/add', this.newMessageForm).then(res => {
                console.log(res)
                if (res.data.code === 200) {
                    this.$message({
                        message: '留言成功',
                        type: 'success',
                        center: true
                    })
                    this.itemList.push(Object.assign({}, this.newMessageForm))
                    console.log('提交信息为', this.newMessageForm)
                    this.dialogVisible = false
                    this.newMessageForm.content = ''
                }
                else {
                    this.$message({
                        message: '留言失败',
                        type: 'error',
                        center: true
                    })
                }
            }).catch(err => {
                this.$message({
                    message: '没网了少年',
                    type: 'error',
                    center: true
                })
            })
        }
    },
    mounted() {
        this.$message({
            message: '点击任何一个卡片即可新建留言',
            center: true
        })
        const rand = this.getRand(0, this.colors.length - 1)
        this.defaultTitleStyle['background-color'] = this.colors[rand]
        this.$get('/messageborad/getList').then(res => {
            this.itemList = res.data
        })
    },
    beforeDestroy() {
        clearInterval(this.colorChangeTimer)
    },
    watch: {
        itemList(newData) {
            newData.map(item => {
                this.titlesStyle.push(Object.assign({}, this.defaultTitleStyle))
            })
        }
    }
}
</script>
