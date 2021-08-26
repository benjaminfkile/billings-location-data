const axios = require('axios')
let location
let rps = 0
let count = 0
let loc = process.env.LOC

setInterval(() => {
    rps = count
    count = 0
}, 1000)

const service = {

    getLocation() {
        axios.get(`https://wmsfo-rudolph.herokuapp.com/api/gps-data/${loc}`, {
        }).then(res => {
            location = res.data
        }).catch(err => {
            console.log(err.response.status)
        })
    }, storeLocationData() {
        count++
        location.rps = rps
        return location
    }
}

module.exports = service