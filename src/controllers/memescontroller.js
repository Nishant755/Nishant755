let axios = require("axios")
const getallMemes = async function (req, res) {
    try {
        var options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let creatememe = async function (req, res) {

    try {
        let  template_id  = req.query.template_id 
let text0=req.query.text0
let text1=req.query.text1
let username=req.query.username
let password=req.query.password
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${ text1}&username=${username}&password=${password}`
            
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
module.exports.getallMemes = getallMemes
module.exports.creatememe = creatememe 