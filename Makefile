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

gh-pages:
	-git branch -D gh-pages 
	git checkout -b gh-pages
	git reset --hard master
	echo node_modules > .gitignore
	npm install
	npm run build
	git add --all
	git commit -m "Update GH pages [skip ci]"
	git push origin --force gh-pages
