<style lang="stylus">
html, body
    height 100%
    margin 0px
    overflow hidden
#app 
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
</style>

<template lang="pug">
    #app
        router-view
</template>

<script>
export default {
    name: 'app'
}
</script>
