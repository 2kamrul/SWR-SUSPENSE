const express = require('express')
const router = express.Router({ mergeParams: true })

const { SET_COOKIES, GET_COOKIES, DELETE_COOKIES } = require('../controllers/cookie')


router.get('/set-cookies', SET_COOKIES)

router.get('/get-cookies', GET_COOKIES)

router.get('/delete-cookies', DELETE_COOKIES)

module.exports = router