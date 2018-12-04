<template>
    <div class="detail">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
    import DetailBanner from '@/components/detail/Banner.vue'
    import DetailHeader from '@/components/detail/Header.vue'
    import DetailList from '@/components/detail/List.vue'

    export default {
        name: "Detail",
        data () {
            return {
                list: [{
                    'title': '成人票',
                    'children': [{
                        'title': '三人团票',
                        'children': [{
                            'title': '三人团票-官方自营',
                        }]
                    }, {
                        'title': '五人团票'
                    }]
                },{
                    'title': '学生票'
                },{
                    'title': '儿童票'
                }]
            }
        },
        components: {
            DetailBanner,
            DetailHeader,
            DetailList,
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>
