import config from './config'

export default {
    data: () => ({
        config
    }),
    methods: {
        /**
        * 获取随机数
        *
        * @param {number} min 最小值(包含)
        * @param {number} max 最大值(包含)
        * @param {number} isFloor 返回结果是否为小数(默认不包含)
        * @returns {number} 指定区间内任意数
        */
        getRand(min, max, isFloor = true) {
            let rand = Math.random() * (max - min + 1) + min
            if (isFloor) {
                return Math.floor(rand)
            } else {
                return rand
            }
        },
    }
}