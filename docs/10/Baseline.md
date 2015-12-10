# Baseline

The baseline is a root component that serves as the grid system for the Toolkit.
In practical terms, it means that for using the Toolkit you need to set the class
`cui__baseline` in the `<html>` tag. It will set the proper font rendering style
for webkit and set the grid to `5px`. All the sizes in the Toolkit are written in
`rem`s assuming that `5px` grid.

The grid system of the Toolkit aims at having all borders and text baselines matching
the grid. Some exceptions are made, for example for the floating labels in the Fields,
but these are taken as corner cases.

## Baseline visual grid

To help with the positioning of elements in the vertical grid (especially alignment
of text to the baseline) a class `cui__baseline__grid` is supported that adds the
5 pixel grid as a background of the element. While developing, it can be helpful to
keep that class in the `<body>` tag to ensure that items do not get out of the grid.

## Content wrapper

Horizontal grids are not covered by the Toolkit, but a convenient responsive wrapper
`cui__baseline__content--main` is provided that will add some paddings on mobile
layouts and will stop growing and keep itself centered in resolutions above `700px`.
