# Change Log

All notable changes to this project will be documented in this file.

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
