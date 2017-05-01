# cloudflare-heimdall

A RESTful API server written in NodeJS that handles permissioning of cloudflare domains in an organization. Users are granted API keys which allow them to interface with cloudflare zones that they have been granted permission to modify.

## API endpoints

#### Zones:
```
/zones
GET: List all zones authorized

/zones/:zone_identifier
GET: List all data for a zone
PATCH: Only one zone property can be changed at a time

/zones/:zone_identifier/purge_cache
DELETE: Remove ALL files from Cloudflare's cache
```
#### DNS:
```
/zones/:zone_identifier/dns_records
GET: List all records for a zone
PUT: Create new records
UPDATE: Update specified records, adding new records as needed

/zones/:zoneID/records/:recordID
GET: List record
UPDATE: Modify record
DELETE: Remove record
```

#### Loadbalancers:
```
/zones/:zone_identifier/loadbalancers
GET: List all loadbalancers for a zone
PUT: Create new loadbalancer
UPDATE: Update specified loadbalancers, adding new loadbalancers as needed

/zones/:zone_identifier/loadbalancers/:loadbalancerID
GET: List loadbalancers
UPDATE: Modify loadbalancers
DELETE: Remove loadbalancers
```