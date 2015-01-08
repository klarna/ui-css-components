install:
	bundle install
	bundle exec bourbon install --path=src/vendor
	npm install

build:
	bundle exec sass src/toolkit.scss > toolkit.css
	bundle exec sass support/dev.scss > dev.css

dev:
	npm start
