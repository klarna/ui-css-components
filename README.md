KCO UI Toolkit
==============

UI Toolkit for the Klarna Checkout.

Installation
------------

You can install the KCO UI Toolkit via bower with:

```sh
bower install git+ssh://git@stash.internal.machines:7999/kcoc/ui-toolkit.git#feature/gbl-16993-extract-the-ui-toolkit-into-it-s
```

Please note that the commit-ish (everything after the `#`) should point to the version of the Toolkit that you want to use. The commit-ish can be a regular commit hash, the name of a branch or a tag: typically versions will be tagged, but while developing you might be interested in using branch names instead, or even commits if you want to be extra sure that the version you are requiring is the one you need.

Usage
-----

There are two main strategies for integrating the UI Toolkit into your project. The simplest one is just using the compilated `toolkit.css` file that comes in the bundle. If you installed it with bower on the default bower folder you should be able to include it with:

```html
<link rel="stylesheet" href="bower_components/ui-toolkit/toolkit.css" />
```

If you do this, however, you are going to miss on all the SASS mixins and variables that the toolkit bundles, which includes the complete [Bourbon](http://bourbon.io/) 4.0.2 mixin library.

Alternatively, you can integrate directly the SASS files. To do that, you need to include three files on top of your main SASS file:

```scss
@import "bower_components/ui-toolkit/src/bootstrap";
@import "bower_components/ui-toolkit/src/settings";
@import "bower_components/ui-toolkit/src/all";
```

This will load the full UI Tookit with the default settings. The first inclusion is the bootstrap, which loads:
- Bourbon, that is included as a static dependency within the KCO UI Toolkit.
- UI Toolkit mixins

The second inclusion is the file that contains all the variable definitions that are used throughout the toolkit. This allows you to override settings by setting them before including the third file, `ui-toolkit/src/all`, which includes all the toolkit sources.

The third inclusion it the toolkit proper.

> Be aware that SASS simplifies the import path by searching for files starting with underscores, so the path shown in the `@import` can be misleading. The actual file that includes all the toolkit sources is called `_all.scss`

Development
-----------

Clone this repo and run:

```sh
nvm 0.10.31
make install
make dev
```

Build
-----

```sh
nvm 0.10.31
make install
make build
```
