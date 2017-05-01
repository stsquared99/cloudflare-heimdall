'use strict'

const mongoose = require('mongoose'),
	mongooseApiQuery = require('mongoose-api-query')

const RecordsSchema = new mongoose.Schema({
	_type: {
		type: String,
		required: true,
		trim: true,
	},
	_name: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	id: {
		type: String,
	},
	proxied: {
		type: Boolean,
	},
	proxiable: {
		type: Boolean,
	},
	ttl: {
		type: Number,
	},
	zone_id: {
		type: String,
		required: true,
	},
	zone_name: {
		type: String,
	},
}, {
	minimize: false
});


RecordsSchema.plugin(mongooseApiQuery)

const Records = mongoose.model('Records', RecordsSchema)
module.exports = Records