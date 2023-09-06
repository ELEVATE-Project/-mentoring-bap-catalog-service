'use strict'

exports.sessionSearchQueryBuilder = (options = {}) => {
	try {
		const { sessionTitle, recommendedFor, category, mentorName, mentorSpecialty, organisationName, startTime } =
			options
		const mustClauses = []
		if (sessionTitle) mustClauses.push({ match: { 'item.title': sessionTitle } })
		if (recommendedFor) mustClauses.push({ term: { 'recommendedFor.code': recommendedFor } })
		if (category) mustClauses.push({ term: { 'categories.id': category } })
		if (mentorName) mustClauses.push({ match: { 'mentor.name': mentorName } })
		if (mentorSpecialty) mustClauses.push({ match: { 'mentor.specialistIn': mentorSpecialty } })
		if (organisationName) mustClauses.push({ match: { 'provider.name': organisationName } })
		if (startTime && startTime.range.from && startTime.range.to)
			mustClauses.push({
				range: {
					'fulfillment.startTime': {
						gte: startTime.range.from,
						lte: startTime.range.to,
					},
				},
			})
		return {
			query: {
				bool: {
					must: mustClauses,
				},
			},
		}
	} catch (error) {
		console.error('Error building Elasticsearch query:', error)
		throw error
	}
}
