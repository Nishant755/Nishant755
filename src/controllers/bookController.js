const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const bookMode2= require("../models/Publishermodel")

const createBook= async function (req, res) {
    let book = req.body
    
    let rep =book.author_id
    //condition1
    if(!rep)
    res.send("Please Author enter id")
    //condition2
    let rep2 =book.publisher_id
    if(!rep2)
    res.send("Please publisher  enter id")
    //condition3
    let publishId =await authorModel.findbtId(author_id)
    if(!publisher_id)
    res.send("Invalid author id ")
    //condition4
    let save =await Publishermodel.findbtId(publisher_id)
    if(!save)
    res.send("Invalid publisher id ")
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id',"publisher_id")
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails 
