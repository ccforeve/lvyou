<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weeken :list="weekendList"></home-weeken>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/Header.vue'
import HomeSwiper from '@/components/home/Swiper.vue'
import HomeIcons from '@/components/home/Icons.vue'
import HomeRecommend from '@/components/home/Recommend.vue'
import HomeWeeken from '@/components/home/Weeken.vue'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'home',
  data () {
      return {
          lastCity: '',
          swiperList: [],
          iconList: [],
          recommendList: [],
          weekendList: []
      }
  },
  components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeeken
  },
  computed: {
      ...mapState(['city']),
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      res = res.data
      if(res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
        this.getHomeInfo()
    }
  }
}
</script>
