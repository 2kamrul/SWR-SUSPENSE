const express = require('express')
const router = express.Router()
const {
    GET_DUMMY_USER_LIST } = require('../controllers/mui')


router.get('/list', GET_DUMMY_USER_LIST)




module.exports = router