const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController1= require("../controllers/publishercontroler")
const bookController2= require("../controllers/bookController")

router.post("/createAuthor", authorController.createAuthor  )
router.post("/createBook",bookController2.createBook  )
router.get("/getauthordetails", bookController2.getBooksWithAuthorDetails )
router.post("/createpublisher", bookController1.createpublisher  )


module.exports = router;