KCO UI Toolkit
==============

UI Toolkit for the Klarna Checkout.

Installation
------------

You can install the KCO UI Toolkit via bower with:

```sh
bower install git+ssh://git@stash.internal.machines:7999/kcoc/ui-toolkit.git#v1.1.0
```

Please note that the commit-ish (everything after the `#`) should point to the version of the Toolkit that you want to use. The commit-ish can be a regular commit hash, the name of a branch or a tag: typically versions will be tagged, but while developing you might be interested in using branch names instead, or even commits if you want to be extra sure that the version you are requiring is the one you need.

Usage
-----

There are two main strategies for integrating the UI Toolkit into your project. The simplest one is just using the compiled `toolkit.css` file that comes in the bundle. If you installed it with bower on the default bower folder you should be able to include it with:

```html
<link rel="stylesheet" href="bower_components/ui-toolkit/toolkit.css" />
```

If you do this, however, you are going to miss on all the SASS mixins and variables that the toolkit bundles, which includes the complete [Bourbon](http://bourbon.io/) 4.0.2 mixin library.

Alternatively, you can integrate directly the SASS files. To do that, you can either import `builds/toolkit.scss` into your SASS or import only the mixins, atoms and molecules that you are interested in. If you select manually a subset of atoms and molecules, please bear in mind that you might need to provide defaults for some variables and you might also need to include mixins and Bourbon for the components to build properly.

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
