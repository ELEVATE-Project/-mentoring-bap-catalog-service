'use strict'
const elasticsearchUtils = require('@utils/elasticsearch')

const indexSession = async ({ sessionId, sessionDoc }) => {
	try {
		return await elasticsearchUtils.indexDocument(process.env.ELASTIC_SESSION_INDEX, sessionId, sessionDoc)
	} catch (err) {
		console.log(err)
	}
}

const indexRawSession = async ({ sessionId, sessionDoc }) => {
	try {
		return await elasticsearchUtils.indexDocument(process.env.ELASTIC_RAW_SESSION_INDEX, sessionId, sessionDoc)
	} catch (err) {
		console.log(err)
	}
}

const indexingService = { indexSession, indexRawSession }
module.exports = indexingService
