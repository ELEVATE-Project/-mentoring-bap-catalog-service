'use strict'
const searchService = require('@services/search')
const indexingService = require('@services/indexing')

exports.indexSession = async (req, res) => {
	try {
		const indexingResponse = await indexingService.indexSession({
			sessionId: req.body.sessionId,
			sessionDoc: req.body.session,
		})
		await res.status(200).send({ ...indexingResponse })
	} catch (err) {
		console.log(err)
	}
}

exports.indexRawSession = async (req, res) => {
	try {
		const indexingResponse = await indexingService.indexRawSession({
			sessionId: req.body.sessionId,
			sessionDoc: req.body.session,
		})
		await res.status(200).send({ ...indexingResponse })
	} catch (err) {
		console.log(err)
	}
}

exports.getSession = async (req, res) => {
	try {
		const sessionId = req.params.sessionId
		const session = await searchService.getSessionById(sessionId)
		await res.status(200).send(session)
	} catch (err) {
		console.log(err)
	}
}

exports.searchSessions = async (req, res) => {
	try {
		const filters = req.body.filters
		const sessions = await searchService.getSessions(filters)
		await res.status(200).send(sessions.hits.hits)
	} catch (err) {
		console.log(err)
	}
}