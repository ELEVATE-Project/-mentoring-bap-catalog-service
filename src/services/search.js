'use strict'
// const sessionQueries = require('@database/indexing/session/queries')
// const agentQueries = require('@database/indexing/agent/queries')
// const { getprotocolObjectsFromSessions, getStatusObjectsFromSession } = require('@helpers/sessionsToProtocolObjects')
// const { getFulfillmentAndAgentObjects } = require('@helpers/fulfillmentAndAgentObjects')
// const { protocolResponseDTO } = require('@dtos/protocolResponse')
// const { fulfillmentObjectDTO } = require('@dtos/fulfillmentObject')
// const { getCount, getDocs, getSourceObject, flattenArrayOfArrays } = require('@utils/generic')

const { indexDocument,  getDocumentById, searchDocuments} = require('@utils/elasticsearch')

const searchByPersonName = async (requestBody) => {
    console.log("here is body", requestBody)
}

exports.indexSessions = async (requestBody) => {
	console.log("Hello World")
}

exports.getFulfillment = async (fulfillmentId) => {
    console.log("Hello World 2")
}

exports.getSessioById = async (sessionId, getAllProtocolObjects) => {
    console.log("Hello World 3")
}

exports.getStatusBody = async (sessionId, fulfillmentId) => {
    console.log("Hello WOrld 4")
}