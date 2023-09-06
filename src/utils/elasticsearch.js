'use strict'
const { client } = require('@configs/elasticsearch')

const indexDocument = async (index, id, body) => {
	return await client.index({
		index: index,
		id: id,
		body: body,
	})
}

const getDocumentById = async (index, id) => {
	return await client.get({
		index: index,
		id: id,
	})
}

const searchDocuments = async (index, body) => {
	return await client.search({
		index: index,
		body: body,
	})
}

const deleteDocument = async (index, type, id) => {
	return await client.delete({
		index: index,
		type: type,
		id: id,
	})
}

const elasticsearchUtils = {
	indexDocument,
	getDocumentById,
	searchDocuments,
	deleteDocument,
}

module.exports = elasticsearchUtils
