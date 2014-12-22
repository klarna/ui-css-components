install:
	bundle install
	bundle exec bourbon install --path=src/vendor

build:
	make install
	bundle exec sass src/toolkit.scss > toolkit.css

dev:
	make install
	bundle exec compass watch
