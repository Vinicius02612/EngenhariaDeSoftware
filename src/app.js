const express = require('express')
const { response } = require('express')
const app = express()

const routerProfs = require('../routes/profs')

app.use('/profe', routerProfs)



module.exports = app