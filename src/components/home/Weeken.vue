<template>
    <div>
        <div class="title">周末去哪</div>
        <ul>
            <li class="item border-bottom" v-for="item of itemList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>

                <div class="item-info">
                    <p class="item-title">{{item.name}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeWeeken",
        data () {
            return {
                itemList: [{
                    id: '001',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
                    name: '浮在海上的绿洲1',
                    desc: '南国滨海之城，阳江等你'
                },{
                    id: '002',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
                    name: '浮在海上的绿洲2',
                    desc: '南国滨海之城，阳江等你'
                },{
                    id: '003',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
                    name: '浮在海上的绿洲3',
                    desc: '南国滨海之城，阳江等你'
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/mixins.styl'

    .title
        line-height .8rem
        margin-top .2rem
        background #eee
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 33.9%
        .item-img
            width 100%
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
</style>
