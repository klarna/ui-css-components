# Klarna UI CSS Components
[![Build Status](https://travis-ci.org/klarna/ui-css-components.svg?branch=master)](https://travis-ci.org/klarna/ui-css-components)

## Note: This project and it's sister project [klarna/ui-react-components](https://github.com/klarna/ui-react-components) are deprecated. Use [@klarna/ui](https://github.com/klarna/ui) instead

This project contains CSS components to be used in all [Klarna](http://klarna.com/) user facing projects.

The showroom of these components is available online at
[klarna.github.io/ui-css-components](http://klarna.github.io/ui-css-components).

The reference for its implementation is [Klarna's styleguide](https://github.com/klarna/styleguide).

The project follows a non strict version of [BEM](https://en.bem.info/), and it doesn't include any kind of JavaScript so no behaviour is defined. If you use [React](https://facebook.github.io/react/) use the [ui-react-components](https://github.com/klarna/ui-react-components/).

#### Running locally

To run the showroom locally:

```sh
npm install
make dev
```

#### License

Please check the [LICENSE](LICENSE) file.

#### Contributing

Make sure...

1. ...your contribution is aligned with the styleguide.
2. ...your contribution doesn't break the grid. To avoid that use always the `$grid` variable to define your sizes, as in `line-height: ($grid * 4)`. As a rule of thumb, if your element total height (sum of content, paddings, margins, etc...) has an integer multiple of `$grid` you should be good.
3. ... your code is linted: `npm run lint`.
4. ... it works in the major browsers, the simplest way is to spawn [ngrok](https://ngrok.com/) and use the cloud service of your choice. Else, you can download IE virtual machines for virtualbox using `curl -s https://raw.githubusercontent.com/xdissent/ievms/master/ievms.sh | env IEVMS_VERSIONS="9" bash`.

Then:

1. Send a PR to GitHub.
2. Once approved:
	1. Merge your PR to master.
	2. Update the version using `npm version` (tag will have `v` prefix) & update `CHANGELOG.md`.

Travis will take care of publishing your new version to npm.
