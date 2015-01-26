KCO UI Toolkit
==============

UI Toolkit for the Klarna Checkout.

Installation
------------

You can install the KCO UI Toolkit via bower with:

```sh
bower install git+ssh://git@stash.internal.machines:7999/kcoc/ui-toolkit.git#v1.3.1
```

Please note that the commit-ish (everything after the `#`) should point to the version of the Toolkit that you want to use. The commit-ish can be a regular commit hash, the name of a branch or a tag: typically versions will be tagged, but while developing you might be interested in using branch names instead, or even commits if you want to be extra sure that the version you are requiring is the one you need.

Usage
-----

### Seeing the showroom and developing

Clone this repo and run:

```sh
nvm 0.10.31
make install
make dev
```

You can edit the SCSS files, the Jade file and the HTML snippets and they will be live reloaded for your convenience.

### CSS / SASS

There are two main strategies for integrating the UI Toolkit into your project. The simplest one is just using the compiled `ui-toolkit.css` file that comes in the bundle. If you installed it with bower on the default bower folder you should be able to include it with:

```html
<link rel="stylesheet" href="bower_components/ui-toolkit/ui-toolkit.css" />
```

If you do this, however, you are going to miss on all the SASS mixins and variables that the toolkit bundles, which includes the complete [Bourbon](http://bourbon.io/) 4.0.2 mixin library.

Alternatively, you can integrate directly the SASS files. To do that, you can either import `builds/ui-toolkit.scss` into your SASS or import only the mixins, atoms and molecules that you are interested in. If you select manually a subset of atoms and molecules, please bear in mind that you might need to provide defaults for some variables and you might also need to include mixins and Bourbon for the components to build properly.

#### Easiest way with SASS

The easiest way of getting started with the UI Toolkit on SASS is to copy the contents of `src/settings.scss` into your own settings file and then create a SASS file containing:

```scss
@import 'your-own-settings-file';
@import 'path/to/toolkit/builds/ui-toolkit-no-settings';
```

### JS

The UI Toolkit includes a JS library. Include that with:

```html
<script
  type="text/javascript"
  src="bower_components/ui-toolkit/ui-toolkit.js"></script>
```

Documentation for the JS library is patchy.

#### Fake placeholders for IE and Android

The UI Toolkit provides fake placeholders for the `field` component. You have to initialize them after rendering. For example:

```html
<div class="cui__field">
  <span class="cui__field__error-tooltip">
    Error
  </span>

  <div
    class="cui__editor-wrapper">
    <input
      type="text"
      class="cui__editor--text"
      placeholder="Please write your email address"
      value="" />
  </div>
</div>

<script type="text/javascript">
  var editor  = document.querySelector('.cui__editor--text');
  var wrapper = document.querySelector('.cui__editor-wrapper');

  UIToolkit.fakePlaceholders(editor, wrapper);
</script>
```
### SVG pipeline

For adding SVGs to the toolkit, the pipeline is:

#### 1. Get a source SVG from sketch

Sketch exports high quality SVG files. For the files to be usable in
production, they have to be optimized.

Some optimizations can be done manually and they do not affect the
quality of the image. You can strip:

- The XML version declaration
- The XML comments
- The tags: `title`, `desc`, `defs`
- All the `g`s that cancel each other (warning: if there is an attribute
  named `fill-rule` make sure some wrapper `g` has it)
- The `stroke`, `fill` and `stroke-width` attributes from the wrapper `g` tags
- The `id` attributes of everything
- The `sketch` namespaced attributes

Add that file in the corresponding /svg folder. No convention is defined
yet, so please ask if you have doubts.

#### 2. Build a low quality, optimized version

This is done manually so far. Copy paste the code of the manually
optimized high quality SVG into this site:
https://petercollingridge.appspot.com/svg-editor

Run the optimizations and download the end result. Add the optimized
file to the corresponding optimized folder.

#### 3. Get a PNG version with the images task

Gulp includes now a task for building PNG and retina PNG (2x) files from
SVG. Images saved in the current default location (`img/logos/svg`) will
be assumed to measure 22px in height and are going to be rasterized and
saved into `img/logos/png/22px-height`. Run `gulp images` to get this
images built.

If your images have a different height or lie in different folders, please create new gulp tasks with the corresponding settings.

Build
-----

```sh
nvm 0.10.31
make install
make build
```
