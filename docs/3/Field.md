# Field

The field is a molecular element. It consists of a wrapper with the `cui__field` block, which should be added to a `div` tag, containing a `cui__field__label` added to a `label` tag and `cui__field__input` added to an `input` tag.

The reasons to use a label as a placeholder are 1) makes it easier to transition from the placeholder to the floarint label, because it's the same element 2) there's an issue that some browsers don't respect input padding 3) that's the standard way many libraries that have floating label components implement it, like [material-ui](http://material-ui.com/#/components/text-fields) and [polymer](https://elements.polymer-project.org/elements/paper-input?view=demo:demo/index.html) and 4) it eliminates the need for fake placeholders on older browsers.

The trade-off is that we can't rely on `focus` and `active` pseudo-selectors for the input, so we need to programatically add classes to the wrapper.

___

- [Overview](#Field/overview)
- [Floating label](#Field/floating label)
- [Examples](#Field/examples)
- [Regular](#Field/regular)
	- [focused](#Field/regular/focused)
	- [filled](#Field/regular/filled)
	- [error](#Field/regular/error)
	- [warning](#Field/regular/warning)
- [Stacked](#Field/stacked)
	- [side by side](#Field/stacked/side by side)
	- [top part](#Field/stacked/top part)
	- [bottom part](#Field/stacked/bottom part)
- [Icon](#Field/icon)
	- [focused](#Field/icon/focused)
	- [filled](#Field/icon/filled)
	- [error](#Field/icon/error)
	- [warning](#Field/icon/warning)

<a name="Field/overview"></a>
## Overview

Here's a showcase of all fields. Pass your mouse over the elements to see the hover state.

<div style="overflow: hidden">
  <ul class="overview" style="width: 45%; float: left;">
    <li>
      <div class="cui__field">
        <label class="cui__field__label">
          Please write your email address
        </label>
        <input class="cui__field__input" />
      </div>
    </li>
    <li>
      <div class="cui__field is-focused">
        <label class="cui__field__label">
          Please write your email address
        </label>
        <input class="cui__field__input" />
      </div>
    </li>
    <li>
      <div class="cui__field is-focused is-filled">
        <label class="cui__field__label">
          Please write your email address
        </label>
        <input class="cui__field__input" value="email@example.com" />
      </div>
    </li>
    <li>
      <div class="cui__field is-filled">
        <label class="cui__field__label">
          Please write your email address
        </label>
        <input class="cui__field__input" value="email@example.com" />
      </div>
    </li>
    <li>
      <div class="cui__field is-error">
        <label class="cui__field__label">
          Invalid email
        </label>
        <input class="cui__field__input" value="invalid@" />
      </div>
    </li>
    <li>
      <div class="cui__field is-warning">
        <label class="cui__field__label">
          Are you sure the domain is exanple?
        </label>
        <input class="cui__field__input" value="email@exanple.com" />
      </div>
    </li>
		<li>
      <div class="cui__field--icon is-focused is-filled">
				<span class="cui__field--icon__icon cui__icon--mail"></span>
        <label class="cui__field--icon__label">
          Please write your email address
        </label>
        <input class="cui__field--icon__input" value="email@example.com" />
      </div>
    </li>
  </ul>

  <ul class="overview" style="width: 45%; float: left;">
    <li>
      <div class="cui__field -big">
        <label class="cui__field__label">
          Please write your email address
        </label>
        <input class="cui__field__input" />
      </div>
    </li>
    <li>
      <div class="cui__field is-focused -big">
        <label class="cui__field__label">
          Please write your email address
        </label>
        <input class="cui__field__input" />
      </div>
    </li>
    <li>
      <div class="cui__field is-focused is-filled -big">
        <label class="cui__field__label">
          Please write your email address
        </label>
        <input class="cui__field__input" value="email@example.com" />
      </div>
    </li>
    <li>
      <div class="cui__field is-filled -big">
        <label class="cui__field__label">
          Please write your email address
        </label>
        <input class="cui__field__input" value="email@example.com" />
      </div>
    </li>
    <li>
      <div class="cui__field is-error -big">
        <label class="cui__field__label">
          Please write your email address
        </label>
        <input class="cui__field__input" value="email@" />
      </div>
    </li>
    <li>
      <div class="cui__field is-warning -big">
        <label class="cui__field__label">
          Please write your email address
        </label>
        <input class="cui__field__input" value="email@" />
      </div>
    </li>
  </ul>
</div>

<a name="Field/floating label"></a>
## Floating label

When fields are blank, their labels will behave as placeholders. When the field is being filled, the label should move to the top. You can verify this behaviour in the following example:

<div>
  <div class="cui__field" style="width: 45%; float: left;">
    <label class="cui__field__label">
      Please write your email address
    </label>
    <input class="cui__field__input" oninput="floatingLabel(this)" />
  </div>
  <div class="cui__field -big" style="width: 45%; float: left; margin-left: 10px;">
    <label class="cui__field__label">
      Please write your email address
    </label>
    <input class="cui__field__input" oninput="floatingLabel(this)" />
  </div>
	<div style="clear: both"></div>
</div>

<a name="Field/examples"></a>
## Examples

- [Billing Address form](examples/base/billing_address.html)

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
    <label class="cui__field__label is-focused">
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

<a name="Field/stacked"></a>
## Stacked fields

Fields can be stacked together to form a single organic visual component.
<div style="overflow: hidden">
  <ul class="overview">
    <li>
      <div class="cui__field -left -half">
        <label class="cui__field__label">
          Name
        </label>
        <input class="cui__field__input" />
      </div>
      <div class="cui__field -right -half">
        <label class="cui__field__label">
          Lastname
        </label>
        <input class="cui__field__input" />
      </div>
			<div style="clear: both"></div>
    </li>
	</ul>
</div>

<a name="Field/stacked/side by side"></a>
### Side by side

```html
<div class="cui__field -left -half">
	<label class="cui__field__label">
		Name
	</label>
	<input class="cui__field__input" />
</div>
<div class="cui__field -right -half">
	<label class="cui__field__label">
		Lastname
	</label>
	<input class="cui__field__input" />
</div>
```

<a name="Field/stacked/top part"></a>
### Top part

```html
<div class="cui__field -top-left -half">
	<label class="cui__field__label">
		Name
	</label>
	<input class="cui__field__input" />
</div>
<div class="cui__field -top-right -half">
	<label class="cui__field__label">
		Lastname
	</label>
	<input class="cui__field__input" />
</div>
```

<a name="Field/stacked/bottom part"></a>
### Bottom part

```html
<div class="cui__field -bottom-left -half">
	<label class="cui__field__label">
		City
	</label>
	<input class="cui__field__input" />
</div>
<div class="cui__field -bottom-right -half">
	<label class="cui__field__label">
		Country
	</label>
	<input class="cui__field__input" />
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
	<span class="cui__field--icon__icon cui__icon--lock is-focused"></span>
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
	<span class="cui__field--icon__icon cui__icon--lock is-error"></span>
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
	<span class="cui__field--icon__icon cui__icon--lock is-warning"></span>
	<label class="cui__field--icon__label is-focused">
		Are you sure the domain is example?
	</label>
	<input class="cui__field--icon__input" value="email@exanple.com" />
</div>
```
