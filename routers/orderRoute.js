const router = require('express').Router()


const {postOrderHandler} = require('../controllers/orderController')


router.get('/list', postOrderHandler)



module.exports = router