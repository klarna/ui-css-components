# Field

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
- [Stacked](#Field/stacked)
	- [side by side](#Field/stacked/side by side)
	- [top part](#Field/stacked/top part)
	- [top part](#Field/stacked/top only)
	- [bottom part](#Field/stacked/bottom part)
	- [bottom part](#Field/stacked/bottom only)
	- [center](#Field/stacked/center)
	- [half and quarter sizes](#Field/stacked/half and quarter sizes)
	- [twenty - forty](#Field/stacked/twenty - forty)
- [Icon](#Field/icon)
	- [focused](#Field/icon/focused)
	- [filled](#Field/icon/filled)
	- [error](#Field/icon/error)
	- [warning](#Field/icon/warning)
- [Centered](#Field/centered)
	- [filled](#Field/centered/filled)
	- [error](#Field/centered/error)
	- [icon](#Field/centered/icon)


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
							<input
										class="cui__field__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__field top-right half non-responsive">
							<label class="cui__field__label">
								Lastname
							</label>
							<input
										class="cui__field__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__field square">
							<label class="cui__field__label">
								Address line 1
							</label>
							<input
										class="cui__field__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__field square">
							<label class="cui__field__label">
								Address line 2
							</label>
							<input
										class="cui__field__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__field square half">
							<label class="cui__field__label">
								City
							</label>
							<input
										class="cui__field__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__field center quarter">
							<label class="cui__field__label">
								State
							</label>
							<input
										class="cui__field__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__field center quarter">
							<label class="cui__field__label">
								Zip
							</label>
							<input
										class="cui__field__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__field bottom-left half">
							<label class="cui__field__label">
								Phone number
							</label>
							<input
										class="cui__field__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__field bottom-right half">
							<label class="cui__field__label">
								Email
							</label>
							<input
										class="cui__field__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
				</div>
    </li>
	</ul>
</div>

<a name="Field/stacked/side by side"></a>
### Side by side

```html
<div class="cui__fielset">
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
<div class="cui__fielset">
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
<div class="cui__fielset">
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
<div class="cui__fielset">
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
<div class="cui__fielset">
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
<div class="cui__fielset">
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
<div class="cui__fielset">
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

<a name="Field/stacked/twenty - forty"></a>
### Twenty - Forty

```html
<div class="cui__fielset">
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

<a name="Field/icon"></a>
## With Icon

```html
<div class="cui__field--icon">
	<span class="cui__field--icon__icon cui__icon--mail"></span>
	<label class="cui__field--icon__label">
		Enter your postal code
	</label>
	<input class="cui__field--icon__input" />
</div>
```

<a name="Field/icon/focused"></a>
### Focused

```html
<div class="cui__field--icon is-focused">
	<span class="cui__field--icon__icon cui__icon--lock is-focused"></span>
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
	<span class="cui__field--icon__icon cui__icon--lock"></span>
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
	<span class="cui__field--icon__icon cui__icon--lock"></span>
	<label class="cui__field--icon__label is-focused">
		Are you sure the domain is example?
	</label>
	<input type="password" class="cui__field--icon__input" value="email@exanple.com" />
</div>
```

<a name="Field/icon/warning"></a>
### Warning

```html
<div class="cui__field--icon is-warning">
	<span class="cui__field--icon__icon cui__icon--lock"></span>
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
	<span class="cui__field--icon__icon cui__icon--lock"></span>
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
		This is alligned to the center
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
    <span class="cui__field--icon__icon cui__icon--mail"></span>
    <label class="cui__field--icon__label">
        ZIP Code
    </label>
    <input class="cui__field--icon__input" value="94027" />
</div>
```

<script>
		function floatingLabel(input) {
			if(input.value){
				$(input).parent().addClass("is-filled");
			} else {
				$(input).parent().removeClass("is-filled");
			}
		}

		function dofocus(input) {
				$(input).parent().addClass('is-focused');
		}

		function doblur(input) {
				$(input).parent().removeClass('is-focused');
		}

		$('input').each(function (index, input) {
				floatingLabel(input)
		})
</script>
