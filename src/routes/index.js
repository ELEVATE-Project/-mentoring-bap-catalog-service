'use strict'
const router = require('express').Router()
const catalogController = require('@controllers/')

router.post('/index-session', catalogController.indexSession)
router.post('/index-raw-session', catalogController.indexRawSession)
router.get('/get-session/:sessionId', catalogController.getSession)
router.post('/search-sessions', catalogController.searchSessions)
module.exports = router