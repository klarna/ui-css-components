install:
	bundle install
	bundle exec bourbon install --path=vendor
	rm -rf node_modules
	npm install -f

build:
	bundle exec sass builds/ui-toolkit.scss > ui-toolkit.css

dev:
	npm start
