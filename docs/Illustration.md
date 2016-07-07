# Illustration

Illustration refers to any embedded SVG illustration. They can be found in the `ui-illustrations` repo, but the styling of them is done directly in CSS.

___

- [Big](#Illustration/big)
- [Tiny](#Illustration/tiny)
- [Button](#Illustration/button)
  - [default](#Illustration/button/default)
  - [gray](#Illustration/button/gray)
  - [inverse](#Illustration/button/inverse)
- [Loader](#Illustration/loader)

<a name="Illustration/big"></a>
## Big

```html
<svg
	class="cui__illustration big"
	viewBox="0 0 100 100">
  <g
		class="cui__illustration__fill"
		transform="translate(24.000000, 20.000000)">
    <path d="M37.8369,27.6611 L20.3199,45.3481 L13.2359,38.6241 C12.8359,38.2441 12.2039,38.2621 11.8219,38.6611 C11.4419,39.0611 11.4589,39.6941 11.8589,40.0751 L20.3629,48.1471 L39.2589,29.0691 C39.6479,28.6771 39.6439,28.0431 39.2519,27.6541 C38.8579,27.2661 38.2269,27.2691 37.8369,27.6611"></path>
    <path d="M50,53 C50,55.757 47.757,58 45,58 L7,58 C4.243,58 2,55.757 2,53 L2,15 C2,12.243 4.243,10 7,10 L13,10 L13,20 L39,20 L39,10 L45,10 C47.757,10 50,12.243 50,15 L50,53 Z M17,10 L18,10 L34,10 L35,10 L37,10 L37,18 L15,18 L15,10 L17,10 Z M26,2 C29.521,2 32.442,4.612 32.929,8 L19.071,8 C19.558,4.612 22.479,2 26,2 L26,2 Z M45,8 L39,8 L34.941,8 C34.442,3.507 30.625,0 26,0 C21.375,0 17.558,3.507 17.059,8 L13,8 L7,8 C3.141,8 0,11.141 0,15 L0,53 C0,56.859 3.141,60 7,60 L45,60 C48.859,60 52,56.859 52,53 L52,15 C52,11.141 48.859,8 45,8 L45,8 Z"></path>
  </g>
</svg>

<svg
	class="cui__illustration big gray"
	viewBox="0 0 100 100">
  <g
		class="cui__illustration__fill"
		transform="translate(24.000000, 20.000000)">
    <path d="M37.8369,27.6611 L20.3199,45.3481 L13.2359,38.6241 C12.8359,38.2441 12.2039,38.2621 11.8219,38.6611 C11.4419,39.0611 11.4589,39.6941 11.8589,40.0751 L20.3629,48.1471 L39.2589,29.0691 C39.6479,28.6771 39.6439,28.0431 39.2519,27.6541 C38.8579,27.2661 38.2269,27.2691 37.8369,27.6611"></path>
    <path d="M50,53 C50,55.757 47.757,58 45,58 L7,58 C4.243,58 2,55.757 2,53 L2,15 C2,12.243 4.243,10 7,10 L13,10 L13,20 L39,20 L39,10 L45,10 C47.757,10 50,12.243 50,15 L50,53 Z M17,10 L18,10 L34,10 L35,10 L37,10 L37,18 L15,18 L15,10 L17,10 Z M26,2 C29.521,2 32.442,4.612 32.929,8 L19.071,8 C19.558,4.612 22.479,2 26,2 L26,2 Z M45,8 L39,8 L34.941,8 C34.442,3.507 30.625,0 26,0 C21.375,0 17.558,3.507 17.059,8 L13,8 L7,8 C3.141,8 0,11.141 0,15 L0,53 C0,56.859 3.141,60 7,60 L45,60 C48.859,60 52,56.859 52,53 L52,15 C52,11.141 48.859,8 45,8 L45,8 Z"></path>
  </g>
</svg>

<svg
	class="cui__illustration big error"
	viewBox="0 0 100 100">
  <g
		class="cui__illustration__fill"
		transform="translate(24.000000, 20.000000)">
    <path d="M37.8369,27.6611 L20.3199,45.3481 L13.2359,38.6241 C12.8359,38.2441 12.2039,38.2621 11.8219,38.6611 C11.4419,39.0611 11.4589,39.6941 11.8589,40.0751 L20.3629,48.1471 L39.2589,29.0691 C39.6479,28.6771 39.6439,28.0431 39.2519,27.6541 C38.8579,27.2661 38.2269,27.2691 37.8369,27.6611"></path>
    <path d="M50,53 C50,55.757 47.757,58 45,58 L7,58 C4.243,58 2,55.757 2,53 L2,15 C2,12.243 4.243,10 7,10 L13,10 L13,20 L39,20 L39,10 L45,10 C47.757,10 50,12.243 50,15 L50,53 Z M17,10 L18,10 L34,10 L35,10 L37,10 L37,18 L15,18 L15,10 L17,10 Z M26,2 C29.521,2 32.442,4.612 32.929,8 L19.071,8 C19.558,4.612 22.479,2 26,2 L26,2 Z M45,8 L39,8 L34.941,8 C34.442,3.507 30.625,0 26,0 C21.375,0 17.558,3.507 17.059,8 L13,8 L7,8 C3.141,8 0,11.141 0,15 L0,53 C0,56.859 3.141,60 7,60 L45,60 C48.859,60 52,56.859 52,53 L52,15 C52,11.141 48.859,8 45,8 L45,8 Z"></path>
  </g>
</svg>

<svg
	class="cui__illustration big success"
	viewBox="0 0 100 100">
  <g
		class="cui__illustration__fill"
		transform="translate(24.000000, 20.000000)">
    <path d="M37.8369,27.6611 L20.3199,45.3481 L13.2359,38.6241 C12.8359,38.2441 12.2039,38.2621 11.8219,38.6611 C11.4419,39.0611 11.4589,39.6941 11.8589,40.0751 L20.3629,48.1471 L39.2589,29.0691 C39.6479,28.6771 39.6439,28.0431 39.2519,27.6541 C38.8579,27.2661 38.2269,27.2691 37.8369,27.6611"></path>
    <path d="M50,53 C50,55.757 47.757,58 45,58 L7,58 C4.243,58 2,55.757 2,53 L2,15 C2,12.243 4.243,10 7,10 L13,10 L13,20 L39,20 L39,10 L45,10 C47.757,10 50,12.243 50,15 L50,53 Z M17,10 L18,10 L34,10 L35,10 L37,10 L37,18 L15,18 L15,10 L17,10 Z M26,2 C29.521,2 32.442,4.612 32.929,8 L19.071,8 C19.558,4.612 22.479,2 26,2 L26,2 Z M45,8 L39,8 L34.941,8 C34.442,3.507 30.625,0 26,0 C21.375,0 17.558,3.507 17.059,8 L13,8 L7,8 C3.141,8 0,11.141 0,15 L0,53 C0,56.859 3.141,60 7,60 L45,60 C48.859,60 52,56.859 52,53 L52,15 C52,11.141 48.859,8 45,8 L45,8 Z"></path>
  </g>
</svg>

<svg
	class="cui__illustration big warning"
	viewBox="0 0 100 100">
  <g
		class="cui__illustration__fill"
		transform="translate(24.000000, 20.000000)">
    <path d="M37.8369,27.6611 L20.3199,45.3481 L13.2359,38.6241 C12.8359,38.2441 12.2039,38.2621 11.8219,38.6611 C11.4419,39.0611 11.4589,39.6941 11.8589,40.0751 L20.3629,48.1471 L39.2589,29.0691 C39.6479,28.6771 39.6439,28.0431 39.2519,27.6541 C38.8579,27.2661 38.2269,27.2691 37.8369,27.6611"></path>
    <path d="M50,53 C50,55.757 47.757,58 45,58 L7,58 C4.243,58 2,55.757 2,53 L2,15 C2,12.243 4.243,10 7,10 L13,10 L13,20 L39,20 L39,10 L45,10 C47.757,10 50,12.243 50,15 L50,53 Z M17,10 L18,10 L34,10 L35,10 L37,10 L37,18 L15,18 L15,10 L17,10 Z M26,2 C29.521,2 32.442,4.612 32.929,8 L19.071,8 C19.558,4.612 22.479,2 26,2 L26,2 Z M45,8 L39,8 L34.941,8 C34.442,3.507 30.625,0 26,0 C21.375,0 17.558,3.507 17.059,8 L13,8 L7,8 C3.141,8 0,11.141 0,15 L0,53 C0,56.859 3.141,60 7,60 L45,60 C48.859,60 52,56.859 52,53 L52,15 C52,11.141 48.859,8 45,8 L45,8 Z"></path>
  </g>
</svg>

<svg
	class="cui__illustration big black"
	viewBox="0 0 100 100">
  <g
		class="cui__illustration__fill"
		transform="translate(24.000000, 20.000000)">
    <path d="M37.8369,27.6611 L20.3199,45.3481 L13.2359,38.6241 C12.8359,38.2441 12.2039,38.2621 11.8219,38.6611 C11.4419,39.0611 11.4589,39.6941 11.8589,40.0751 L20.3629,48.1471 L39.2589,29.0691 C39.6479,28.6771 39.6439,28.0431 39.2519,27.6541 C38.8579,27.2661 38.2269,27.2691 37.8369,27.6611"></path>
    <path d="M50,53 C50,55.757 47.757,58 45,58 L7,58 C4.243,58 2,55.757 2,53 L2,15 C2,12.243 4.243,10 7,10 L13,10 L13,20 L39,20 L39,10 L45,10 C47.757,10 50,12.243 50,15 L50,53 Z M17,10 L18,10 L34,10 L35,10 L37,10 L37,18 L15,18 L15,10 L17,10 Z M26,2 C29.521,2 32.442,4.612 32.929,8 L19.071,8 C19.558,4.612 22.479,2 26,2 L26,2 Z M45,8 L39,8 L34.941,8 C34.442,3.507 30.625,0 26,0 C21.375,0 17.558,3.507 17.059,8 L13,8 L7,8 C3.141,8 0,11.141 0,15 L0,53 C0,56.859 3.141,60 7,60 L45,60 C48.859,60 52,56.859 52,53 L52,15 C52,11.141 48.859,8 45,8 L45,8 Z"></path>
  </g>
</svg>

<div class="cui__block blue">
	<svg
		class="cui__illustration big inverse"
		width="100px"
		height="100px"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg">
	  <g
			class="cui__illustration__fill"
			transform="translate(24.000000, 20.000000)">
	    <path d="M37.8369,27.6611 L20.3199,45.3481 L13.2359,38.6241 C12.8359,38.2441 12.2039,38.2621 11.8219,38.6611 C11.4419,39.0611 11.4589,39.6941 11.8589,40.0751 L20.3629,48.1471 L39.2589,29.0691 C39.6479,28.6771 39.6439,28.0431 39.2519,27.6541 C38.8579,27.2661 38.2269,27.2691 37.8369,27.6611"></path>
	    <path d="M50,53 C50,55.757 47.757,58 45,58 L7,58 C4.243,58 2,55.757 2,53 L2,15 C2,12.243 4.243,10 7,10 L13,10 L13,20 L39,20 L39,10 L45,10 C47.757,10 50,12.243 50,15 L50,53 Z M17,10 L18,10 L34,10 L35,10 L37,10 L37,18 L15,18 L15,10 L17,10 Z M26,2 C29.521,2 32.442,4.612 32.929,8 L19.071,8 C19.558,4.612 22.479,2 26,2 L26,2 Z M45,8 L39,8 L34.941,8 C34.442,3.507 30.625,0 26,0 C21.375,0 17.558,3.507 17.059,8 L13,8 L7,8 C3.141,8 0,11.141 0,15 L0,53 C0,56.859 3.141,60 7,60 L45,60 C48.859,60 52,56.859 52,53 L52,15 C52,11.141 48.859,8 45,8 L45,8 Z"></path>
	  </g>
	</svg>
</div>
```

<a name="Illustration/tiny"></a>
## Tiny

```html
<svg
  class='cui__illustration tiny'
  viewBox='0 0 21 21'>
  <path
    class='cui__illustration__stroke'
    d='M6.5,9.3l4,4l4,-4'
    strokeLinecap='round' />
</svg>

<svg
  class='cui__illustration tiny gray'
  viewBox='0 0 21 21'>
  <path
    class='cui__illustration__stroke'
    d='M6.5,9.3l4,4l4,-4'
    strokeLinecap='round' />
</svg>

<svg
  class='cui__illustration tiny error'
  viewBox='0 0 21 21'>
  <path
    class='cui__illustration__stroke'
    d='M6.5,9.3l4,4l4,-4'
    strokeLinecap='round' />
</svg>

<svg
  class='cui__illustration tiny success'
  viewBox='0 0 21 21'>
  <path
    class='cui__illustration__stroke'
    d='M6.5,9.3l4,4l4,-4'
    strokeLinecap='round' />
</svg>

<svg
  class='cui__illustration tiny warning'
  viewBox='0 0 21 21'>
  <path
    class='cui__illustration__stroke'
    d='M6.5,9.3l4,4l4,-4'
    strokeLinecap='round' />
</svg>

<svg
  class='cui__illustration tiny black'
  viewBox='0 0 21 21'>
  <path
    class='cui__illustration__stroke'
    d='M6.5,9.3l4,4l4,-4'
    strokeLinecap='round' />
</svg>

<div class='cui__block blue'>
  <svg
    class='cui__illustration tiny inverse'
    viewBox='0 0 21 21'>
    <path
      class='cui__illustration__stroke'
      d='M6.5,9.3l4,4l4,-4'
      strokeLinecap='round' />
  </svg>
</div>
```

<a name="Illustration/button"></a>
## Button

<a name="Illustration/button/default"></a>
### Default (blue)

```html
<svg
    class="cui__illustration button"
    viewBox="0 0 20 20">
    <path class="cui__illustration__fill" d="M4.70710678,16.7071068 L16.7071068,4.70710678 C17.0976311,4.31658249 17.0976311,3.68341751 16.7071068,3.29289322 C16.3165825,2.90236893 15.6834175,2.90236893 15.2928932,3.29289322 L3.29289322,15.2928932 C2.90236893,15.6834175 2.90236893,16.3165825 3.29289322,16.7071068 C3.68341751,17.0976311 4.31658249,17.0976311 4.70710678,16.7071068 L4.70710678,16.7071068 Z" id="line"></path>
    <path class="cui__illustration__fill" d="M16.7071068,15.2928932 L4.70710678,3.29289322 C4.31658249,2.90236893 3.68341751,2.90236893 3.29289322,3.29289322 C2.90236893,3.68341751 2.90236893,4.31658249 3.29289322,4.70710678 L15.2928932,16.7071068 C15.6834175,17.0976311 16.3165825,17.0976311 16.7071068,16.7071068 C17.0976311,16.3165825 17.0976311,15.6834175 16.7071068,15.2928932 L16.7071068,15.2928932 Z" id="line"></path>
</svg>
```

<a name="Illustration/button/gray"></a>
### Gray

```html
<svg
    class="cui__illustration button gray"
    viewBox="0 0 20 20">
    <path class="cui__illustration__fill" d="M4.70710678,16.7071068 L16.7071068,4.70710678 C17.0976311,4.31658249 17.0976311,3.68341751 16.7071068,3.29289322 C16.3165825,2.90236893 15.6834175,2.90236893 15.2928932,3.29289322 L3.29289322,15.2928932 C2.90236893,15.6834175 2.90236893,16.3165825 3.29289322,16.7071068 C3.68341751,17.0976311 4.31658249,17.0976311 4.70710678,16.7071068 L4.70710678,16.7071068 Z" id="line"></path>
    <path class="cui__illustration__fill" d="M16.7071068,15.2928932 L4.70710678,3.29289322 C4.31658249,2.90236893 3.68341751,2.90236893 3.29289322,3.29289322 C2.90236893,3.68341751 2.90236893,4.31658249 3.29289322,4.70710678 L15.2928932,16.7071068 C15.6834175,17.0976311 16.3165825,17.0976311 16.7071068,16.7071068 C17.0976311,16.3165825 17.0976311,15.6834175 16.7071068,15.2928932 L16.7071068,15.2928932 Z" id="line"></path>
</svg>
```

<a name="Illustration/button/inverse"></a>
### Inverse

```html
<div class="cui__block blue">
	<p class="cui__paragraph--primary" style="padding: 20px;">
    <svg
        class="cui__illustration button inverse"
        viewBox="0 0 20 20">
        <path class="cui__illustration__fill" d="M4.70710678,16.7071068 L16.7071068,4.70710678 C17.0976311,4.31658249 17.0976311,3.68341751 16.7071068,3.29289322 C16.3165825,2.90236893 15.6834175,2.90236893 15.2928932,3.29289322 L3.29289322,15.2928932 C2.90236893,15.6834175 2.90236893,16.3165825 3.29289322,16.7071068 C3.68341751,17.0976311 4.31658249,17.0976311 4.70710678,16.7071068 L4.70710678,16.7071068 Z" id="line"></path>
        <path class="cui__illustration__fill" d="M16.7071068,15.2928932 L4.70710678,3.29289322 C4.31658249,2.90236893 3.68341751,2.90236893 3.29289322,3.29289322 C2.90236893,3.68341751 2.90236893,4.31658249 3.29289322,4.70710678 L15.2928932,16.7071068 C15.6834175,17.0976311 16.3165825,17.0976311 16.7071068,16.7071068 C17.0976311,16.3165825 17.0976311,15.6834175 16.7071068,15.2928932 L16.7071068,15.2928932 Z" id="line"></path>
    </svg>
	</p>
</div>
```

<a name="Illustration/loader"></a>
## Loader

Important note: if you have more than one loader, by mindful that the `id` of the `linearGradient` needs to be unique in whole HTML document, since the `linearGradient`s with the same id inside different `svg` tags will override each other. In the following example, if the ids were the same, the loader will have the same color.

```html
<svg
  width="20"
  height="20"
  class="cui__illustration__loader"
  viewBox="-1 -1 22 22">
  <defs>
    <linearGradient id="gradient-0" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(0,116,200, 0)"></stop>
      <stop offset="100%" stop-color="rgba(0,116,200, 0.2)"></stop>
    </linearGradient>
    <linearGradient
      id="gradient-1"
      gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(0,116,200, 0.2)"></stop>
      <stop offset="100%" stop-color="rgba(0,116,200, 0.4)"></stop>
    </linearGradient>
    <linearGradient id="gradient-2" gradientUnits="objectBoundingBox" x1="1" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="rgba(0,116,200, 0.4)"></stop>
      <stop offset="100%" stop-color="rgba(0,116,200, 0.6)"></stop>
    </linearGradient>
    <linearGradient id="gradient-3" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="rgba(0,116,200, 0.6)"></stop>
      <stop offset="100%" stop-color="rgba(0,116,200, 0.8)"></stop></linearGradient>
    <linearGradient id="gradient-4" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="rgba(0,116,200, 0.8)"></stop>
      <stop offset="100%" stop-color="rgba(0,116,200, 1)"></stop>
    </linearGradient>
    <linearGradient id="gradient-5" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(0,116,200, 1)"></stop>
      <stop offset="100%" stop-color="rgba(0,116,200, 1.2)"></stop>
    </linearGradient>
  </defs>

  <g fill="none" stroke-width="2" transform="translate(10,10)">
    <path d="M 8.66,-5 A 10,10 0 0,1 8.66,5" stroke="url(#gradient-0)"></path>
    <path d="M 8.66,5 A 10,10 0 0,1 0,10" stroke="url(#gradient-1)"></path>
    <path d="M 0,10 A 10,10 0 0,1 -8.66,5" stroke="url(#gradient-2)"></path>
    <path d="M -8.66,5 A 10,10 0 0,1 -8.66,-5" stroke="url(#gradient-3)"></path>
    <path d="M -8.66,-5 A 10,10 0 0,1 0,-10" stroke="url(#gradient-4)"></path>
    <path d="M 0,-10 A 10,10 0 0,1 8.66,-5" stroke="url(#gradient-5)" stroke-linecap="round"></path>
  </g>
</svg>

<div class="cui__block blue">
  <svg
    width="20"
    height="20"
    class="cui__illustration__loader"
    viewBox="-1 -1 22 22">
    <defs>
      <linearGradient id="gradient-white-0" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(255,255,255, 0)"></stop>
        <stop offset="100%" stop-color="rgba(255,255,255, 0.2)"></stop>
      </linearGradient>
      <linearGradient
        id="gradient-white-1"
        gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(255,255,255, 0.2)"></stop>
        <stop offset="100%" stop-color="rgba(255,255,255, 0.4)"></stop>
      </linearGradient>
      <linearGradient id="gradient-white-2" gradientUnits="objectBoundingBox" x1="1" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="rgba(255,255,255, 0.4)"></stop>
        <stop offset="100%" stop-color="rgba(255,255,255, 0.6)"></stop>
      </linearGradient>
      <linearGradient id="gradient-white-3" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="rgba(255,255,255, 0.6)"></stop>
        <stop offset="100%" stop-color="rgba(255,255,255, 0.8)"></stop></linearGradient>
      <linearGradient id="gradient-white-4" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stop-color="rgba(255,255,255, 0.8)"></stop>
        <stop offset="100%" stop-color="rgba(255,255,255, 1)"></stop>
      </linearGradient>
      <linearGradient id="gradient-white-5" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="rgba(255,255,255, 1)"></stop>
        <stop offset="100%" stop-color="rgba(255,255,255, 1.2)"></stop>
      </linearGradient>
    </defs>

    <g fill="none" stroke-width="2" transform="translate(10,10)">
      <path d="M 8.66,-5 A 10,10 0 0,1 8.66,5" stroke="url(#gradient-white-0)"></path>
      <path d="M 8.66,5 A 10,10 0 0,1 0,10" stroke="url(#gradient-white-1)"></path>
      <path d="M 0,10 A 10,10 0 0,1 -8.66,5" stroke="url(#gradient-white-2)"></path>
      <path d="M -8.66,5 A 10,10 0 0,1 -8.66,-5" stroke="url(#gradient-white-3)"></path>
      <path d="M -8.66,-5 A 10,10 0 0,1 0,-10" stroke="url(#gradient-white-4)"></path>
      <path d="M 0,-10 A 10,10 0 0,1 8.66,-5" stroke="url(#gradient-white-5)" stroke-linecap="round"></path>
    </g>
  </svg>
</div>
```
