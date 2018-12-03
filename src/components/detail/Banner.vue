<template>
    <div>
        <div class="banner" @click="showBanners">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1811/c7/c7cbac2c437f2c3da3.water.jpg_600x330_8a9cd18e.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">深圳欢乐谷(AAAAA景区)</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe624;</span>51
                </div>
            </div>
        </div>
        <common-gallary :banners="banners" v-show="has_show_banner" @hideBanners="showBanners"></common-gallary>
    </div>
</template>

<script>
    import CommonGallary from "@/components/common/gallary/Gallary.vue"

    export default {
        name: "DetailBanner",
        data () {
            return {
                has_show_banner: false,
                banners: [
                    'http://img1.qunarzz.com/sight/p0/1807/33/3359ac3a4bdd2b30a3.water.jpg_350x240_4ec28049.jpg',
                    'http://img1.qunarzz.com/sight/p0/1412/b5/c99be07b7b79cfb5900e03a35bc3051f.water.jpg_350x240_7823352a.jpg',
                    'http://img1.qunarzz.com/sight/p0/1509/ec/ec3e7001e1f635e7.water.jpg_350x240_aacf8528.jpg'
                ]
            }
        },
        components: {
            CommonGallary
        },
        methods: {
            showBanners () {
                this.has_show_banner = !this.has_show_banner
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            padding .22rem 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex 1
                font-size .35rem
            .banner-number
                margin-top .14rem
                padding 0 .4rem
                height .32rem
                line-height .32rem
                border-radius .2rem
                font-size .24rem
                background rgba(0, 0, 0, .8)
                .banner-icon
                    font-size .24rem
</style>
