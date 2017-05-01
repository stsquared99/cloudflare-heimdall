'use strict'

const controller = require('../controller');

/*
 * GET routes
 */

server.get('/zones/:zone_identifier/dns_records', controller.local.list_dns_records);

/*
 * POST routes
 */

server.post('/zones/:zone_identifier/dns_records', controller.local.create_dns_record);

/*
 * POST routes
 */


/*
 * POST routes
 */