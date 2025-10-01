const express = require('express');
const AuthController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', AuthController.register)

router.post('/verify-email', AuthController.verfiyemail)

router.post('/login', AuthController.login)

router.post('/get-password-reset-otp', AuthController.forgetpass)

router.post('/check-password-reset-otp', AuthController.verifyOTPpassreset) 

router.post('/update-password', AuthController.updatePassword) 


module.exports = router;