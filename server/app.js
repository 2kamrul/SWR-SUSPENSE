const express = require('express')
require('dotenv').config({ path: '.env' })
require('dotenv').config({ path: 'config.env' })
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.urlencoded({ extended: false, limit: '50mb' }))
app.use(express.json({ limit: '50mb' }))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(cors({
    credentials: true,
    origin: ['http://localhost:7101'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}))
app.use(morgan('dev'))

app.use('/swr', require('./routers/swr'))

app.use('/mui', require('./routers/mui'))

app.use('/cookie', require('./routers/cookie'))

process.env.ENVIORNMENT === 'PRODUCTION'
    ? app.listen(process.env.port)
    : app.listen(process.env.port, () => console.log('Server running on :' + process.env.port))