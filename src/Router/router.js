const express = require('express')
const router = express.Router()
const service = require('./service')

router
    .route('/')
    .get((req, res, next) => {
        res.send(service.storeLocationData())
    })


module.exports = router