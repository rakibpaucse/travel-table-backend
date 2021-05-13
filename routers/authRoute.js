const router = require('express').Router()


const {
    signupGetController,
    signupPostController,
    loginGetController,
    loginPostController,
    logoutController
} = require('../controllers/authController')

const { isUnauth } = require('../middlewares/authMiddleWare')

router.get('/signup'  , signupGetController)
router.post('/signup'  , signupPostController)

// router.get('/login' , isUnauth , loginGetController)
router.post('/login'   , loginPostController)

router.get('/logout' , logoutController)



module.exports = router