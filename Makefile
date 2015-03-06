install:
	bundle install
	bundle exec bourbon install --path=vendor
	npm install -f

build:
	bundle exec sass builds/ui-toolkit.scss > ui-toolkit.css

dev:
	npm start
