const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()


router.post('/login', UserCtrl.checkUser)

module.exports = router