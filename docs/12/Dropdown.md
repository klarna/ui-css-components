# Dropdown

Dropdowns are family of components that present the user with multiple options. The basic version is just a styling over the HTML `<select>` element, but more advanced versions include a combination of select with radio buttons, a radio button selector and a checkbox group.

___

- [Examples](#Dropdown/examples)
- [Native](#Dropdown/native)
  - [focused](#Dropdown/native/focused)
  - [selected](#Dropdown/native/selected)
  - [error](#Dropdown/native/error)
  - [warning](#Dropdown/native/warning)

<a name="Dropdown/examples"></a>
## Examples

- [Checkout form](examples/base/checkout.html)

<a name="Dropdown/native"></a>
## Native

<div class="cui__field__wrapper">
  <div class="cui__dropdown--native -top">
    <label class="cui__dropdown--native__label">
      Name
    </label>
    <select class="cui__dropdown--native__select">
      <option>Åke</option>
      <option>Sven</option>
    </select>
  </div>
  <div class="cui__dropdown--native -quarter -square">
    <label class="cui__dropdown--native__label">
      Title
    </label>
    <select class="cui__dropdown--native__select">
      <option>Dr</option>
      <option>Eng</option>
    </select>
  </div>
  <div class="cui__dropdown--native -half -center">
    <label class="cui__dropdown--native__label">
      Title
    </label>
    <select class="cui__dropdown--native__select">
      <option>Dr</option>
      <option>Eng</option>
    </select>
  </div>
  <div class="cui__dropdown--native -quarter -center">
    <label class="cui__dropdown--native__label">
      Title
    </label>
    <select class="cui__dropdown--native__select">
      <option>Dr</option>
      <option>Eng</option>
    </select>
  </div>
  <div class="cui__dropdown--native -bottom-left -half">
    <label class="cui__dropdown--native__label">
      Title
    </label>
    <select class="cui__dropdown--native__select">
      <option>Dr</option>
      <option>Eng</option>
    </select>
  </div>
  <div class="cui__dropdown--native -bottom-right -half">
    <label class="cui__dropdown--native__label">
      Title
    </label>
    <select class="cui__dropdown--native__select">
      <option>Dr</option>
      <option>Eng</option>
    </select>
  </div>
</div>

The native dropdown component is just a set of styles over the native HTML dropdown. It can be combined with Fields into stacked fieldsets. The actual list of options is provided by the native behavior.

Stacking Dropdowns is done in the same way that Fields. Please go to the "Field" section for more details about stacking.

```html
<div class="cui__dropdown--native">
  <label class="cui__dropdown--native__label">
    This is a dropdown
  </label>

  <select class="cui__dropdown--native__select">
    <option>And this is an option</option>
    <option>A second alternative</option>
  </select>
</div>
```

<a name="Dropdown/native/focused"></a>
## Focused

```html
<div class="cui__dropdown--native is-focused">
  <label class="cui__dropdown--native__label">
    This is a focused dropdown
  </label>

  <select class="cui__dropdown--native__select">
    <option>And this is an option</option>
    <option>A second alternative</option>
  </select>
</div>
```

<a name="Dropdown/native/selected"></a>
## Selected

```html
<div class="cui__dropdown--native is-selected">
  <label class="cui__dropdown--native__label">
    The Dropdown
  </label>

  <div class="cui__dropdown--native__current-option">
    And this is an option
  </div>

  <select class="cui__dropdown--native__select">
    <option>And this is an option</option>
    <option>A second alternative</option>
  </select>
</div>
```

<a name="Dropdown/native/error"></a>
## Error

```html
<div class="cui__dropdown--native is-error -half -left">
  <div class="cui__dropdown--native__floating-label">
    You need to select some of the options
  </div>

  <label class="cui__dropdown--native__label">
    A dropdown
  </label>

  <select class="cui__dropdown--native__select">
    <option>And this is an option</option>
    <option>A second alternative</option>
  </select>
</div>

<div class="cui__dropdown--native is-error -half -right">
  <div class="cui__dropdown--native__floating-label">
    Sorry, the option you selected is not available
  </div>

  <label class="cui__dropdown--native__current-option">
    Non-available option
  </label>

  <select class="cui__dropdown--native__select">
    <option>And this is an option</option>
    <option>A second alternative</option>
  </select>
</div>
```

<a name="Dropdown/native/warning"></a>
## Warning

```html
<div class="cui__dropdown--native is-warning -half -left">
  <div class="cui__dropdown--native__floating-label">
    It is important that you select an option
  </div>

  <label class="cui__dropdown--native__label">
    A dropdown
  </label>

  <select class="cui__dropdown--native__select">
    <option>And this is an option</option>
    <option>A second alternative</option>
  </select>
</div>

<div class="cui__dropdown--native is-warning -half -right">
  <div class="cui__dropdown--native__floating-label">
    The option you selected is not recommended
  </div>

  <div class="cui__dropdown--native__current-option">
    A non-ideal option
  </div>

  <select class="cui__dropdown--native__select">
    <option>And this is an option</option>
    <option>A second alternative</option>
  </select>
</div>
```
