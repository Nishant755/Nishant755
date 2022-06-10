const AuthorModel= require("../models/Publishermodel")

const createpublisher= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

module.exports.createpublisher=createpublisher