'use strict'

module.exports = {
	name: 'cloudflare-heimdall',
	version: '0.0.1',
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 80,
	base_url: process.env.BASE_URL || 'http://localhost:80',
	db: {
		uri: 'mongodb://db:27017/api',
	},
}