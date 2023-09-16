const express = require("express")
const router = express.Router()
const { createTextFile } = require("../controllers/textControllers")
 
router.post("/create", createTextFile)

module.exports = router