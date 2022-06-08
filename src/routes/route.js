const express = require('express');
const router = express.Router();
const UserController= require("../controllers/bookController")

router.post("/createbook", UserController.createBook)
router.post("/createauthor", UserController.createauthor)
router.get("/getbook", UserController.getBook)
module.exports = router;