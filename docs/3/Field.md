# Field

The field is a molecular element. It consists of a wrapper with the `cui__field` block, which should be added to a `div` tag, containing a `cui__field__label` added to a `label` tag and `cui__field__input` added to an `input` tag.

The reasons to use a label as a placeholder are 1) makes it easier to transition from the placeholder to the floarint label, because it's the same element 2) there's an issue that some browsers don't respect input padding 3) that's the standard way many libraries that have floating label components implement it, like [material-ui](http://material-ui.com/#/components/text-fields) and [polymer](https://elements.polymer-project.org/elements/paper-input?view=demo:demo/index.html) and 4) it eliminates the need for fake placeholders on older browsers.

The trade-off is that we can't rely on `focus` and `active` pseudo-selectors for the input, so we need to programatically add classes to the wrapper.

___

- [Overview](#Field/overview)
- [Floating label](#Field/floating label)
- [Regular](#Field/regular)
	- [focused](#Field/regular/focused)
	- [filled](#Field/regular/filled)
	- [error](#Field/regular/error)
	- [warning](#Field/regular/warning)

<a name="Field/overview"></a>
## Overview

Here's a showcase of all fields. Pass your mouse over the elements to see the hover state.

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
        Please write your email address
      </label>
      <input class="cui__field__input" value="email@" />
    </div>
  </li>
  <li>
    <div class="cui__field is-warning">
      <label class="cui__field__label">
        Please write your email address
      </label>
      <input class="cui__field__input" value="email@" />
    </div>
  </li>
</ul>

<ul class="overview" style="width: 45%; display: inline-block;">
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

<a name="Field/floating label"></a>
## Floating label

When fields are blank, their labels will behave as placeholders. When the field is being filled, the label should move to the top. You can verify this behaviour in the following example:

<div class="example">
  <div class="cui__field" style="width: 45%; display: inline-block;">
    <label class="cui__field__label">
      Please write your email address
    </label>
    <input class="cui__field__input" oninput="floatingLabel(this)" />
  </div>
  <div class="cui__field -big" style="width: 45%; display: inline-block;">
    <label class="cui__field__label">
      Please write your email address
    </label>
    <input class="cui__field__input" oninput="floatingLabel(this)" />
  </div>

</div>

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
