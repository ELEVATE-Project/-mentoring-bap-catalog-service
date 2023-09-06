'use strict'
const elasticsearchUtils = require('@utils/elasticsearch')

exports.getSessionById = async (sessionId) => {
	try {
		return await elasticsearchUtils.getDocumentById(process.env.ELASTIC_SESSION_INDEX, sessionId)
	} catch (err) {
		console.log(err)
	}
}

exports.getSessions = async (filters) => {
	try {
		return await elasticsearchUtils.searchDocuments(process.env.ELASTIC_SESSION_INDEX, filters)
	} catch (err) {
		console.log(err)
	}
}
