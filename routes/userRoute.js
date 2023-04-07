const express = require('express')
const { loginController, registerController } = require('../controllers/userController')

const router = express.Router()


//post route for login
router.post('/login', loginController)

//post for register

router.post('/register', registerController)

module.exports = router