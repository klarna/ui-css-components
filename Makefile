install:
	rm -rf node_modules
	rm -rf bower_components
	npm install -f
	bower install

build:
	npm run images
	npm run build

dev:
	npm start

bourbon:
	bundle install
	bundle exec bourbon install --path=vendor
