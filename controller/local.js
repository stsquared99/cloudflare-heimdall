/**
 * Model Schema
 */
const Records = require('../models/records')
errors = require('restify-errors')

function keyNamer(data) {
	data._name = data.name;
	delete data.name;

	data._type = data.type;
	delete data.type;

	return data;
}


function Local() {
	that = this;

	that.list_dns_records = function (req, res, next) {
		Records.find({
			zone_id: req.params.zone_identifier
		}, function (err, docs) {
			res.json(docs);
		});

		next()
	};

	that.create_dns_record = function (req, res, next) {
		if (!req.body.hasOwnProperty('content') || !req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('type')) {
			res.send(500, 'Missing properties')
		} else {
			let data = keyNamer(req.body || {})

			data.zone_id = req.params.zone_identifier;

			let record = new Records(data)
			record.save(function (err) {
				if (err) {
					log.error(err)
					return next(new errors.InternalError(err.message))
					next()
				}

				res.send(201, data)
				next()
			})
		}
	}

};

module.exports = new Local();