let axios = require("axios")
const getweather = async function (req, res) {
    try {
        let City = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${City} ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
const getweathertemp = async function (req, res) {
    try {
        let City = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${City} ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data.main.temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
const getcitiestemp = async function (req, res) {
    try {
        let appid = req.query.appid
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

        let cityArr = []//empty array to store temprature
        //using for loop
        for (i = 0; i <= cities.length; i++) {
            let obj = {cities:cities[i] }
    
                let res=await axios.get( `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`)
            
            obj.temp = res.data.main.temp
            cityArr.push(obj)
        }
        let sort = cityArr.sort(function (a, b) { return a.temp - b.temp })
        console.log(sort)
        res.status(200).send({ msg: sort })


    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getweather = getweather
module.exports.getweathertemp = getweathertemp
module.exports.getcitiestemp = getcitiestemp