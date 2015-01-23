# Change Log

All notable changes to this project will be documented in this file.

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
