<template>
    <div class="container" @click="hideBanners">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, index) of banners" :key="index">
                    <img class="swipe-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonGallary",
        props: {
            banners: Array
        },
        data () {
            return {
                swiperOption: {
                    pagination : '.swiper-pagination',
                    type : 'fraction',
                    observeParents: true,
                    observer: true,
                    loop: true,
                }
            }
        },
        methods: {
            hideBanners () {
                this.$emit('hideBanners')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background #000
        .swipe-img
            width 100%
</style>
