# Change Log

All notable changes to this project will be documented in this file. http://keepachangelog.com/

## 1.6.2

### Updated

- `cui__icon`s now have `pointer-events: none` so that taps and clicks will pass through them.

## 1.6.1

### Removed

- Removes white background of `cui__main-header`


## 1.6.0

### Added

- Bubble atom (+ snippet): `cui__bubble`
- Bubble atom pointing upwards: `cui__bubble--below`
- Small loader: `cui__loader--small`
- Small loader inside the field: `cui__editor-wrapper__loader`

## 1.5.0

### Added

- Support for `:focus` on the checkbox.
- Inline block tooltip modifier for adding tooltip next to text.
- Snippets for the new tooltip atom.

### Changed

- The checkbox is now a configurable mixin as well as a class.
- The `make install` now refreshes the whole `node_modules` folder. This is to ensure that the built version of `libsass` is compatible with your current version of Node.
- Consequently, there is no need to use only the `0.10.35` version of Node.js
- The tooltip inside the field is now a regular `cui__tooltip` atom.

### Fixed

- Visualization of checkbox which was getting border-box

### Removed

- Old tooltip atom
- `img/molecules/field/field.tooltip.svg`
- `img/molecules/field/field.tooltip.png`

## 1.4.2

### Changed

- Fake placeholders are only enabled for IEs now. Android Stock support has been removed due to faulty behavior.

### Added

- `UIToolkit.setupFakePlaceholders` which allows consumers to setup the fake placeholders manually without browser version checks.

## 1.4.1

### Changed

- Field tooltips focus on field when being clicked.

## 1.4.0

### Added

- Focus state on select boxes now supported
- Inlined tooltip for fields
- Grouped fields with line separators so that related fields can be presented conjoined with each other
- Snippets to showcase the inline tooltip and grouped fields
- Disabled fields background image (inlined in the CSS as `data:` URI)
- Snippet to showcase already supported `.cui__loader` atom
- `img/molecules/field/field.tooltip.svg` and `img/molecules/field/field.tooltip.png`

### Changed

- Make select box carets lighter and darken on hover/focus
- Reorganized file structure in the `img` folder to more closely map the `src` folder structure
- SCSS properties inside selectors should now follow alphabetic order
- 1x1 transparent and semitransparent background PNGs are now inlined as `data:` URIs
- Order of `select` and `field` imports in the `build/ui-toolkit.scss` and `build/ui-toolkit-no-settings.scss` files to allow field styles to override select styles

### Fixed

- Better alignment for select boxes caret
- IE 8 select styles
- Presentation container tolerates floated elements

### Removed

- Unused `img/molecules/select` images
- Select boxes:
  - Removed gradient background
  - Removed separation line between text and caret
- Special placeholder styles for an obsolete version of Mozilla Firefox
- Unnecessary `@2x` PNGs for images that already have an SVG version to be used in HDPI devices

## 1.3.5

### Added

- Field warning tooltips. Works exactly as error tooltips.

## 1.3.4

### Added

- `img/background/input-disabled-background-1x1.png`
- Disabled snippet for input fields
- Disabled field styles

### Changed

- Inlined 1x1 pngs as base64 encoded `data:` URIs in the styles
- Indent convention in JavaScript (4 spaces now)

### Fixed

- Trident browser check bug

## 1.3.3

### Fixed

- An IE11 bug where the browser detection was not working
- An Android Stock browser bug where the browser detection was not working

## 1.3.2

> bugfix/gbl-17904-state-field-misaligned-when-displaying

### Fixed

- An IE10 bug where the dropdown selector carets were not shown
- An IE11 bug where the dropdown selectors were not selectable
- Field error inconsistensies

## 1.3.1

> feature/gbl-17638-add-cc-discover

### Added

- `img/logos/svg/discover.svg`, `img/logos/svg-tiny-optimized/discover.svg`
- `img/logos/png/22px-height/discover.png`, `img/logos/png/22px-height/discover@2x.png`
- Card logo markup to `snippets/logos--cards.html`
- Card logo style to `src/atoms/logos.scss`
- Card logos path variables to `src/settings.scss`

## 1.3.0

> tech/credit-card-logos

### Added

- `img/logos/svg`, `img/logos/svg-tiny-optimized` with SVG logos for several credit cards
- `img/logos/png/22px-height`, built from the SVGs
- `snippets/logos--cards.html` with an example for the new logos
- The `gulp images` task for building PNGs and PNGs 2x (retina) from the source SVGs
- Settings for the credit cards
- `src/atoms/logos.scss` with classes for the credit card logos

## 1.2.0

> feature/gbl-17277-move-ie-placeholder-to-the-ui-toolkit

### Added

- `ui-toolkit.js` for supporting fake placeholders in IE and Android.
- `builds/ui-toolkit-no-settings.scss` for SASS consumption.
- Fields with icons

### Moved

- `toolkit.css` -> `ui-toolkit.css`
- `src/toolkit.scss` -> `builds/ui-toolkit.scss`
- `src/vendor/bourbon` -> `vendor/bourbon`
- …among other file name changes and folder structure update

### Removed

- `src/_bootstrap.scss`
