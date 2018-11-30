<template>
    <div class="city">
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cityList" :hot="hotCityList" :letter="letter"></city-list>
        <city-alphabet :cities="cityList" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from '@/components/city/Header.vue'
import CitySearch from '@/components/city/Search.vue'
import CityList from '@/components/city/List.vue'
import CityAlphabet from '@/components/city/Alphabet.vue'
import axios from 'axios'

export default {
    name: "City",
    data () {
        return {
            cityList: {},
            hotCityList: [],
            letter: ''
        }
    },
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json').then(this.handleGetCityInfo)
        },
        handleGetCityInfo (res) {
            res = res.data
            if(res.ret && res.data) {
                const data = res.data
                this.cityList = data.cities
                this.hotCityList = data.hotCities
            }
        },
        handleLetterChange (letter) {
            this.letter = letter
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>
