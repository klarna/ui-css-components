# Button

Buttons use the `cui__button` block, and only `button` tags should be used.

- [Overview](#Button/overview)
- [Usage](#Button/usage)
	- [Importance](#Button/usage/importance)
	- [Size](#Button/usage/size)
- [Primary](#Button/primary)
	- [loading](#Button/primary/loading)
	- [disabled](#Button/primary/disabled)
	- [small](#Button/primary/small)
	- [small & disabled](#Button/primary/small/disabled)
	- [big](#Button/primary/big)
	- [big & loading](#Button/primary/big/loading)
	- [big & disabled](#Button/primary/big/disabled)
	- [with price](#Button/primary/price)
	- [with price big](#Button/primary/price/big)
	- [dynamic styling](#Button/primary/dynamic-styling)
- [Secondary](#Button/secondary)
	- [loading](#Button/secondary/loading)
	- [disabled](#Button/secondary/disabled)
	- [small](#Button/secondary/small)
	- [small & disabled](#Button/secondary/small/disabled)
	- [big](#Button/secondary/big)
	- [big & loading](#Button/secondary/big/loading)
	- [big & disabled](#Button/secondary/big/disabled)
	- [with price](#Button/secondary/price)
	- [with price big](#Button/secondary/price/big)
	- [dynamic styling](#Button/secondary/dynamic-styling)

<a name="Button/overview"></a>
## Overview

Here's a showcase of all buttons. Pass your mouse over and click the elements to see the hover and active states.

<table cellspacing="0" cellpadding="0">
	<tr>
		<td>
			<button class="cui__button--primary small">
				Small
			</button>
		</td>
		<td>
			<button class="cui__button--secondary small">
				Small
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary small is-disabled">
				Small
			</button>
		</td>
		<td>
			<button class="cui__button--secondary small is-disabled">
				Small
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary">
				Primary
			</button>
		</td>
		<td>
			<button class="cui__button--secondary">
				Secondary
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary is-disabled">
				Primary
			</button>
		</td>
		<td>
			<button class="cui__button--secondary is-disabled">
				Secondary
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary small is-loading">
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
			</button>
		</td>
		<td>
			<button class="cui__button--secondary small is-loading">
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
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary is-loading">
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
			</button>
		</td>
		<td>
			<button class="cui__button--secondary is-loading">
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
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary big">
				Primary
			</button>
		</td>
		<td>
			<button class="cui__button--secondary big">
				Secondary
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary big is-disabled">
				Primary
			</button>
		</td>
		<td>
			<button class="cui__button--secondary big is-disabled">
				Secondary
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary big is-loading">
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
			</button>
		</td>
		<td>
			<button class="cui__button--secondary big is-loading">
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
			</button>
		</td>
	</tr>
</table>

<a name="Button/usage/importance"></a>
## Importance

Buttons are divided by importance, therefore we have primary and secondary buttons.

You should always use the primary button for your main actions, actions that will make the user move forward in your flow, like "buy", "save", "continue" or "confirm".

Secondary buttons should be used for auxiliary or negative actions, like "cancel" or "skip".

When you have both actions, the secondary button should be on the left of the primary button.

<div class="example-block" style="text-align: center;">
	<div class="example">
		<button class="cui__button--secondary">
			Cancel
		</button>
		<button class="cui__button--primary">
			Save
		</button>
	</div>
</div>

<a name="Button/usage/size"></a>
## Size

Buttons have 3 different sizes. Big buttons should be used for calls to action, specially when they are the main action on a page. Small buttons are more appropriate for non-final actions, when you have many steps, or when you need more page space.

<div class="example-block" style="text-align: center;">
	<div class="example">
		<button class="cui__button--primary big">
			Buy now!
		</button>
		<button class="cui__button--primary">
			Finish
		</button>
		<button class="cui__button--primary small">
			Continue
		</button>
	</div>
</div>

<a name="Button/primary"></a>
## Primary

This should be used for your main actions.

```html
<button class="cui__button--primary">
  Primary
</button>
```

<a name="Button/primary/loading"></a>
### Loading

Every time a user submits a form, you should change the current submit button to be loading.

```html
<button class="cui__button--primary is-loading">
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
</button>
```

<a name="Button/primary/disabled"></a>
### Disabled

```html
<button class="cui__button--primary is-disabled">
  Primary disabled
</button>
```

<a name="Button/primary/small"></a>
### Small

```html
<button class="cui__button--primary small">
  Primary small
</button>
```

<a name="Button/primary/small/disabled"></a>
### Small & disabled

```html
<button class="cui__button--primary small is-disabled">
  Primary small disabled
</button>
```

<a name="Button/primary/big"></a>
### Big

```html
<button class="cui__button--primary big">
  Primary big
</button>
```

<a name="Button/primary/big/loading"></a>
### Big & loading

```html
<button class="cui__button--primary big is-loading">
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
</button>
```

<a name="Button/primary/big/disabled"></a>
### Big & disabled

```html
<button class="cui__button--primary big is-disabled">
  Primary big disabled
</button>
```

<a name="Button/primary/price"></a>
### With price

```html
<button class="cui__button--primary has-price">
  Pay now
  <span class="cui__button__price">
    $1.20
  </span>
</button>
```

<a name="Button/primary/price/big"></a>
### With price big

```html
<button class="cui__button--primary big has-price">
  Pay now
  <span class="cui__button__price">
    $1.20
  </span>
</button>
```

<a name="Button/primary/dynamic-styling"></a>
### Dynamic styling

Dynamic styling is the feature of allowing for override of the background and foreground colors. Not all styles overrides are supported: for Buttons, it's only background/border color and text color.

In primary buttons, the `dynamic-styling` class creates a darkened layer on top of the button for displaying on the hover and focus/active states, so that any color can have those states (as long as is not too dark). Given that the darkening is done with a layer on top, the text itself needs to live in a different layer above the darkened overlay. That's why it needs to be a wrapped in a class with a different style.

```html
<button
	class="cui__button--primary dynamic-styling"
	style="color: #F9FF3C; background-color: #3500C8; border-color: #3500C8;">
	<span class="cui__button__label">
	  Pay now
	</span>
</button>

<button
	class="cui__button--primary dynamic-styling is-disabled"
	style="color: #F9FF3C; background-color: #3500C8; border-color: #3500C8;">
	<span class="cui__button__label">
	  Pay now
	</span>
</button>

<button
	class="cui__button--primary dynamic-styling is-loading"
	style="background-color: #3500C8; border-color: #3500C8;">
	<svg
		width="20"
		height="20"
		class="cui__illustration__loader"
		viewBox="-1 -1 22 22">
		<defs>
			<linearGradient id="gradient-primary-dynamic-0" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="rgba(249,255,60, 0)"></stop>
				<stop offset="100%" stop-color="rgba(249,255,60, 0.2)"></stop>
			</linearGradient>
			<linearGradient
				id="gradient-primary-dynamic-1"
				gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="rgba(249,255,60, 0.2)"></stop>
				<stop offset="100%" stop-color="rgba(249,255,60, 0.4)"></stop>
			</linearGradient>
			<linearGradient id="gradient-primary-dynamic-2" gradientUnits="objectBoundingBox" x1="1" y1="1" x2="0" y2="0">
				<stop offset="0%" stop-color="rgba(249,255,60, 0.4)"></stop>
				<stop offset="100%" stop-color="rgba(249,255,60, 0.6)"></stop>
			</linearGradient>
			<linearGradient id="gradient-primary-dynamic-3" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="0" y2="0">
				<stop offset="0%" stop-color="rgba(249,255,60, 0.6)"></stop>
				<stop offset="100%" stop-color="rgba(249,255,60, 0.8)"></stop></linearGradient>
			<linearGradient id="gradient-primary-dynamic-4" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="1" y2="0">
				<stop offset="0%" stop-color="rgba(249,255,60, 0.8)"></stop>
				<stop offset="100%" stop-color="rgba(249,255,60, 1)"></stop>
			</linearGradient>
			<linearGradient id="gradient-primary-dynamic-5" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="rgba(249,255,60, 1)"></stop>
				<stop offset="100%" stop-color="rgba(249,255,60, 1.2)"></stop>
			</linearGradient>
		</defs>

		<g fill="none" stroke-width="2" transform="translate(10,10)">
			<path d="M 8.66,-5 A 10,10 0 0,1 8.66,5" stroke="url(#gradient-primary-dynamic-0)"></path>
			<path d="M 8.66,5 A 10,10 0 0,1 0,10" stroke="url(#gradient-primary-dynamic-1)"></path>
			<path d="M 0,10 A 10,10 0 0,1 -8.66,5" stroke="url(#gradient-primary-dynamic-2)"></path>
			<path d="M -8.66,5 A 10,10 0 0,1 -8.66,-5" stroke="url(#gradient-primary-dynamic-3)"></path>
			<path d="M -8.66,-5 A 10,10 0 0,1 0,-10" stroke="url(#gradient-primary-dynamic-4)"></path>
			<path d="M 0,-10 A 10,10 0 0,1 8.66,-5" stroke="url(#gradient-primary-dynamic-5)" stroke-linecap="round"></path>
		</g>
	</svg>
</button>
```

<a name="Button/secondary"></a>
## Secondary

This should be used for your secondary actions.

```html
<button class="cui__button--secondary">
  Secondary
</button>
```

<a name="Button/secondary/loading"></a>
### Loading

```html
<button class="cui__button--secondary is-loading">
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
</button>
```

<a name="Button/secondary/disabled"></a>
### Disabled

```html
<button class="cui__button--secondary is-disabled">
  Secondary disabled
</button>
```

<a name="Button/secondary/small"></a>
### Small

```html
<button class="cui__button--secondary small">
  Secondary small
</button>
```

<a name="Button/secondary/small/disabled"></a>
### Small & disabled

```html
<button class="cui__button--secondary small is-disabled">
  Secondary small disabled
</button>
```

<a name="Button/secondary/big"></a>
### Big

```html
<button class="cui__button--secondary big">
  Secondary big
</button>
```

<a name="Button/secondary/big/loading"></a>
### Big & loading

```html
<button class="cui__button--secondary big is-loading">
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
</button>
```

<a name="Button/secondary/big/disabled"></a>
### Big & disabled

```html
<button class="cui__button--secondary big is-disabled">
  Secondary big disabled
</button>
```

<a name="Button/secondary/price"></a>
### With price

```html
<button class="cui__button--secondary has-price">
  Pay now
  <span class="cui__button__price">
    $1.20
  </span>
</button>
```

<a name="Button/secondary/price/big"></a>
### With price big

```html
<button class="cui__button--secondary big has-price">
  Pay now
  <span class="cui__button__price">
    $1.20
  </span>
</button>
```

<a name="Button/secondary/dynamic-styling"></a>
### Dynamic styling

Dynamic styling is the feature of allowing for override of the background and foreground colors. Not all styles overrides are supported: for Buttons, it's only background/border color and text color.

In secondary buttons, the `dynamic-styling` class creates a white layer on top of the button for masking the background color and then showing it on the hover and focus/active states, so that any color can have those states (as long as is not too dark). Like in the primary button dynamic styling, the label needs to be on a separate element, but since the color of the label will change from the same as the background to the foreground color when getting hover and focus/active, there is the need for two versions of the label: one that has the background color and it's displayed by default, and another one that has the foreground color and it's invisible until the button is hovered/focus/activated.

```html
<button
	class="cui__button--secondary dynamic-styling"
	style="color: #3500C8; background-color: #3500C8; border-color: #3500C8;">
	<div class="cui__button__label">			
	  Pay now
		<span
			class="cui__button__label--alt"
			title="Pay now"
			style="color: #F9FF3C;">
		</span>
	</div>

</button>

<button
	class="cui__button--secondary dynamic-styling is-disabled"
	style="color: #3500C8; background-color: #3500C8; border-color: #3500C8;">
	<span class="cui__button__label">
	  Pay now
	</span>
</button>

<button
	class="cui__button--secondary dynamic-styling is-loading"
	style="color: #3500C8; border-color: #3500C8;">
	<svg
		width="20"
		height="20"
		class="cui__illustration__loader"
		viewBox="-1 -1 22 22">
		<defs>
			<linearGradient id="gradient-secondary-dynamic-0" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="rgba(53,0,200, 0)"></stop>
				<stop offset="100%" stop-color="rgba(53,0,200, 0.2)"></stop>
			</linearGradient>
			<linearGradient
				id="gradient-secondary-dynamic-1"
				gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="rgba(53,0,200, 0.2)"></stop>
				<stop offset="100%" stop-color="rgba(53,0,200, 0.4)"></stop>
			</linearGradient>
			<linearGradient id="gradient-secondary-dynamic-2" gradientUnits="objectBoundingBox" x1="1" y1="1" x2="0" y2="0">
				<stop offset="0%" stop-color="rgba(53,0,200, 0.4)"></stop>
				<stop offset="100%" stop-color="rgba(53,0,200, 0.6)"></stop>
			</linearGradient>
			<linearGradient id="gradient-secondary-dynamic-3" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="0" y2="0">
				<stop offset="0%" stop-color="rgba(53,0,200, 0.6)"></stop>
				<stop offset="100%" stop-color="rgba(53,0,200, 0.8)"></stop></linearGradient>
			<linearGradient id="gradient-secondary-dynamic-4" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="1" y2="0">
				<stop offset="0%" stop-color="rgba(53,0,200, 0.8)"></stop>
				<stop offset="100%" stop-color="rgba(53,0,200, 1)"></stop>
			</linearGradient>
			<linearGradient id="gradient-secondary-dynamic-5" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="rgba(53,0,200, 1)"></stop>
				<stop offset="100%" stop-color="rgba(53,0,200, 1.2)"></stop>
			</linearGradient>
		</defs>

		<g fill="none" stroke-width="2" transform="translate(10,10)">
			<path d="M 8.66,-5 A 10,10 0 0,1 8.66,5" stroke="url(#gradient-secondary-dynamic-0)"></path>
			<path d="M 8.66,5 A 10,10 0 0,1 0,10" stroke="url(#gradient-secondary-dynamic-1)"></path>
			<path d="M 0,10 A 10,10 0 0,1 -8.66,5" stroke="url(#gradient-secondary-dynamic-2)"></path>
			<path d="M -8.66,5 A 10,10 0 0,1 -8.66,-5" stroke="url(#gradient-secondary-dynamic-3)"></path>
			<path d="M -8.66,-5 A 10,10 0 0,1 0,-10" stroke="url(#gradient-secondary-dynamic-4)"></path>
			<path d="M 0,-10 A 10,10 0 0,1 8.66,-5" stroke="url(#gradient-secondary-dynamic-5)" stroke-linecap="round"></path>
		</g>
	</svg>
</button>
```
