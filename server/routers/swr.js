const express = require('express')
const router = express.Router()
const {
    GET_DUMMY_USER_LIST,
    GET_DUMMY_USER_DETAILS,
    FIRST_ACCOUNT,
    SECOND_ACCOUNT,
    THIRD_ACCOUNT } = require('../controllers/swr')


router.get('/user/list/:quantity', GET_DUMMY_USER_LIST)
router.get('/user/details', GET_DUMMY_USER_DETAILS)

router.get('/first-account-info', FIRST_ACCOUNT)
router.get('/second-account-info', SECOND_ACCOUNT)
router.get('/third-account-info', THIRD_ACCOUNT)



module.exports = router