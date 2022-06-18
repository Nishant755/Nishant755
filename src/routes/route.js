const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WheatherController=require("../controllers/WheatherController")
const memescontroller=require("../controllers/memescontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getdistrictId", CowinController.getdistrictId)
router.get("/getweather", WheatherController.getweather)
router.get("/getweathertemp", WheatherController.getweathertemp)
router.get("/getcitiestemp", WheatherController.getcitiestemp)
router.get("/getmemes",memescontroller.getallMemes)
router.post("/creatememe",memescontroller.creatememe)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;