require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const route = require('./Router/router')
const loadTest = require('../test/load-test')
const { NODE_ENV } = require('./config')
const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(cors())
app.use(helmet())

app.use(`/api/location-data/`, route)
app.use('/loaderio-67b17bee8670f24930de057ed6c41008/', loadTest)//multiple instance test

  app.use(function errorHandler(error, req, res, next) {
      let response
      if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
      } else {
        console.error(error)
        response = { message: error.message, error }
      }
      res.status(500).json(response)
    })

module.exports = app