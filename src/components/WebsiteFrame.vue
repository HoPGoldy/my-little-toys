<style lang="stylus" scoped>
containerWidth = 200px

content(backColor, hoverBackColor)
    cursor pointer
    border-radius 10px
    background-color backColor
    overflow hidden
    &:hover
        background-color hoverBackColor
        & .title
            background-color hoverBackColor

font(size, offsetY)
    position relative
    top offsetY
    font-size size
    font-weight bolder
    opacity 0.8

arrow()
    opacity 0
    z-index 11

.container
    .font-title
        font(20px, 20%)
    .font-content
        font(20px, 35%)
    .font-small
        font(16px, 10%)

    .content1
        content(#E5E5E5, #EEEEEE)
    .content2
        content(#D9D9D9, #DDDDDD)
    .content3
        content(#888888, #808080)
        color #E5E5E5
    
    .margin10
        margin 10px
    .header
        position absolute
        width 300px
        left calc(50% - 150px)
        padding-top 20px
        opacity 0
        font-size 40px
        font-weight bolder
    .root
        width 200px
        height 130px
        position absolute
        top calc(50% - 75px)
        left calc(50% - 100px)
        z-index 10
        padding 10px 0px

    .connect
        position absolute
        top calc(50% - 130px)
        left calc(50% - 110px)
        height 90px
        width 220px
        opacity 0
        & span
            font(20px, -60%)

    .second
        width 100px
        height 150px

        position absolute
        top calc(50% - 75px)
        left calc(50% - 50px)

        .title
            background-color #E5E5E5
            height 100%
            border-radius 10px 10px 0px 0px
            padding 10px 0px

        .base-server
            opacity 0
            height 100px
            display flex
            flex-flow row nowrap
            justify-content space-around
            margin 10px
            padding 10px
            
            .font-server
                opacity 0
                width 0px
            .back-server
                opacity 0
                width 0px
        .to-github
            left calc(50% - 40px)
            arrow()
        .to-server
            left calc(50% - 40px)
            arrow()
        .to-mysql
            left calc(50% - 40px)
            arrow()
            transform rotate(90deg)
        .github
            height 0px
            opacity 0
            margin 10px
            padding 10px 0px
        .mysql
            height 0px
            width 0px
            opacity 0
            margin-right 0px
        .second-title
            width 100%
        .font-app
            opacity 0
            flex-flow row nowrap
            justify-content space-around
            margin 10px
            padding 10px
            .axios
                height 0px
                opacity 0
                width 150px
                padding 10px 0px
        .back-app
            width 100%
            opacity 0
            flex-flow row nowrap
            justify-content space-around
            padding 10px
            .back-app-middleware
                margin-top 7px
                padding 10px 0px
                height 0px
                width 0px
                opacity 0
    .detail
        position absolute
        width 900px
        height 500px
        left calc(50% - 450px)
        border-radius 15px
        bottom -520px
        padding -10px
        border 3px solid #999999
        z-index 20
        background-color #EEEEEE
        .detail-title
            width 100%
            height 45px
            border-radius 15px 15px 0px 0px
            border 3px solid #999999
            position relative
            left -3px
            background-color #999999
            .close
                float right
                height 45px
                width @height
                line-height @height
                cursor pointer
                font-size 20px
                font-weight bolder
.back-outside
    margin 10px
    display flex
    flex-flow row nowrap
.arrow
    transform rotate(90deg)
</style>

<template lang="pug">
.container 
    .header(@click="setDetailPage('total')") 网站架构
    .root.content1(@click="showFrame" ref="root") 
        span.font-content 网站架构
    //- 前端
    .second.content1(ref="font" @click="showFrameDetail")
        .title
            span.font-title 前端
        arrow.to-github
        arrow.to-server
        .font-app.content2(ref="fontApp" @click="showFontAppDetail") 
            .second-title.font-app-title(style="width:90%; position:absolute;")
                span.font-content {{fontAppTitle}}
            .axios.content3(@click.stop="setDetailPage('axios')")
                span.font-content axios
        
        .github.content2(@click="setDetailPage('github')")
            span.font-content github
        .base-server.content2(ref="fontServer" @click="showServerDetail")
            .font-server.content3(@click="setDetailPage('github-page')")
                span.font-content github page
            .second-title
                span.font-content 平台
            .font-server.content3(@click="setDetailPage('netlify')")
                span.font-content netlify
    //- 前后端交流
    .connect 
        svg(width="220" height="80" xmlns="http://www.w3.org/2000/svg")
            g
                path.connect-to-back(d="m 220 7 h -220" stroke-dasharray="220" stroke-dashoffset="220" opacity="0.5" stroke-width="15" stroke="#000" fill="none")
                path.connect-to-font(d="m 0 73 h 220" stroke-dasharray="220" stroke-dashoffset="220" opacity="0.5" stroke-width="15" stroke="#000" fill="none")
        span GET / POST
    //- 后端
    .second.content1(ref="back" @click="showFrameDetail")
        .title
            span.font-title 后端
        arrow.to-mysql
        .back-outside
            .mysql.content2(@click="setDetailPage('mysql')")
                span.font-content mysql
            .back-app.content2(ref="backApp" @click="showBackAppDetail")
                .second-title
                    span.font-content {{backAppTitle}}
                .back-app-middleware.content3.font-small(@click.stop="setDetailPage('https')") https
                .back-app-middleware.content3.font-small(@click.stop="setDetailPage('cors')") cors
                .back-app-middleware.content3.font-small(@click.stop="setDetailPage('multer')") body-parser / multer
        .base-server.content2(ref="backServer" @click="showServerDetail")
            .second-title
                span.font-content 平台
            .back-server.content3(@click="setDetailPage('alibaba-cloud')")
                span.font-content 阿里云 ubuntu
    //- 详细信息
    .detail(@click="showDetailPage" :style="detailPageStyle")
        .detail-title
            .close(@click.stop="hideDetailPage") ━
        .detail-content
            components(:is="intrdouceType")
</template>

<script>
import Arrow from './webframeComp/Arrow'
import intrdouces from './webframeIntrdouce'
export default {
    name: 'WebsiteFrame',
    components: { Arrow, ...intrdouces },
    data: () => ({
        intrdouceType: 'total',
        FramedetailShowed: false,
        serverDetailShowed: false,
        fontAppShowed: false,
        backAppShowed: false,
        // 详情页是否显示
        detailPageShowed: false,
        // 详情页样式
        detailPageStyle: {
            'cursor': 'pointer'
        },
        // 前/后端服务名称
        backAppTitle: '服务',
        fontAppTitle: '服务',
        // 窗口高度
        clientHeight: 0
    }),
    methods: {
        // 显示前后端分离
        showFrame() {
            // 隐藏root
            let rootTimeline = anime.timeline()
            rootTimeline.add({
                targets: this.$refs.root,
                scale: 1.1,
                direction: 'alternate',
                offset: 0,
            }).add({
                targets: this.$refs.back,
                translateX: -170,
                offset: 20,
                easing: 'easeInOutQuart'
            }).add({
                targets: this.$refs.font,
                translateX: 170,
                offset: 20,
                easing: 'easeInOutQuart'
            }).add({
                targets: this.$refs.root,
                opacity: 0,
                offset: 700
            }).add({
                targets: '.header',
                opacity: 1,
                offset: 1000
            }).add({
                targets: this.$refs.root,
                height: 0,
                width: 0
            })
        },
        // 显示基本架构
        showFrameDetail() {
            if (!this.FramedetailShowed) {
                // 改变标题
                anime({
                    targets: '.second .title',
                    backgroundColor: '#D9D9D9',
                    height: 50,
                    easing: 'easeInOutQuart'
                })
                anime({
                    targets: '.detail',
                    translateY: `-=60`,
                    easing: 'easeInOutQuart'
                })
                // 后端动画
                let backTimeline = anime.timeline()
                backTimeline.add({
                    targets: this.$refs.back,
                    height: 440,
                    width: 400,
                    translateX: '-=300',
                    translateY: '-=170',
                    easing: 'easeInOutQuart'
                }).add({
                    targets: this.$refs.backApp,
                    opacity : 1,
                    height: '200px',
                    easing: 'easeInOutQuart',
                    offset: 200
                }).add({
                    targets: this.$refs.backServer,
                    opacity : 1,
                    easing: 'easeInOutQuart',
                    offset: 200
                })
                // 前端动画
                let fontTimeline = anime.timeline()
                fontTimeline.add({
                    targets: this.$refs.font,
                    height: 440,
                    width: 400,
                    translateX: '+=0',
                    translateY: '-=170',
                    easing: 'easeInOutQuart'
                }).add({
                    targets: this.$refs.fontApp,
                    opacity : 1,
                    height: '200px',
                    easing: 'easeInOutQuart',
                    offset: 200
                }).add({
                    targets: this.$refs.fontServer,
                    opacity : 1,
                    translateY: '-=30',
                    easing: 'easeInOutQuart',
                    offset: 200
                })
                
                this.FramedetailShowed = true
            }
            
        },
        // 显示平台/服务器
        showServerDetail() {
            if (this.FramedetailShowed && !this.serverDetailShowed) {
                anime({
                    targets: '.base-server .second-title',
                    opacity: 0,
                    width: 0
                })
                anime({
                    targets: '.font-server',
                    width: '170px',
                    opacity: 1,
                    easing: 'easeInOutQuart'
                })
                anime({
                    targets: '.back-server',
                    width: 380,
                    opacity: 1,
                    easing: 'easeInOutQuart'
                })
                this.serverDetailShowed = true
            }            
        },
        // 显示前端服务
        showFontAppDetail() {
            if (this.FramedetailShowed && !this.fontAppShowed) {
                console.log('显示前端')
                this.fontAppTitle = 'Vue'
                let fontTimeline = anime.timeline()
                fontTimeline.add({
                    targets: '.to-github',
                    translateY: '+=155',
                    opacity: 1,
                    scale: 0.7,
                    easing: 'easeInOutQuart',
                    offset: 200
                }).add({
                    targets: '.to-server',
                    translateY: '+=245',
                    opacity: 1,
                    scale: 0.7,
                    easing: 'easeInOutQuart',
                    offset: 200
                }).add({
                    targets: '.connect',
                    opacity: 1,
                    easing: 'easeInOutQuart',
                    offset: 400
                }).add({
                    targets: '.connect-to-back',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutSine',
                    direction: 'alternate',
                    loop: true
                })
                
                // 服务缩短
                anime({
                    targets: this.$refs.fontApp,
                    height: 130
                })
                // 调整服务名称位置
                anime({
                    targets: '.font-app-title',
                    width: '40%',
                    translateX: '+=180',
                    translateY: '+=50',
                    easing: 'easeInOutQuart'
                })
                // 显示axios
                anime({
                    targets: '.axios',
                    height: '110',
                    opacity: 1,
                    easing: 'easeInOutQuart'
                })
                // github出现
                anime({
                    targets: '.github',
                    height: 60,
                    opacity: 1
                })
                // 平台缩短
                anime({
                    targets: this.$refs.fontServer,
                    height: 80,
                    translateY: '+=30'
                })
                this.fontAppShowed = true
            }
            else {
                this.setDetailPage('vue')
            }
        },
        // 显示后端服务
        showBackAppDetail() {
            if (this.FramedetailShowed && !this.backAppShowed) {
                console.log('显示后端')
                let backAppTimeLine = anime.timeline()
                backAppTimeLine.add({// 显示mysql
                    targets: '.mysql',
                    height: 220,
                    width: 150,
                    marginRight: '10px',
                    opacity: 1,
                    easing: 'easeInOutQuart',
                    offset: 0
                }).add({// 服务缩短
                    targets: this.$refs.backApp,
                    width: 200,
                    easing: 'easeInOutQuart',
                    offset: 0
                }).add({// 显示箭头 指向mysql
                    targets: '.to-mysql',
                    translateY: '+=115',
                    translateX: '-=35',
                    rotate: '90deg',
                    scale: 0.7,
                    opacity: 1,
                    easing: 'easeInOutQuart',
                    offset: 200
                }).add({
                    targets: '.connect',
                    opacity: 1,
                    easing: 'easeInOutQuart',
                    offset: 400
                }).add({
                    targets: '.connect-to-font',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutSine',
                    direction: 'alternate',
                    loop: true
                })
                
                // 调整服务名称位置
                anime({
                    targets: '.back-app-title',
                    width: '100%'
                })
                
                // 显示express中间件
                anime({
                    targets: '.back-app-middleware',
                    height: 25,
                    width: '100%',
                    easing: 'easeInOutSine',
                    opacity: 1
                })

                
                this.backAppTitle = 'Express'
                
                this.backAppShowed = true
            }
            else {
                this.setDetailPage('express')
            }
        },
        // 隐藏详情页
        hideDetailPage() {
            if (this.detailPageShowed) {
                console.log('隐藏详情页')
                anime({
                    targets: '.detail',
                    duration: '700',
                    translateY: `+=${this.clientHeight * 0.5 + 230}`
                })
            }
            this.detailPageShowed = false
        },
        // 显示详情页
        showDetailPage() {
            if (!this.detailPageShowed) {
                console.log('显示详情页')
                anime({
                    targets: '.detail',
                    duration: '700',
                    translateY: `-=${this.clientHeight * 0.5 + 230}`
                })                
            }
            this.detailPageShowed = true
        },
        // 设置detail页的内容
        setDetailPage(pageName) {
            if (this.fontAppShowed || this.backAppShowed || this.serverDetailShowed) {
                console.log(`显示${pageName}的详情`)
                this.intrdouceType = pageName
                this.showDetailPage()
            }
        }
    },
    watch: {
        detailPageShowed(newData) {
            this.detailPageStyle.cursor = newData ? 'default' : 'pointer'
        }
    },
    mounted() {
        this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight
    }
}
</script>
