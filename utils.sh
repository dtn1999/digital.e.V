#!/bin/bash
#mkcert -install
#mkcert localhost
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem