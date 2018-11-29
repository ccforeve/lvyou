<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swipe-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data () {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop: true
                },
                swiperList: [{
                    id: '001',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'
                },{
                    id: '002',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/4d/6706bf772c05ce02.jpg_750x200_773e75f0.jpg'
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background : #ffffff !important
    .wrapper
        overflow : hidden
        width : 100%
        height : 0
        padding-bottom : 31.25%
        .swipe-img
            width : 100%
</style>
