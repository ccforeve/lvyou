<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="img-content" :src="item.iconUrl" :alt="item.desc">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="icon">
                    <div class="icon-img">
                        <img class="img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
                    </div>
                    <p class="icon-desc">热门景点2</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        data () {
            return {
                iconList: [{
                    id: '001',
                    iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc: '景点门票'
                },{
                    id: '002',
                    iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    desc: '深圳必游'
                },{
                    id: '003',
                    iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                    desc: '一日游'
                },{
                    id: '004',
                    iconUrl: 'http://img1.qunarzz.com/piao/fusion/1811/5e/c640ec3b7d7ae802.png',
                    desc: '打卡圣地'
                },{
                    id: '005',
                    iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    desc: '动植物园'
                },{
                    id: '006',
                    iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                    desc: '泡温泉'
                },{
                    id: '007',
                    iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
                    desc: '野生动物园'
                },{
                    id: '008',
                    iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                    desc: '文化古迹'
                },{
                    id: '009',
                    iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
                    desc: '东部华侨城'
                }]
            }
        },
        computed: {
            pages () {
                const pages = []
                this.iconList.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if(!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })

                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixins.styl'

    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
    .icon
        position relative
        overflow hidden
        float left
        width 25%
        height 0
        padding-bottom 25%
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            box-sizing border-box
            padding .1rem
            .img-content
                display block
                margin 0 auto
                height 100%
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            color $textColor
            text-align center
            ellipsis()
</style>
