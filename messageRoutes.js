const express = require('express')
const router = express.Router()
const { createMessage } = require('../COCOSHAKE 2.0/controllers/messageControllers')

router.post('/', createMessage)

module.exports = router