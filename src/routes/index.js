'use strict'
const router = require('express').Router()
const catalogController = require('@controllers/')
/* const { authVerifier } = require('@middlewares/authVerifier')

router.use(authVerifier) */

console.log("Navigation is happening")
router.post('/index-session', catalogController.search)
router.post('/get-sessions/', catalogController.getFulfillment)
router.get('/get-session/:sessionId', catalogController.getSession)
module.exports = router