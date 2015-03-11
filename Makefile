install:
	bundle install
	bundle exec bourbon install --path=vendor
	rm -rf node_modules
	npm install -f

build:
	npm run images
	npm run build

dev:
	npm start
