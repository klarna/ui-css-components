# Field

<div style="background: #eea; margin-top: 3px; padding: 20px">
	The Fields are deprecated. New projects will be designed using Input instead.
</div>


The field is a molecular element. It consists of a wrapper with the `cui__field` block, which should be added to a `div` tag, containing a `cui__field__label` added to a `label` tag and `cui__field__input` added to an `input` tag.

The reasons to use a label as a placeholder are 1) makes it easier to transition from the placeholder to the floarint label, because it's the same element 2) there's an issue that some browsers don't respect input padding 3) that's the standard way many libraries that have floating label components implement it, like [material-ui](http://material-ui.com/#/components/text-fields) and [polymer](https://elements.polymer-project.org/elements/paper-input?view=demo:demo/index.html) and 4) it eliminates the need for fake placeholders on older browsers.

The trade-off is that we can't rely on `focus` and `active` pseudo-selectors for the input, so we need to programatically add classes to the wrapper.

## Floating label

When fields are blank, their labels will behave as placeholders. When the field is being filled, the label should move to the top.

## Stackable

When fields are _stacked_ together, they should be wrapped in a `cui__fieldset` component, which provides the proper spacings before and after and solves the issues related to floats.
`cui__field`s can be stacked together with `cui__dropdown--native`.

___

- [Examples](#Field/examples)
- [Regular](#Field/regular)
	- [focused](#Field/regular/focused)
	- [filled](#Field/regular/filled)
	- [error](#Field/regular/error)
	- [error focused](#Field/regular/error focused)
	- [warning](#Field/regular/warning)
	- [warning focused](#Field/regular/warning focused)
	- [disabled](#Field/regular/disabled)
- [Big](#Field/big)
	- [focused](#Field/big/focused)
	- [filled](#Field/big/filled)
	- [error](#Field/big/error)
	- [error focused](#Field/big/error focused)
	- [warning](#Field/big/warning)
	- [warning focused](#Field/big/warning focused)
	- [disabled](#Field/big/disabled)
- [Stacked](#Field/stacked)
	- [side by side](#Field/stacked/side by side)
	- [top part](#Field/stacked/top part)
	- [top part](#Field/stacked/top only)
	- [bottom part](#Field/stacked/bottom part)
	- [bottom part](#Field/stacked/bottom only)
	- [center](#Field/stacked/center)
	- [half and quarter sizes](#Field/stacked/half and quarter sizes)
	- [three quarters](#Field/stacked/three quarters)
	- [twenty - forty](#Field/stacked/twenty - forty)
	- [twenty - eighty](#Field/stacked/twenty - eighty)
	- [one third - two thirds](#Field/stacked/one third - two thirds)
- [Icon](#Field/icon)
	- [big](#Field/icon/big)
	- [focused](#Field/icon/focused)
	- [filled](#Field/icon/filled)
	- [error](#Field/icon/error)
	- [warning](#Field/icon/warning)
- [Centered](#Field/centered)
	- [filled](#Field/centered/filled)
	- [error](#Field/centered/error)
	- [icon](#Field/centered/icon)
	- [big](#Field/centered/big)
	- [loading](#Field/centered/loading)
- [Loading](#Field/loading)
	- [big](#Field/loading/big)
	- [big centered](#Field/loading/big centered)
- [Autocomplete background](#Field/autocomplete-background)


<a name="Field/examples"></a>
## Examples

- [Checkout form](examples/base/checkout.html)

<a name="Field/regular"></a>
## Regular

```html
<div class="cui__field">
	<label class="cui__field__label">
		Please write your email address
	</label>
	<input class="cui__field__input" />
</div>
```

<a name="Field/regular/focused"></a>
### Focused

```html
<div class="cui__field is-focused">
    <label class="cui__field__label">
        Please write your email address
    </label>
    <input class="cui__field__input" />
</div>
```

<a name="Field/regular/filling"></a>
### Filling

```html
<div class="cui__field is-filled is-focused">
    <label class="cui__field__label">
        Please write your email address
    </label>
    <input class="cui__field__input" value="email@example.com" />
</div>
```

<a name="Field/regular/filled"></a>
### Filled

```html
<div class="cui__field is-filled">
    <label class="cui__field__label">
        Please write your email address
    </label>
    <input class="cui__field__input" value="email@example.com" />
</div>
```

<a name="Field/regular/error"></a>
### Error

Should be used when there's a problem with the filled value that blocks the user to continue.

```html
<div class="cui__field is-error">
    <label class="cui__field__label">
        Invalid email
    </label>
    <input class="cui__field__input" value="invalid@" />
</div>
```
<a name="Field/regular/error focused"></a>
### Error focused

```html
<div class="cui__field is-error is-focused">
    <label class="cui__field__label">
        Invalid email
    </label>
    <input class="cui__field__input" value="invalid@" />
</div>
```

<a name="Field/regular/warning"></a>
### Warning

Should be used when there's something that requires user's attention to the filled value, but doesn't block her to continue.

```html
<div class="cui__field is-warning">
    <label class="cui__field__label is-focused">
        Are you sure the domain is exanple?
    </label>
    <input class="cui__field__input" value="email@exanple.com" />
</div>
```
<a name="Field/regular/warning focused"></a>
### Warning focused

```html
<div class="cui__field is-warning is-focused">
    <label class="cui__field__label is-focused">
        Are you sure the domain is exanple?
    </label>
    <input class="cui__field__input" value="email@exanple.com" />
</div>
```

<a name="Field/regular/disabled"></a>
### Disabled

Should be used when it's important to show the field to the user but she should not be able to edit it.

```html
<div class="cui__field is-disabled left half">
    <label class="cui__field__label">
        Enter your email address
    </label>
    <input disabled class="cui__field__input" value="email@exanple.com" />
</div>

<div class="cui__field is-disabled right half">
    <label class="cui__field__label">
        Enter your email address
    </label>
    <input disabled class="cui__field__input" />
</div>
```

<a name="Field/big"></a>
## Big

```html
<div class="cui__field big">
	<label class="cui__field__label">
		Please write your email address
	</label>
	<input class="cui__field__input" />
</div>
```

<a name="Field/big/focused"></a>
### Focused

```html
<div class="cui__field big is-focused">
    <label class="cui__field__label">
        Please write your email address
    </label>
    <input class="cui__field__input" />
</div>
```

<a name="Field/big/filling"></a>
### Filling

```html
<div class="cui__field big is-filled is-focused">
    <label class="cui__field__label">
        Please write your email address
    </label>
    <input class="cui__field__input" value="email@example.com" />
</div>
```

<a name="Field/big/filled"></a>
### Filled

```html
<div class="cui__field big is-filled">
    <label class="cui__field__label">
        Please write your email address
    </label>
    <input class="cui__field__input" value="email@example.com" />
</div>
```

<a name="Field/big/error"></a>
### Error

Should be used when there's a problem with the filled value that blocks the user to continue.

```html
<div class="cui__field big is-error">
    <label class="cui__field__label">
        Invalid email
    </label>
    <input class="cui__field__input" value="invalid@" />
</div>
```
<a name="Field/big/error focused"></a>
### Error focused

```html
<div class="cui__field big is-error is-focused">
    <label class="cui__field__label">
        Invalid email
    </label>
    <input class="cui__field__input" value="invalid@" />
</div>
```

<a name="Field/big/warning"></a>
### Warning

Should be used when there's something that requires user's attention to the filled value, but doesn't block her to continue.

```html
<div class="cui__field big is-warning">
    <label class="cui__field__label is-focused">
        Are you sure the domain is exanple?
    </label>
    <input class="cui__field__input" value="email@exanple.com" />
</div>
```
<a name="Field/big/warning focused"></a>
### Warning focused

```html
<div class="cui__field big is-warning is-focused">
    <label class="cui__field__label is-focused">
        Are you sure the domain is exanple?
    </label>
    <input class="cui__field__input" value="email@exanple.com" />
</div>
```

<a name="Field/big/disabled"></a>
### Disabled

Should be used when it's important to show the field to the user but she should not be able to edit it.

```html
<div class="cui__field big is-disabled left half">
    <label class="cui__field__label">
        Enter your email address
    </label>
    <input disabled class="cui__field__input" value="email@exanple.com" />
</div>

<div class="cui__field big is-disabled right half">
    <label class="cui__field__label">
        Enter your email address
    </label>
    <input disabled class="cui__field__input" />
</div>
```

<a name="Field/stacked"></a>
## Stacked fields

Fields can be stacked together to form a single organic visual component.

By default, side by side fields will be responsive, meaning that they will
turn full width on thin screens. If you want fields to keep appearing side
by side on thin viewports, add the `-non-responsive` class to the field. You
can see an example of this in the [Billing Address](examples/base/checkout.html)
demo.


<div style="overflow: hidden">
  <ul class="overview">
    <li>
				<div class="cui__fieldset">
						<div class="cui__field top-left half non-responsive">
							<label class="cui__field__label">
								Name
							</label>
							<input class="cui__field__input" />
						</div>
						<div class="cui__field top-right half non-responsive">
							<label class="cui__field__label">
								Lastname
							</label>
							<input class="cui__field__input" />
						</div>
						<div class="cui__field square">
							<label class="cui__field__label">
								Address line 1
							</label>
							<input class="cui__field__input" />
						</div>
						<div class="cui__field square">
							<label class="cui__field__label">
								Address line 2
							</label>
							<input class="cui__field__input" />
						</div>
						<div class="cui__field square half">
							<label class="cui__field__label">
								City
							</label>
							<input class="cui__field__input" />
						</div>
						<div class="cui__field center quarter">
							<label class="cui__field__label">
								State
							</label>
							<input class="cui__field__input" />
						</div>
						<div class="cui__field center quarter">
							<label class="cui__field__label">
								Zip
							</label>
							<input class="cui__field__input" />
						</div>
						<div class="cui__field bottom-left half">
							<label class="cui__field__label">
								Phone number
							</label>
							<input class="cui__field__input" />
						</div>
						<div class="cui__field bottom-right half">
							<label class="cui__field__label">
								Email
							</label>
							<input class="cui__field__input" />
						</div>
				</div>
    </li>
	</ul>
</div>

<a name="Field/stacked/side by side"></a>
### Side by side

```html
<div class="cui__fieldset">
	<div class="cui__field left half">
		<label class="cui__field__label">
			Name
		</label>
		<input class="cui__field__input" />
	</div>
	<div class="cui__field right half">
		<label class="cui__field__label">
			Lastname
		</label>
		<input class="cui__field__input" />
	</div>
</div>
```

<a name="Field/stacked/top part"></a>
### Top part

```html
<div class="cui__fieldset">
	<div class="cui__field top-left half">
		<label class="cui__field__label">
			Name
		</label>
		<input class="cui__field__input" />
	</div>
	<div class="cui__field top-right half">
		<label class="cui__field__label">
			Lastname
		</label>
		<input class="cui__field__input" />
	</div>
</div>
```

<a name="Field/stacked/top only"></a>
### Top only

```html
<div class="cui__fieldset">
	<div class="cui__field top">
		<label class="cui__field__label">
			Email address
		</label>
		<input class="cui__field__input" />
	</div>
</div>
```

<a name="Field/stacked/bottom part"></a>
### Bottom part

```html
<div class="cui__fieldset">
	<div class="cui__field bottom-left half">
		<label class="cui__field__label">
			City
		</label>
		<input class="cui__field__input" />
	</div>
	<div class="cui__field bottom-right half">
		<label class="cui__field__label">
			Country
		</label>
		<input class="cui__field__input" />
	</div>
</div>
```

<a name="Field/stacked/bottom only"></a>
### Bottom only

```html
<div class="cui__fieldset">
	<div class="cui__field bottom">
		<label class="cui__field__label">
			Password
		</label>
		<input type="password" class="cui__field__input" />
	</div>
</div>
```

<a name="Field/stacked/square"></a>
### Square

```html
<div class="cui__fieldset">
	<div class="cui__field top-left half">
		<label class="cui__field__label">
			City
		</label>
		<input class="cui__field__input" />
	</div>
	<div class="cui__field top-right half">
		<label class="cui__field__label">
			Country
		</label>
		<input class="cui__field__input" />
	</div>
	<div class="cui__field square">
		<label class="cui__field__label">
			Country
		</label>
		<input class="cui__field__input" />
	</div>
</div>
```

<a name="Field/stacked/half and quarter sizes"></a>
### Half and Quarter sizes

```html
<div class="cui__fieldset">
	<div class="cui__field top-left half">
		<label class="cui__field__label">
			City
		</label>
		<input class="cui__field__input" />
	</div>
	<div class="cui__field center quarter">
		<label class="cui__field__label">
			Zip
		</label>
		<input class="cui__field__input" />
	</div>
	<div class="cui__field top-right quarter">
		<label class="cui__field__label">
			Country
		</label>
		<input class="cui__field__input" />
	</div>
</div>
```

<a name="Field/stacked/three quarters"></a>
### Three quarters

```html
<div class="cui__fieldset">
	<div class="cui__field left quarter">
		<label class="cui__field__label">
			City
		</label>
		<input class="cui__field__input" />
	</div>
	<div class="cui__field right three-quarters">
		<label class="cui__field__label">
			Zip
		</label>
		<input class="cui__field__input" />
	</div>
</div>
```

<a name="Field/stacked/twenty - forty"></a>
### Twenty - Forty

```html
<div class="cui__fieldset">
	<div class="cui__field top-left twenty">
		<label class="cui__field__label">
			Title
		</label>
		<input class="cui__field__input" />
	</div>
	<div class="cui__field center forty">
		<label class="cui__field__label">
			Name
		</label>
		<input class="cui__field__input" />
	</div>
	<div class="cui__field top-right forty">
		<label class="cui__field__label">
			Lastname
		</label>
		<input class="cui__field__input" />
	</div>
</div>
```

<a name="Field/stacked/twenty - eighty"></a>
### Twenty - Eighty

```html
<div class="cui__fieldset">
	<div class="cui__field left twenty">
		<label class="cui__field__label">
			Title
		</label>
		<input class="cui__field__input" />
	</div>
	<div class="cui__field right eighty">
		<label class="cui__field__label">
			Name
		</label>
		<input class="cui__field__input" />
	</div>
</div>
```

<a name="Field/stacked/one third - two thirds"></a>
### One third - Two thirds

```html
<div class="cui__fieldset">
	<div class="cui__field left third">
		<label class="cui__field__label">
			Title
		</label>
		<input class="cui__field__input" />
	</div>
	<div class="cui__field right two-thirds">
		<label class="cui__field__label">
			Name
		</label>
		<input class="cui__field__input" />
	</div>
</div>
```

<a name="Field/icon"></a>
## With Icon

```html
<div class="cui__field--icon">
	<svg class="cui__field--icon__icon" viewBox="0 0 20 20" focusable="false">
    <g class="cui__field--icon__icon__fill" transform="translate(2.000000, 4.000000)">
        <path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
        <path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
    </g>
	</svg>

	<label class="cui__field--icon__label">
		Enter your postal code
	</label>
	<input class="cui__field--icon__input" />
</div>
```

<a name="Field/icon/stroke"></a>
### Icon with stroke style

```html
<div class="cui__field--icon">
	<svg class="cui__field--icon__icon" viewBox="0 0 20 20" focusable="false">
    <g transform="translate(2, 2)" class="cui__field--icon__icon__stroke">
      <circle cx="8" cy="8" r="7.5"></circle>
      <path d="M6.5,11 L4.5,9" stroke-linecap="round"></path>
      <path d="M11.5,11 L6.5,6" stroke-linecap="round" transform="translate(9, 8.500000) scale(1, -1) translate(-9, -8.500000) "></path>
    </g>
	</svg>

	<label class="cui__field--icon__label">
		Enter your postal code
	</label>
	<input class="cui__field--icon__input" />
</div>
```

<a name="Field/icon/big"></a>
### Big

```html
<div class="cui__field--icon big">
	<svg class="cui__field--icon__icon" viewBox="0 0 20 20" focusable="false">
    <g class="cui__field--icon__icon__fill" transform="translate(2.000000, 4.000000)">
        <path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
        <path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
    </g>
	</svg>

	<label class="cui__field--icon__label">
		Enter your password
	</label>
	<input class="cui__field--icon__input" />
</div>
```

<a name="Field/icon/focused"></a>
### Focused

```html
<div class="cui__field--icon is-focused">
	<svg class="cui__field--icon__icon" viewBox="0 0 20 20" focusable="false">
    <g class="cui__field--icon__icon__fill" transform="translate(2.000000, 4.000000)">
        <path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
        <path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
    </g>
	</svg>

	<label class="cui__field--icon__label is-focused">
		Enter your password
	</label>
	<input class="cui__field--icon__input" />
</div>
```

<a name="Field/icon/filling"></a>
### Filling

```html
<div class="cui__field--icon is-filled is-focused">
	<svg class="cui__field--icon__icon" viewBox="0 0 20 20" focusable="false">
    <g class="cui__field--icon__icon__fill" transform="translate(2.000000, 4.000000)">
        <path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
        <path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
    </g>
	</svg>

	<label class="cui__field--icon__label">
		Please write your email address
	</label>
	<input class="cui__field--icon__input" value="email@example.com" />
</div>
```

<a name="Field/icon/error"></a>
### Error

```html
<div class="cui__field--icon is-error">
	<svg class="cui__field--icon__icon" viewBox="0 0 20 20" focusable="false">
    <g class="cui__field--icon__icon__fill" transform="translate(2.000000, 4.000000)">
        <path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
        <path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
    </g>
	</svg>

	<label class="cui__field--icon__label is-focused">
		Are you sure the domain is example?
	</label>
	<input class="cui__field--icon__input" value="email@exanple.com" />
</div>
```

<a name="Field/icon/warning"></a>
### Warning

```html
<div class="cui__field--icon is-warning">
	<svg class="cui__field--icon__icon" viewBox="0 0 20 20" focusable="false">
    <g class="cui__field--icon__icon__fill" transform="translate(2.000000, 4.000000)">
        <path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
        <path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
    </g>
	</svg>

	<label class="cui__field--icon__label is-focused">
		Are you sure the domain is example?
	</label>
	<input class="cui__field--icon__input" value="email@exanple.com" />
</div>
```

<a name="Field/icon/disabled"></a>
### Disabled

```html
<div class="cui__field--icon is-disabled">
	<svg class="cui__field--icon__icon" viewBox="0 0 20 20" focusable="false">
    <g class="cui__field--icon__icon__fill" transform="translate(2.000000, 4.000000)">
        <path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
        <path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
    </g>
	</svg>

	<label class="cui__field--icon__label">
		Are you sure the domain is example?
	</label>
	<input disabled class="cui__field--icon__input" value="email@exanple.com" />
</div>
```

<a name="Field/centered"></a>
## Centered

```html
<div class="cui__field is-centered">
	<label class="cui__field__label">
		This is aligned to the center
	</label>
	<input class="cui__field__input" />
</div>
```

<a name="Field/centered/filled"></a>
### Filled

```html
<div class="cui__field is-centered is-filled">
	<label class="cui__field__label">
		This centered field is filled
	</label>
	<input class="cui__field__input" value="email@example.com" />
</div>
```

<a name="Field/centered/error"></a>
### Error

```html
<div class="cui__field is-centered is-error">
    <label class="cui__field__label">
        Something went wrong!
    </label>
    <input class="cui__field__input" value="invalid input" />
</div>
```

<a name="Field/centered/icon"></a>
### Icon

```html
<div class="cui__field--icon is-centered is-filled is-focused">
		<svg class="cui__field--icon__icon" viewBox="0 0 20 20" focusable="false">
	    <g class="cui__field--icon__icon__fill" transform="translate(2.000000, 4.000000)">
	        <path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
	        <path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
	    </g>
		</svg>
    <label class="cui__field__label">
      ZIP Code
    </label>
    <input class="cui__field__input" value="94027" />
</div>
```

<a name="Field/centered/big"></a>
### Big

```html
<div class="cui__field big is-centered is-filled is-focused">
    <label class="cui__field__label">
        ZIP Code
    </label>
    <input class="cui__field__input" value="94027" />
</div>
```

<a name="Field/centered/loading"></a>
### Loading

```html
<div class="cui__field is-loading is-centered is-filled is-focused">
    <label class="cui__field__label">
        ZIP Code
    </label>
    <input class="cui__field__input" value="94027" />
</div>
```

<a name="Field/loading"></a>
## Loading

```html
<div class="cui__field is-loading">
    <label class="cui__field__label">
        ZIP Code
    </label>
    <input class="cui__field__input" value="94027" />
</div>
```

<a name="Field/loading/big"></a>
### Big

```html
<div class="cui__field big is-loading">
    <label class="cui__field__label">
        ZIP Code
    </label>
    <input class="cui__field__input" value="94027" />
</div>
```

<a name="Field/loading/big centered"></a>
### Big centered

```html
<div class="cui__field big is-centered is-loading">
    <label class="cui__field__label">
      ZIP Code
    </label>
    <input class="cui__field__input" value="94027" />
</div>
```

<a name="Field/autocomplete-background"></a>
## Autocomplete background

```html
<div class="cui__field">
    <label class="cui__field__label">
      Type your email
    </label>
    <input name="email" class="cui__field__input" type="email" />
</div>
```
