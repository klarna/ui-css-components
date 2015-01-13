install:
	bundle install
	bundle exec bourbon install --path=vendor
	npm install

build:
	bundle exec sass builds/toolkit.scss > toolkit.css

dev:
	npm start
