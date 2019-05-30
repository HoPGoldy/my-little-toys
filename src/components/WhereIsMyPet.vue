<style lang="stylus" scoped>
.get-pet-btn
    position absolute
    left 0px
    bottom 15px
    width 96%
    height 50px
    margin 2%

    z-index: 10

.header
    width 100%
    margin 0px
    padding 8px 0px
    background-color #eee
    box-shadow #e3e3e3 0px 0px 15px 5px

#map
    width 100%
    height 100%
    bottom 0px
    position absolute
    z-index -1
</style>

<template lang="pug">
.container
    .header.text-center
        h2(style="margin-top:8px", @click="easteregg") 宠物查找器
        h5 你说我宠物怎么还没出现呢
    #map
    el-button.get-pet-btn(type="primary", @click="getPet") 寻找我的宠物！
</template>

<script>
    import petData from '../data/WhereIsMyPetData.js'
    export default {
        name: 'WhereIsMyPet',
        data() {
            return {}
        },
        methods: {
            easteregg() {
                this.map.flyTo([35.29761415213649, 115.09795761448915], 13)
                this.popup
                    .setLatLng([35.29761415213649, 115.09795761448915])
                    .setContent("this game create for Leefoundy")
                    .openOn(this.map)
            },
            getPet() {
                let randLat = this.getRand(petData.findArea.lat[0], petData.findArea.lat[1], false)
                let randLng = this.getRand(petData.findArea.lng[0], petData.findArea.lng[1], false)
                let petInfo = this.getInfo()
                console.log('宠物信息', petInfo)
                let template = `
                                    <div>找到你的宠物啦！</div>
                                    <div>它是一只<b>${petInfo['种类']}</b></div><br>
                                    <table border="0" style="width:100%">
                                        <tr>
                                            <td>身型：<b>${petInfo['身型']}</b></td>
                                        </tr>
                                        <tr>
                                            <td>体型：<b>${petInfo['体型']}</b></td>
                                        </tr>
                                        <tr>
                                            <td>属性：<b>${petInfo['属性']}</b></td>
                                        </tr>
                                        <tr>
                                            <td>天赋&爱好：<b>${petInfo['天赋&爱好']}</b></td>
                                        </tr>
                                    </table>
                                `
                console.log('宠物在', randLat, randLng)
                this.map.flyTo([randLat + 0.10, randLng], 10)
                this.map.removeLayer(this.marker)
                this.marker = L.marker([randLat, randLng]).addTo(this.map)
                this.marker.bindPopup(template).openPopup()
            },
            getInfo() {
                let info = {}
                for (let key in petData.totalInfo) {
                    info[key] = petData.totalInfo[key][this.getRand(0, petData.totalInfo[key].length - 1)]
                }
                return info
            }
        },
        mounted() {
            this.map = L.map('map', {
                center: [39.919847890330395, 116.39135755598546],
                zoomControl: false,
                zoom: 7
            })
            L.esri.tiledMapLayer({
                url: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer'
            }).addTo(this.map)
            this.marker = L.marker()
            this.popup = L.popup()
        }
    }
</script>
