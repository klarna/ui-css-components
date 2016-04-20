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
- [Stacked](#Input/stacked)
	- [side by side](#Input/stacked/side by side)
	- [top part](#Input/stacked/top part)
	- [top part](#Input/stacked/top only)
	- [bottom part](#Input/stacked/bottom part)
	- [bottom part](#Input/stacked/bottom only)
	- [center](#Input/stacked/center)
	- [half and quarter sizes](#Input/stacked/half and quarter sizes)
	- [three quarters](#Input/stacked/three quarters)
	- [twenty - forty](#Input/stacked/twenty - forty)
	- [twenty - eighty](#Input/stacked/twenty - eighty)
	- [one third - two thirds](#Input/stacked/one third - two thirds)
- [Icon](#Input/icon)
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

<a name="Input/stacked"></a>
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
						<div class="cui__input top-left half non-responsive">
							<label class="cui__input__label">
								Name
							</label>
							<input
										class="cui__input__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__input top-right half non-responsive">
							<label class="cui__input__label">
								Lastname
							</label>
							<input
										class="cui__input__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__input square">
							<label class="cui__input__label">
								Address line 1
							</label>
							<input
										class="cui__input__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__input square">
							<label class="cui__input__label">
								Address line 2
							</label>
							<input
										class="cui__input__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__input square half">
							<label class="cui__input__label">
								City
							</label>
							<input
										class="cui__input__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__input center quarter">
							<label class="cui__input__label">
								State
							</label>
							<input
										class="cui__input__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__input center quarter">
							<label class="cui__input__label">
								Zip
							</label>
							<input
										class="cui__input__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__input bottom-left half">
							<label class="cui__input__label">
								Phone number
							</label>
							<input
										class="cui__input__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
						</div>
						<div class="cui__input bottom-right half">
							<label class="cui__input__label">
								Email
							</label>
							<input
										class="cui__input__input"
										oninput="floatingLabel(this)"
										onfocus="dofocus(this)"
										onblur="doblur(this)"
								/>
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

<a name="Input/stacked/top part"></a>
### Top part

```html
<div class="cui__fielset">
	<div class="cui__input top-left half">
		<label class="cui__input__label">
			Name
		</label>
		<input class="cui__input__input" />
	</div>
	<div class="cui__input top-right half">
		<label class="cui__input__label">
			Lastname
		</label>
		<input class="cui__input__input" />
	</div>
</div>
```

<a name="Input/stacked/top only"></a>
### Top only

```html
<div class="cui__fielset">
	<div class="cui__input top">
		<label class="cui__input__label">
			Email address
		</label>
		<input class="cui__input__input" />
	</div>
</div>
```

<a name="Input/stacked/bottom part"></a>
### Bottom part

```html
<div class="cui__fielset">
	<div class="cui__input bottom-left half">
		<label class="cui__input__label">
			City
		</label>
		<input class="cui__input__input" />
	</div>
	<div class="cui__input bottom-right half">
		<label class="cui__input__label">
			Country
		</label>
		<input class="cui__input__input" />
	</div>
</div>
```

<a name="Input/stacked/bottom only"></a>
### Bottom only

```html
<div class="cui__fielset">
	<div class="cui__input bottom">
		<label class="cui__input__label">
			Password
		</label>
		<input type="password" class="cui__input__input" />
	</div>
</div>
```

<a name="Input/stacked/square"></a>
### Square

```html
<div class="cui__fielset">
	<div class="cui__input top-left half">
		<label class="cui__input__label">
			City
		</label>
		<input class="cui__input__input" />
	</div>
	<div class="cui__input top-right half">
		<label class="cui__input__label">
			Country
		</label>
		<input class="cui__input__input" />
	</div>
	<div class="cui__input square">
		<label class="cui__input__label">
			Country
		</label>
		<input class="cui__input__input" />
	</div>
</div>
```

<a name="Input/stacked/half and quarter sizes"></a>
### Half and Quarter sizes

```html
<div class="cui__fielset">
	<div class="cui__input top-left half">
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
	<div class="cui__input top-right quarter">
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
<div class="cui__fielset">
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
<div class="cui__fielset">
	<div class="cui__input top-left twenty">
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
	<div class="cui__input top-right forty">
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
<div class="cui__fielset">
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
<div class="cui__fielset">
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

Note: the icon and the CSS for changing its color according to the state of the
input (`is-focused`, …) has to be added separately. Here we demonstrate taking the
space for the icon with a background colored placeholder.

```html
<div class="cui__input--icon">
	<span class="cui__input--icon__icon cui__input--icon__placeholder"></span>
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
	<span class="cui__input--icon__icon cui__icon--lock"></span>
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
	<span class="cui__input--icon__icon cui__input--icon__placeholder is-focused"></span>
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
	<span class="cui__input--icon__icon cui__input--icon__placeholder"></span>
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
	<span class="cui__input--icon__icon cui__input--icon__placeholder"></span>
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
	<span class="cui__input--icon__icon cui__input--icon__placeholder"></span>
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
	<span class="cui__input--icon__icon cui__input--icon__placeholder"></span>
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
    <span class="cui__input--icon__icon cui__input--icon__placeholder"></span>
    <label class="cui__input--icon__label">
        ZIP Code
    </label>
    <input class="cui__input--icon__input" value="94027" />
</div>
```

<a name="Input/centered/big"></a>
### Big

```html
<div class="cui__input big is-centered is-filled is-focused">
    <label class="cui__input--icon__label">
        ZIP Code
    </label>
    <input class="cui__input--icon__input" value="94027" />
</div>
```

<a name="Input/centered/loading"></a>
### Loading

```html
<div class="cui__input is-loading is-centered is-filled is-focused">
    <label class="cui__input--icon__label">
        ZIP Code
    </label>
    <input class="cui__input--icon__input" value="94027" />
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
