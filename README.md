# Klarna UI CSS Components

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

#### Contributing

1. Make sure your contribution is aligned with the styleguide.
2. Make sure your contribution doesn't break the grid. To avoid that use always the `$grid` variable to define your sizes, as in `line-height: ($grid * 4)`. As a rule of thumb, if your element total height (sum of content, paddings, margins, etc...) has an integer multiple of `$grid` you should be good.
3. Make sure you're code is linted: `npm run lint`.
4. Make sure it works in the major browsers, the simplest way is to spawn [ngrok](https://ngrok.com/) and use the cloud service of your choice. Else, you can download IE virtual machines for virtualbox using `curl -s https://raw.githubusercontent.com/xdissent/ievms/master/ievms.sh | env IEVMS_VERSIONS="9" bash`. 
4. Open the PR.
5. Notify and let people self assign to the PR and review.
6. Merge the PR if it gets approved.
7. Bump the version accordingly on the `package.json`. You can use [npm version](https://docs.npmjs.com/cli/version).
8. Push to master and then also push a tag with your version: `git --tag vX.Y.Z` and `git push origin vX.Y.Z`.