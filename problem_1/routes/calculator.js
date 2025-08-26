const express = require("express")
const { getHome, calculate } = require("../controller/calculator")
const router = express.Router()

router
    .route('/')
    .get(getHome)
    .post(calculate)

module.exports = router