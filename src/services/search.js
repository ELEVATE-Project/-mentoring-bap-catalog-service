'use strict'
const elasticsearchUtils = require('@utils/elasticsearch')
const { sessionSearchQueryBuilder } = require('@helpers/sessionSearchQueryBuilder')

exports.getSessionById = async (sessionId) => {
	try {
		return await elasticsearchUtils.getDocumentById(process.env.ELASTIC_SESSION_INDEX, sessionId)
	} catch (err) {
		console.log(err)
	}
}

exports.getSessions = async (filters) => {
	try {
		console.log(filters)
		const sessionSearchQuery = await sessionSearchQueryBuilder(filters)
		console.log(JSON.stringify(sessionSearchQuery, null, 3))
		return await elasticsearchUtils.searchDocuments(process.env.ELASTIC_SESSION_INDEX, sessionSearchQuery)
	} catch (err) {
		console.log(err)
	}
}
