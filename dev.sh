#!/bin/bash

build() {
	npm build .

	if [[ ! $(type nodemon 2>/dev/null) ]]
	then
		npm install -g nodemon
	fi

	docker pull mongo
}

clean() {
	docker rm -f cloudflare-heimdall-mongo

	rm -rf ./node_modules/
}

run() {
	docker run --name cloudflare-heimdall-mongo -p 27017:27017 -d mongo

	sudo nodemon server.js
}

main() {
	local arg1="$1"

	if [[ "$arg1" == "build" ]]
	then
		build
	elif [[ "$arg1" == "clean" ]]
	then
		clean
	elif [[ "$arg1" == "run" ]]
	then
		run
	else
		echo "./dev.sh [build]/[run]"
	fi
}

main "$@"