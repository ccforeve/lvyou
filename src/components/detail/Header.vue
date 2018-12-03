<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="back">
            <span class="iconfont back-icon">&#xe624;</span>
        </router-link>
        <div class="header-fixed" v-show="!back" :style="opacityStyle">
            景点详情
            <router-link to="/">
                <div class="iconfont fixed-back-icon">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailHeader",
        data () {
            return {
                back: true,
                opacityStyle: {
                    opacity: 0
                }
            }
        },
        methods: {
            handleScroll () {
                const top = document.documentElement.scrollTop
                if(top > 20) {
                    let opacity = top / 140
                    opacity = opacity > 1 ? 1 : opacity
                    this.opacityStyle = { opacity }
                    this.back = false
                } else {
                    this.back = true
                }
            }
        },
        activated () {
            window.addEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'

    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        text-align center
        border-radius .4rem
        background rgba(0, 0, 0, .8)
        .back-icon
            color #fff
            font-size .4rem
    .header-fixed
        position fixed
        top 0
        right 0
        left 0
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        .fixed-back-icon
            position absolute
            top 0
            left 0
            width .64rem
            text-align center
            font-size .4rem
            color #ffffff
</style>
