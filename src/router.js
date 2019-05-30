// vue-router
// import Vue from 'vue'
import VueRouter from 'vue-router'
// Vue.use(VueRouter)

import Menu from './components/Menu.vue'
import CountDown from './components/CountDown.vue'
import WhereIsMyPet from './components/WhereIsMyPet.vue'
import MessageBoard from './components/MessageBoard.vue'
import WebsiteFrame from './components/WebsiteFrame.vue'

const routes = [
    { 
        path: '/', 
        component: Menu,
        meta: {
            title: 'HoPGoldy\' website'
        }
    },
    { 
        path: '/countdown', 
        component: CountDown,
        meta: {
            title: '考研倒计时'
        }
    },
    { 
        path: '/whereismypet', 
        component: WhereIsMyPet,
        meta: {
            title: '我的宠物在哪里'
        }
    },
    { 
        path: '/messageboard', 
        component: MessageBoard,
        meta: {
            title: '留言板'
        }
    },
    { 
        path: '/websiteframe', 
        component: WebsiteFrame,
        meta: {
            title: '站点框架'
        }
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
    if (to.meta.title) {//判断是否有标题
        document.title = to.meta.title
    }
    next()//执行进入路由，如果不写就不会进入目标页
})

export default router
