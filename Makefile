VERSION   	= $(shell sed -n 's/[ ]*"version":[ ]*"\(.*\)",*/\1/p' 	package.json)
COMMIT_HASH = $(shell git rev-parse HEAD)

install:
	rm -rf node_modules
	npm install -f

build:
	npm run build

dev:
	npm start

tag:
	git tag v${VERSION}
	git push origin v${VERSION}
