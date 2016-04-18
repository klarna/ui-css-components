# Klarna UI CSS components v5.2.0

## Getting started

Welcome to the ui-css-components guide. The goals of this document are:

- To explain the usage of all components;
- To clarify the reasoning behind their implementation;
- To give you a clearer understanding of use cases for each component, so we
  achieve a better user experience;

___

Enjoy!

## Instructions

Press `G` on any screen in this showroom to trigger the grid. Everything should
be aligned with the grid.

## Requirements

The ui-css-components depends on Open Sans font. You'll probably want to
include it directly in your HTML, so you'll benefit from Google's CDN.

```
<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'
      rel='stylesheet'
      type='text/css'>
```

In the case you prefer to add it to your css, include it like this:

```
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700);
```

<p style="background:#ffc; padding: 30px;">
  Please note that if you're using SASS the default behaviour will be to
  download and append the font to your package, so you will not benefit from
  caching.
</p>

## Standards

The ui-css-components follow a loose version of [BEM](https://en.bem.info/). It
breaks it in it's usage of some modifiers (e.g. 'big').

## What is not there

The ui-css-components do not dictate how to build your layout. So things like
widths, margins between elements (although all texts follow a grid) and
responsiveness must be dealt in your project.

## License

See the [License](https://github.com/klarna/ui-css-components/blob/master/LICENSE) attached.
