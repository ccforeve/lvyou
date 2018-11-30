<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper" ref="mySwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swipe-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props: {
            list: Array
        },
        data () {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop: true
                }
            }
        },
        computed: {
            showSwiper () {
                return this.list.length
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
        padding-bottom : 28.25%
        .swipe-img
            width : 100%
</style>
