const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()


router.post('/login', UserCtrl.checkUser)
router.post('/user', UserCtrl.createUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/user', UserCtrl.getUsers)
router.post('/game', UserCtrl.addNewGame)

module.exports = router
