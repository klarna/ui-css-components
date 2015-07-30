KCO UI Toolkit
==============

UI Toolkit for the Klarna Checkout.

Installation
------------

> Note: Since version 3.0.0, SS Pika is no longer part of the UI Toolkit bundle, but it is still a dependency for the toolkit. Installing via bower will install SS Pika side by side with the toolkit: to use the font, remember to also add `bower_components/ss-pika/webfonts/ss-pika.css` in your HTML.
> Also, if you are consuming the toolkit via NPM, the dependency won't be there: in that case, the recommendation is to load the SS Pika CSS from some CDN.

You can install the KCO UI Toolkit via bower with:

```sh
bower install git+ssh://git@stash.internal.machines:7999/bow/ui-toolkit.git#v3.1.3
```

Please note that the commit-ish (everything after the `#`) should point to the version of the Toolkit that you want to use. The commit-ish can be a regular commit hash, the name of a branch or a tag: typically versions will be tagged, but while developing you might be interested in using branch names instead, or even commits if you want to be extra sure that the version you are requiring is the one you need.

Usage
-----

### Seeing the showroom and developing

[View the showroom for the master branch](https://nexus.internal.machines/content/sites/infra/ui-toolkit/master/)

A copy of the showroom is generated for every pushed commit, so if all you want to do is see or share the showroom for your branch, check out https://nexus.int.klarna.net/content/sites/infra/ui-toolkit/&lt;branch&gt;/ .

If you want to generate the showroom for yourself, clone this repo and run:

```sh
make install
make dev
```

You can edit the SCSS files, the Jade file and the HTML snippets and they will be live reloaded for your convenience.

> Note: The `make install` task will remove and reinstall `node_modules` each time since some dependencies have to be rebuilt for each different version of Node.js. This means that if you switch from, let's say, `node-0.10.31` to `node-0.11.26` you should run `make install` again.

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

If your SVG is smaller than 10 KB you can probably ignore this.

Copy paste the code of the manually optimized high quality SVG into this site:
https://petercollingridge.appspot.com/svg-editor

Run the optimizations and download the end result. Add the optimized
file to the corresponding optimized folder.

#### 3. Get a PNG version with the images task

Gulp includes now a task for building PNG files from SVG. Go to the `gulpfile.js` and make sure your images are in one of the directories to be built: or add your own gulp task for building PNG images in the directories you are using.

Build the PNGs and commit them alongside the SVGs.

Build
-----

```sh
make install
make build
```

Branching model
------------------
1. Create a descriptively named branch off of `master`.
2. Send a pull-request, and wait for approvals.
3. Bump the version number with the following guidelines in mind:  
  Versioning is done manually, as the last step before merging, therefore versions numbers should be determined as late as possible.  
  Follow these steps after your pull request is approved:
    * Come up with a version number. From [semver.org](http://semver.org/):
      > MAJOR version when you make incompatible API changes,
      >
      > MINOR version when you add functionality in a backwards-compatible manner, and
      >
      > PATCH version when you make backwards-compatible bug fixes

    * Add an entry to the `CHANGELOG.md` describing the changes that you are introducing. Use [keepachangelog.com](http://keepachangelog.com/) as a reference of what to write.
    * Update the version number in the following files:
      - `README.md`
      - `package.json`
5. Commit the version-bump with the version number as the commit message.
6. Merge your pull-request using Stash, making sure that "Delete branch" is checked.
7. In your development machine, checkout the `master` branch, `pull` the latest changes and run the `make tag` task. It will create the git tag with the version extracted from the `package.json` and then push the new tag to the repository. Finally, it will automatically inform the #front_end channel about the new version, with a link to the CHANGELOG diff.
  ```
