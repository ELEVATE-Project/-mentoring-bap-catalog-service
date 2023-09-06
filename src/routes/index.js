'use strict'
const router = require('express').Router()
const catalogController = require('@controllers/')

router.post('/index-session', catalogController.search)
router.post('/get-sessions/', catalogController.getFulfillment)
router.get('/get-session/:sessionId', catalogController.getSession)
module.exports = router
