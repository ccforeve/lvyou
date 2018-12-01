let deafultCity = '深圳'
try {
    if(localStorage.city) {
        deafultCity = localStorage.city
    }
} catch (e) {}

export default {
    'city': deafultCity
}
