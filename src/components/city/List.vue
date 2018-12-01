<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityChange(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div
                        class="item border-topbottom"
                        v-for="item of item"
                        :key="item.id"
                        @click="handleCityChange(item.name)"
                    >
                        {{item.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "CityList",
        props: {
            cities: Object,
            hot: Array,
            letter: String
        },
        mounted () {
            this.scroll = new BScroll(this.$refs.wrapper)
        },
        methods: {
            handleCityChange (city) {
                this.$store.commit('changeCity', city)
                this.$router.push('/')
            }
        },
        watch: {
            letter () {
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"

    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        .title
            line-height .54rem
            background #eee
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrapper
                float left
                width 33.33%
                .button
                    padding .1rem 0
                    margin .1rem
                    text-align center
                    border .02rem solid #ccc
                    font-size .32rem
                    border-radius .06rem
                    color #666
        .item-list
            .item
                line-height .54rem
                padding .2rem
                color #666
</style>
