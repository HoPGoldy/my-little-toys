<style lang="stylus" scoped>
$mobile-width = 450px
.container
    .bg
        position absolute
        font-size 200px
        font-weight bolder
        opacity 0.05
        left calc(50% - 200px)
    .clock
        position relative
        @media screen and (min-width $mobile-width)
            padding-top 200px
        @media screen and (max-width $mobile-width)
            padding-top 40%
        .time
            font-size 35px
            color red
            font-weight bolder
            width 250px
            text-align center
            position absolute
            left calc(50% - 125px)
            @media screen and (min-width $mobile-width)
                top 300px
            @media screen and (max-width $mobile-width)
                top 63%
    .end-show
        position absolute
        bottom 30px
        left calc(50% - 100px)
        width 200px
        font-size 20px
        
        .end-days
            width 100px
            text-align center
            font-size 70px
            font-weight bolder
            display inline
</style>

<template lang="pug">
.container
    .bg 考研
    .clock(@click="easteregg")
        el-progress(type="circle" :percentage="progress.value" :width="250" :color="progress.color" :stroke-width="20" :show-text="showBless" status="text") 加油宝贝
        .time(v-show="!showBless") {{date}}
    .end-show(v-show="!showBless" style="color:red;")
        div 距离考研开始还有
        .end-days {{days}}
        div(style="display:inline;") 天
    .end-show(v-show="showBless" style="color:green;")
        div 最后一关
</template>

<script>
    export default {
        name: 'CountDown',
        data() {
            return {
                progress: {
                    value: 0,
                    color: 'red'
                },
                showBless: false,
                date: '',
                days: ''
            }
        },
        computed: {
            endTimeStr() {
                let date = new Date()
                return `${date.getFullYear()}/12/22 00:00:00`
            },
            startTimeStr() {
                let date = new Date()
                return `${date.getFullYear()}/1/1 00:00:00`
            }
        },
        methods: {
            easteregg() {
                this.$message({
                    message: '鼬砸NB!',
                    type: 'success',
                    center: true
                })
            },
            getDate() {
                let startTime = new Date(this.startTimeStr)
                let endTime = new Date(this.endTimeStr)
                let nowTime = new Date()
                let totalTime = endTime.getTime() - startTime.getTime()
                let timeLag = endTime.getTime() - nowTime.getTime()
                if (timeLag < 0) {
                    this.showEndState()
                    return true
                }
                let seconds = Math.floor((timeLag / 1000) % 60)
                let minutes = Math.floor((timeLag / 1000 / 60) % 60)
                let hours = Math.floor((timeLag / (1000 * 60 * 60)) % 24)
                this.days = Math.floor(timeLag / (1000 * 60 * 60 * 24))
                this.date = `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`
                this.progress.value = (timeLag / totalTime) * 100
            },
            showEndState() {
                clearInterval(this.timer)
                this.progress.value = 100
                this.days = 0
                this.showBless = true
                this.progress.color = 'green'
            }
        },
        mounted() {
            this.getDate()
            this.timer = setInterval(this.getDate, 1000)
        }
    }
</script>
