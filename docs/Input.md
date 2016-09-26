# Input

The input is a molecular element. It consists of a wrapper with the `cui__input` block, which should be added to a `div` tag, containing a `cui__input__label` added to a `label` tag and `cui__input__input` added to an `input` tag.

The reasons to use a label as a placeholder are 1) makes it easier to transition from the placeholder to the floarint label, because it's the same element 2) there's an issue that some browsers don't respect input padding 3) that's the standard way many libraries that have floating label components implement it, like [material-ui](http://material-ui.com/#/components/text-fields) and [polymer](https://elements.polymer-project.org/elements/paper-input?view=demo:demo/index.html) and 4) it eliminates the need for fake placeholders on older browsers.

The trade-off is that we can't rely on `focus` and `active` pseudo-selectors for the input, so we need to programatically add classes to the wrapper.

## Floating label

When inputs are blank, their labels will behave as placeholders. When the input is being filled, the label should move to the top.

## Stackable

When inputs are _stacked_ together, they should be wrapped in a `cui__fieldset` component, which provides the proper spacings before and after and solves the issues related to floats.
`cui__input`s can be stacked together with `cui__dropdown--native`.

___

- [Examples](#Input/examples)
- [Regular](#Input/regular)
	- [focused](#Input/regular/focused)
	- [filled](#Input/regular/filled)
	- [error](#Input/regular/error)
	- [error focused](#Input/regular/error focused)
	- [warning](#Input/regular/warning)
	- [warning focused](#Input/regular/warning focused)
	- [disabled](#Input/regular/disabled)
- [Big](#Input/big)
	- [focused](#Input/big/focused)
	- [filled](#Input/big/filled)
	- [error](#Input/big/error)
	- [error focused](#Input/big/error focused)
	- [warning](#Input/big/warning)
	- [warning focused](#Input/big/warning focused)
	- [disabled](#Input/big/disabled)
- [Giant](#Input/giant)
	- [focused](#Input/giant/focused)
	- [filled](#Input/giant/filled)
	- [error](#Input/giant/error)
	- [error focused](#Input/giant/error focused)
	- [warning](#Input/giant/warning)
	- [warning focused](#Input/giant/warning focused)
	- [disabled](#Input/giant/disabled)
- [Stacked](#Input/stacked)
	- [side by side](#Input/stacked/side by side)
	- [center](#Input/stacked/center)
	- [half and quarter sizes](#Input/stacked/half and quarter sizes)
	- [three quarters](#Input/stacked/three quarters)
	- [twenty - forty](#Input/stacked/twenty - forty)
	- [twenty - eighty](#Input/stacked/twenty - eighty)
	- [one third - two thirds](#Input/stacked/one third - two thirds)
- [Icon](#Input/icon)
	- [stroke style](#Input/icon/stroke)
	- [big](#Input/icon/big)
	- [focused](#Input/icon/focused)
	- [filled](#Input/icon/filled)
	- [error](#Input/icon/error)
	- [warning](#Input/icon/warning)
- [Centered](#Input/centered)
	- [filled](#Input/centered/filled)
	- [error](#Input/centered/error)
	- [icon](#Input/centered/icon)
	- [big](#Input/centered/big)
	- [loading](#Input/centered/loading)
- [Loading](#Input/loading)
	- [big](#Input/loading/big)
	- [big centered](#Input/loading/big centered)


<a name="Input/examples"></a>
## Examples

- [Checkout form](examples/base/checkout.html)

<a name="Input/regular"></a>
## Regular

```html
<div class="cui__input">
	<label class="cui__input__label">
		Please write your email address
	</label>
	<input class="cui__input__input" />
</div>
```

<a name="Input/regular/focused"></a>
### Focused

```html
<div class="cui__input is-focused">
    <label class="cui__input__label">
        Please write your email address
    </label>
    <input class="cui__input__input" />
</div>
```

<a name="Input/regular/filling"></a>
### Filling

```html
<div class="cui__input is-filled is-focused">
    <label class="cui__input__label">
        Please write your email address
    </label>
    <input class="cui__input__input" value="email@example.com" />
</div>
```

<a name="Input/regular/filled"></a>
### Filled

```html
<div class="cui__input is-filled">
    <label class="cui__input__label">
        Please write your email address
    </label>
    <input class="cui__input__input" value="email@example.com" />
</div>
```

<a name="Input/regular/error"></a>
### Error

Should be used when there's a problem with the filled value that blocks the user to continue.

```html
<div class="cui__input is-error">
    <label class="cui__input__label">
        Invalid email
    </label>
    <input class="cui__input__input" value="invalid@" />
</div>
```
<a name="Input/regular/error focused"></a>
### Error focused

```html
<div class="cui__input is-error is-focused">
    <label class="cui__input__label">
        Invalid email
    </label>
    <input class="cui__input__input" value="invalid@" />
</div>
```

<a name="Input/regular/warning"></a>
### Warning

Should be used when there's something that requires user's attention to the filled value, but doesn't block her to continue.

```html
<div class="cui__input is-warning">
    <label class="cui__input__label is-focused">
        Are you sure the domain is exanple?
    </label>
    <input class="cui__input__input" value="email@exanple.com" />
</div>
```
<a name="Input/regular/warning focused"></a>
### Warning focused

```html
<div class="cui__input is-warning is-focused">
    <label class="cui__input__label is-focused">
        Are you sure the domain is exanple?
    </label>
    <input class="cui__input__input" value="email@exanple.com" />
</div>
```

<a name="Input/regular/disabled"></a>
### Disabled

Should be used when it's important to show the field to the user but she should not be able to edit it.

```html
<div class="cui__input is-disabled left half">
    <label class="cui__input__label">
        Enter your email address
    </label>
    <input disabled class="cui__input__input" value="email@exanple.com" />
</div>

<div class="cui__input is-disabled right half">
    <label class="cui__input__label">
        Enter your email address
    </label>
    <input disabled class="cui__input__input" />
</div>
```

<a name="Input/big"></a>
## Big

```html
<div class="cui__input big">
	<label class="cui__input__label">
		Please write your email address
	</label>
	<input class="cui__input__input" />
</div>
```

<a name="Input/big/focused"></a>
### Focused

```html
<div class="cui__input big is-focused">
    <label class="cui__input__label">
        Please write your email address
    </label>
    <input class="cui__input__input" />
</div>
```

<a name="Input/big/filling"></a>
### Filling

```html
<div class="cui__input big is-filled is-focused">
    <label class="cui__input__label">
        Please write your email address
    </label>
    <input class="cui__input__input" value="email@example.com" />
</div>
```

<a name="Input/big/filled"></a>
### Filled

```html
<div class="cui__input big is-filled">
    <label class="cui__input__label">
        Please write your email address
    </label>
    <input class="cui__input__input" value="email@example.com" />
</div>
```

<a name="Input/big/error"></a>
### Error

Should be used when there's a problem with the filled value that blocks the user to continue.

```html
<div class="cui__input big is-error">
    <label class="cui__input__label">
        Invalid email
    </label>
    <input class="cui__input__input" value="invalid@" />
</div>
```
<a name="Input/big/error focused"></a>
### Error focused

```html
<div class="cui__input big is-error is-focused">
    <label class="cui__input__label">
        Invalid email
    </label>
    <input class="cui__input__input" value="invalid@" />
</div>
```

<a name="Input/big/warning"></a>
### Warning

Should be used when there's something that requires user's attention to the filled value, but doesn't block her to continue.

```html
<div class="cui__input big is-warning">
    <label class="cui__input__label is-focused">
        Are you sure the domain is exanple?
    </label>
    <input class="cui__input__input" value="email@exanple.com" />
</div>
```
<a name="Input/big/warning focused"></a>
### Warning focused

```html
<div class="cui__input big is-warning is-focused">
    <label class="cui__input__label is-focused">
        Are you sure the domain is exanple?
    </label>
    <input class="cui__input__input" value="email@exanple.com" />
</div>
```

<a name="Input/big/disabled"></a>
### Disabled

Should be used when it's important to show the field to the user but she should not be able to edit it.

```html
<div class="cui__input big is-disabled left half">
    <label class="cui__input__label">
        Enter your email address
    </label>
    <input disabled class="cui__input__input" value="email@exanple.com" />
</div>

<div class="cui__input big is-disabled right half">
    <label class="cui__input__label">
        Enter your email address
    </label>
    <input disabled class="cui__input__input" />
</div>
```

<a name="Input/giant"></a>
## Giant

```html
<div class="cui__input giant">
	<label class="cui__input__label">
		Please write your email address
	</label>
	<input class="cui__input__input" />
</div>
```

<a name="Input/giant/focused"></a>
### Focused

```html
<div class="cui__input giant is-focused">
    <label class="cui__input__label">
        Please write your email address
    </label>
    <input class="cui__input__input" />
</div>
```

<a name="Input/giant/filling"></a>
### Filling

```html
<div class="cui__input giant is-filled is-focused">
    <label class="cui__input__label">
        Please write your email address
    </label>
    <input class="cui__input__input" value="email@example.com" />
</div>
```

<a name="Input/giant/filled"></a>
### Filled

```html
<div class="cui__input giant is-filled">
    <label class="cui__input__label">
        Please write your email address
    </label>
    <input class="cui__input__input" value="email@example.com" />
</div>
```

<a name="Input/giant/error"></a>
### Error

Should be used when there's a problem with the filled value that blocks the user to continue.

```html
<div class="cui__input giant is-error">
    <label class="cui__input__label">
        Invalid email
    </label>
    <input class="cui__input__input" value="invalid@" />
</div>
```
<a name="Input/giant/error focused"></a>
### Error focused

```html
<div class="cui__input giant is-error is-focused">
    <label class="cui__input__label">
        Invalid email
    </label>
    <input class="cui__input__input" value="invalid@" />
</div>
```

<a name="Input/giant/warning"></a>
### Warning

Should be used when there's something that requires user's attention to the filled value, but doesn't block her to continue.

```html
<div class="cui__input giant is-warning">
    <label class="cui__input__label is-focused">
        Are you sure the domain is exanple?
    </label>
    <input class="cui__input__input" value="email@exanple.com" />
</div>
```
<a name="Input/giant/warning focused"></a>
### Warning focused

```html
<div class="cui__input giant is-warning is-focused">
    <label class="cui__input__label is-focused">
        Are you sure the domain is exanple?
    </label>
    <input class="cui__input__input" value="email@exanple.com" />
</div>
```

<a name="Input/giant/disabled"></a>
### Disabled

Should be used when it's important to show the field to the user but she should not be able to edit it.

```html
<div class="cui__input giant is-disabled left half">
    <label class="cui__input__label">
        Enter your email address
    </label>
    <input disabled class="cui__input__input" value="email@exanple.com" />
</div>

<div class="cui__input giant is-disabled right half">
    <label class="cui__input__label">
        Enter your email address
    </label>
    <input disabled class="cui__input__input" />
</div>
```

<a name="Input/stacked"></a>
## Stacked fields

Fields can be stacked together to form a single organic visual component.

By default, side by side fields will be responsive, meaning that they will
turn full width on thin screens. You can check this out by resizing the browser
or using Chrome inspector's mobile mode.


<div style="overflow: hidden">
  <ul class="overview">
    <li>
				<div class="cui__fieldset">
						<div class="cui__input half left">
							<label class="cui__input__label">
								Name
							</label>
							<input class="cui__input__input" />
						</div>
						<div class="cui__input half right">
							<label class="cui__input__label">
								Lastname
							</label>
							<input class="cui__input__input" />
						</div>
						<div class="cui__input">
							<label class="cui__input__label">
								Address line 1
							</label>
							<input class="cui__input__input" />
						</div>
						<div class="cui__input">
							<label class="cui__input__label">
								Address line 2
							</label>
							<input class="cui__input__input" />
						</div>
						<div class="cui__input half left">
							<label class="cui__input__label">
								City
							</label>
							<input class="cui__input__input" />
						</div>
						<div class="cui__input center quarter">
							<label class="cui__input__label">
								State
							</label>
							<input class="cui__input__input" />
						</div>
						<div class="cui__input right quarter">
							<label class="cui__input__label">
								Zip
							</label>
							<input class="cui__input__input" />
						</div>
						<div class="cui__input left half">
							<label class="cui__input__label">
								Phone number
							</label>
							<input class="cui__input__input" />
						</div>
						<div class="cui__input right half">
							<label class="cui__input__label">
								Email
							</label>
							<input class="cui__input__input" />
						</div>
				</div>
    </li>
	</ul>
</div>

<a name="Input/stacked/side by side"></a>
### Side by side

```html
<div class="cui__fieldset">
	<div class="cui__input left half">
		<label class="cui__input__label">
			Name
		</label>
		<input class="cui__input__input" />
	</div>
	<div class="cui__input right half">
		<label class="cui__input__label">
			Lastname
		</label>
		<input class="cui__input__input" />
	</div>
</div>
```

<a name="Input/stacked/half and quarter sizes"></a>
### Half and Quarter sizes

```html
<div class="cui__fieldset">
	<div class="cui__input left half">
		<label class="cui__input__label">
			City
		</label>
		<input class="cui__input__input" />
	</div>
	<div class="cui__input center quarter">
		<label class="cui__input__label">
			Zip
		</label>
		<input class="cui__input__input" />
	</div>
	<div class="cui__input right quarter">
		<label class="cui__input__label">
			Country
		</label>
		<input class="cui__input__input" />
	</div>
</div>
```

<a name="Input/stacked/three quarters"></a>
### Three quarters

```html
<div class="cui__fieldset">
	<div class="cui__input left quarter">
		<label class="cui__input__label">
			City
		</label>
		<input class="cui__input__input" />
	</div>
	<div class="cui__input right three-quarters">
		<label class="cui__input__label">
			Zip
		</label>
		<input class="cui__input__input" />
	</div>
</div>
```

<a name="Input/stacked/twenty - forty"></a>
### Twenty - Forty

```html
<div class="cui__fieldset">
	<div class="cui__input left twenty">
		<label class="cui__input__label">
			Title
		</label>
		<input class="cui__input__input" />
	</div>
	<div class="cui__input center forty">
		<label class="cui__input__label">
			Name
		</label>
		<input class="cui__input__input" />
	</div>
	<div class="cui__input right forty">
		<label class="cui__input__label">
			Lastname
		</label>
		<input class="cui__input__input" />
	</div>
</div>
```

<a name="Input/stacked/twenty - eighty"></a>
### Twenty - Eighty

```html
<div class="cui__fieldset">
	<div class="cui__input left twenty">
		<label class="cui__input__label">
			Title
		</label>
		<input class="cui__input__input" />
	</div>
	<div class="cui__input right eighty">
		<label class="cui__input__label">
			Name
		</label>
		<input class="cui__input__input" />
	</div>
</div>
```

<a name="Input/stacked/one third - two thirds"></a>
### One third - Two thirds

```html
<div class="cui__fieldset">
	<div class="cui__input left third">
		<label class="cui__input__label">
			Title
		</label>
		<input class="cui__input__input" />
	</div>
	<div class="cui__input right two-thirds">
		<label class="cui__input__label">
			Name
		</label>
		<input class="cui__input__input" />
	</div>
</div>
```

<a name="Input/icon"></a>
## With Icon

```html
<div class="cui__input--icon">
	<svg class="cui__input--icon__icon" viewBox="0 0 20 20" focusable="false">
		<g class="cui__input--icon__icon__fill" transform="translate(2, 4)">
			<path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
			<path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
		</g>
	</svg>

	<label class="cui__input--icon__label">
		Enter your postal code
	</label>
	<input class="cui__input--icon__input" />
</div>
```

<a name="Input/icon/stroke"></a>
### Icon with stroke style

```html
<div class="cui__input--icon">
	<svg class="cui__input--icon__icon" viewBox="0 0 20 20" focusable="false">
    <g transform="translate(2, 2)" class="cui__input--icon__icon__stroke">
      <circle cx="8" cy="8" r="7.5"></circle>
      <path d="M6.5,11 L4.5,9" stroke-linecap="round"></path>
      <path d="M11.5,11 L6.5,6" stroke-linecap="round" transform="translate(9, 8.500000) scale(1, -1) translate(-9, -8.500000) "></path>
    </g>
	</svg>

	<label class="cui__input--icon__label">
		Enter your postal code
	</label>
	<input class="cui__input--icon__input" />
</div>
```

<a name="Input/icon/big"></a>
### Big

```html
<div class="cui__input--icon big">
	<svg class="cui__input--icon__icon" viewBox="0 0 20 20" focusable="false">
		<g class="cui__input--icon__icon__fill" transform="translate(2, 4)">
			<path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
			<path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
		</g>
	</svg>

	<label class="cui__input--icon__label">
		Enter your password
	</label>
	<input class="cui__input--icon__input" />
</div>
```

<a name="Input/icon/focused"></a>
### Focused

```html
<div class="cui__input--icon is-focused">
	<svg class="cui__input--icon__icon" viewBox="0 0 20 20" focusable="false">
		<g class="cui__input--icon__icon__fill" transform="translate(2, 4)">
			<path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
			<path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
		</g>
	</svg>

	<label class="cui__input--icon__label is-focused">
		Enter your password
	</label>
	<input class="cui__input--icon__input" />
</div>
```

<a name="Input/icon/filling"></a>
### Filling

```html
<div class="cui__input--icon is-filled is-focused">
	<svg class="cui__input--icon__icon" viewBox="0 0 20 20" focusable="false">
		<g class="cui__input--icon__icon__fill" transform="translate(2, 4)">
			<path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
			<path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
		</g>
	</svg>

	<label class="cui__input--icon__label">
		Please write your email address
	</label>
	<input class="cui__input--icon__input" value="email@example.com" />
</div>
```

<a name="Input/icon/error"></a>
### Error

```html
<div class="cui__input--icon is-error">
	<svg class="cui__input--icon__icon" viewBox="0 0 20 20" focusable="false">
		<g class="cui__input--icon__icon__fill" transform="translate(2, 4)">
			<path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
			<path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
		</g>
	</svg>

	<label class="cui__input--icon__label is-focused">
		Are you sure the domain is example?
	</label>
	<input class="cui__input--icon__input" value="email@exanple.com" />
</div>
```

<a name="Input/icon/warning"></a>
### Warning

```html
<div class="cui__input--icon is-warning">
	<svg class="cui__input--icon__icon" viewBox="0 0 20 20" focusable="false">
		<g class="cui__input--icon__icon__fill" transform="translate(2, 4)">
			<path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
			<path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
		</g>
	</svg>

	<label class="cui__input--icon__label is-focused">
		Are you sure the domain is example?
	</label>
	<input class="cui__input--icon__input" value="email@exanple.com" />
</div>
```

<a name="Input/icon/disabled"></a>
### Disabled

```html
<div class="cui__input--icon is-disabled">
	<svg class="cui__input--icon__icon" viewBox="0 0 20 20" focusable="false">
		<g class="cui__input--icon__icon__fill" transform="translate(2, 4)">
			<path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
			<path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
		</g>
	</svg>

	<label class="cui__input--icon__label">
		Are you sure the domain is example?
	</label>
	<input disabled class="cui__input--icon__input" value="email@exanple.com" />
</div>
```

<a name="Input/centered"></a>
## Centered

```html
<div class="cui__input is-centered">
	<label class="cui__input__label">
		This is aligned to the center
	</label>
	<input class="cui__input__input" />
</div>
```

<a name="Input/centered/filled"></a>
### Filled

```html
<div class="cui__input is-centered is-filled">
	<label class="cui__input__label">
		This centered field is filled
	</label>
	<input class="cui__input__input" value="email@example.com" />
</div>
```

<a name="Input/centered/error"></a>
### Error

```html
<div class="cui__input is-centered is-error">
    <label class="cui__input__label">
      Something went wrong!
    </label>
    <input class="cui__input__input" value="invalid input" />
</div>
```

<a name="Input/centered/icon"></a>
### Icon

```html
<div class="cui__input--icon is-centered is-filled is-focused">
	<svg class="cui__input--icon__icon" viewBox="0 0 20 20" focusable="false">
		<g class="cui__input--icon__icon__fill" transform="translate(2, 4)">
			<path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
			<path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
		</g>
	</svg>

	<label class="cui__input__label">
		ZIP Code
	</label>
	<input class="cui__input__input" value="94027" />
</div>
```

<a name="Input/centered/big"></a>
### Big

```html
<div class="cui__input big is-centered is-filled is-focused">
	<label class="cui__input__label">
		ZIP Code
	</label>
	<input class="cui__input__input" value="94027" />
</div>
```

<a name="Input/centered/loading"></a>
### Loading

```html
<div class="cui__input is-loading is-centered is-filled is-focused">
	<label class="cui__input__label">
	  ZIP Code
	</label>
	<input class="cui__input__input" value="94027" />
</div>
```

<a name="Input/loading"></a>
## Loading

```html
<div class="cui__input is-loading">
    <label class="cui__input__label">
        ZIP Code
    </label>
    <input class="cui__input__input" value="94027" />
</div>
```

<a name="Input/loading/big"></a>
### Big

```html
<div class="cui__input big is-loading">
    <label class="cui__input__label">
        ZIP Code
    </label>
    <input class="cui__input__input" value="94027" />
</div>
```

<a name="Input/loading/big centered"></a>
### Big centered

```html
<div class="cui__input big is-centered is-loading">
    <label class="cui__input__label">
        ZIP Code
    </label>
    <input class="cui__input__input" value="94027" />
</div>
```
