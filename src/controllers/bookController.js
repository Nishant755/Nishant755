const BookModel= require("../models/aother.model")
const BookMode2= require("../models/bookmodel")

const createBook= async function (req, res) {
    let data= req.body
 let savedData = await BookModel.create(data)
    if (!data.book_id)
    res.send({msg: "eroor"})
}
const createauthor= async function (req, res) {
    let data= req.body

    let savedData= await BookMode2.create(data)
    if (!data.author_id)
    res.send({msg: "eroor"})
}
const  getBook= async function (req,res){
    let data = await BookMode2.find({author_name:"mongo"}).select("author_id")
    let bookData = await BooksModel.find({author_id:data[0].author_id})
    res.send({msg:"bookData"})
}


module.exports.createBook = createBook
module.exports.createauthor= createauthor
module.exports.getBook= getBook
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
