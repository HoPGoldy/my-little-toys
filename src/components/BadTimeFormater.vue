<style scoped lang="stylus">
.time-formater-container
    margin 64px 20%
    .output
        margin 32px 0px
        border-radius 5px
        background-color #f8f8f8
        padding 9px
</style>

<template lang="pug">
.time-formater-container
    el-input(v-model="inputTime")
        template(slot="prepend") 请输入日期
    .output {{outputDate}}
</template>

<script>
import moment from 'moment'

export default {
    name: 'BadTimeFormater',
    data: () => ({
        inputTime: '',
        outputDate: ''
    }),
    watch: {
        inputTime(newData) {
            const date = moment(newData)
            this.outputDate = `${date.format("YYYY 年 MM 月 D 日 HH:mm:ss zz")}`
        }
    },
    methods: {

    },
}
</script>
