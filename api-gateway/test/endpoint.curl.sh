#!/bin/bash

export ACCEPT='"accept: application/json"'

export CONTENT='"Content-Type: application/json"'

export EXAMPLE='{"id":1,"email":"email","born":"1981-03-23","consent":true,"campaign":"campaign","firstName":"firstName","gender":"male"}'


# getAll -d @request.json
curl -X GET -H 'Content-Type: application/json' http://localhost:4000/subscription/
    # api-getway getAll
    # Observable { _isScalar: false, _subscribe: [Function (anonymous)] }



# get -d @request.json
curl -X GET -H 'Content-Type: application/json' http://localhost:4000/subscription/2

# create -d @request.json
curl -X POST -H 'Content-Type: application/json' -d @api-gateway/test/subscription.json  http://localhost:4000/subscription/

# update -d @request.json
curl -X PUT -H 'Content-Type: application/json' -d @api-gateway/test/subscription.json  http://localhost:4000/subscription/

# remove -d @request.json
curl -X DELETE -H 'Content-Type: application/json' -d @api-gateway/test/subscription.json  http://localhost:4000/subscription/


# auth
curl --user jcc2303:challenge http://example.com/

set AUTH="Authorization: Bearer b1094abc0-54a4-3eab-7213-877142c33fh3" 
curl -H $AUTH http://localhost:4000/auth


#  --data ' {
#       "id":"urn:ngsi-ld:Product:010", "type":"Product",
#       "name":{"type":"Text", "value":"Lemonade"},
#       "size":{"type":"Text", "value": "S"},
#       "price":{"type":"Integer", "value": 99}
# }'
