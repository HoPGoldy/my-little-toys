import './api'
import Vue from 'vue'
import App from './views/App.vue'
import Mixin from './mixin.js'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// vcharts
// import VCharts from 'v-charts'
// import Chart from 'vue-echarts'
// router
import router from './router.js'

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(VCharts)
// Vue.component('chart', Chart)
Vue.mixin(Mixin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
