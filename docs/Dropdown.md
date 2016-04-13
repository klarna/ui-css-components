# Dropdown

Dropdowns are family of components that present the user with multiple options. The basic version is just a styling over the HTML `<select>` element, but more advanced versions include a combination of select with radio buttons, a radio button selector and a checkbox group.

___

- [Examples](#Dropdown/examples)
- [Native](#Dropdown/native)
  - [focused](#Dropdown/native/focused)
  - [loading](#Dropdown/native/loading)
  - [selected](#Dropdown/native/selected)
  - [disabled](#Dropdown/native/disabled)
  - [disabled and selected](#Dropdown/native/disabled and selected)
  - [disabled and loading](#Dropdown/native/disabled and loading)
  - [error](#Dropdown/native/error)
  - [warning](#Dropdown/native/warning)
- [Custom](#Dropdown/custom)
  - [collapsed](#Dropdown/custom/collapsed)
  - [loading](#Dropdown/custom/loading)
  - [disabled](#Dropdown/custom/disabled)
  - [disabled and collapsed](#Dropdown/custom/disabled and collapsed)
- [Radio](#Dropdown/radio)
  - [borderless](#Dropdown/radio/borderless)
  - [disabled](#Dropdown/radio/disabled)
  - [borderless disabled](#Dropdown/radio/borderless disabled)

<a name="Dropdown/examples"></a>
## Examples

- [Checkout form](examples/base/checkout.html)
- [Selectors](examples/base/selectors.html)

<a name="Dropdown/native"></a>
## Native

<div class="cui__fieldset">
  <div class="cui__dropdown--native top">
    <label class="cui__dropdown--native__label">
      Name
    </label>
    <select class="cui__dropdown--native__select">
      <option>Åke</option>
      <option>Sven</option>
    </select>
  </div>
  <div class="cui__dropdown--native quarter square">
    <label class="cui__dropdown--native__label">
      Title
    </label>
    <select class="cui__dropdown--native__select">
      <option>Dr</option>
      <option>Eng</option>
    </select>
  </div>
  <div class="cui__dropdown--native half center">
    <label class="cui__dropdown--native__label">
      Title
    </label>
    <select class="cui__dropdown--native__select">
      <option>Dr</option>
      <option>Eng</option>
    </select>
  </div>
  <div class="cui__dropdown--native quarter center">
    <label class="cui__dropdown--native__label">
      Title
    </label>
    <select class="cui__dropdown--native__select">
      <option>Dr</option>
      <option>Eng</option>
    </select>
  </div>
  <div class="cui__dropdown--native bottom-left half">
    <label class="cui__dropdown--native__label">
      Title
    </label>
    <select class="cui__dropdown--native__select">
      <option>Dr</option>
      <option>Eng</option>
    </select>
  </div>
  <div class="cui__dropdown--native bottom-right half">
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
### Focused

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

<a name="Dropdown/native/loading"></a>
### Loading

```html
<div class="cui__dropdown--native is-loading">
  <label class="cui__dropdown--native__label">
    This is a dropdown that is loading
  </label>

  <select class="cui__dropdown--native__select">
    <option>And this is an option</option>
    <option>A second alternative</option>
  </select>
</div>
```

<a name="Dropdown/native/selected"></a>
### Selected

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

<a name="Dropdown/native/disabled"></a>
### Disabled

```html
<div class="cui__dropdown--native is-disabled">
  <label class="cui__dropdown--native__label">
    This is a dropdown that is disabled
  </label>
</div>
```

<a name="Dropdown/native/disabled and selected"></a>
### Disabled and selected

```html
<div class="cui__dropdown--native is-disabled is-selected">
  <label class="cui__dropdown--native__label">
    This is a dropdown that is disabled
  </label>

  <div class="cui__dropdown--native__current-option">
    And this is the selected option
  </div>
</div>
```

<a name="Dropdown/native/disabled and loading"></a>
### Disabled and loading

```html
<div class="cui__dropdown--native is-disabled is-loading">
  <label class="cui__dropdown--native__label">
    This is a dropdown that is disabled
  </label>
</div>
```

<a name="Dropdown/native/error"></a>
### Error

```html
<div class="cui__dropdown--native is-error half left">
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

<div class="cui__dropdown--native is-error half right">
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
### Warning

```html
<div class="cui__dropdown--native is-warning half left">
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

<div class="cui__dropdown--native is-warning half right">
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

<a name="Dropdown/custom"></a>
## Custom

```html
<div class="cui__dropdown--custom">
  <div class="cui__dropdown--custom__option is-selected">
    <div class="cui__dropdown--custom__option__heading">
      This is a custom selector
    </div>

    <div class="cui__dropdown--custom__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__dropdown--custom__option">
    <div class="cui__dropdown--custom__option__heading">
      Second item
    </div>

    <div class="cui__dropdown--custom__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__dropdown--custom__option">
    <div class="cui__dropdown--custom__option__heading">
      Third item
    </div>

    <div class="cui__dropdown--custom__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```

<a name="Dropdown/custom/collapsed"></a>
### Collapsed

```html
<div class="cui__dropdown--custom is-collapsed">
  <div class="cui__dropdown--custom__option is-selected">
    <div class="cui__dropdown--custom__option__heading">
      This is a custom selector
    </div>

    <div class="cui__dropdown--custom__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__dropdown--custom__option">
    <div class="cui__dropdown--custom__option__heading">
      Second item
    </div>

    <div class="cui__dropdown--custom__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__dropdown--custom__option">
    <div class="cui__dropdown--custom__option__heading">
      Third item
    </div>

    <div class="cui__dropdown--custom__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```

<a name="Dropdown/custom/loading"></a>
### Loading

```html
<div class="cui__dropdown--custom is-loading">
  <div class="cui__dropdown--custom__option is-selected">
    <div class="cui__dropdown--custom__option__heading">
      This is a custom selector loading
    </div>

    <div class="cui__dropdown--custom__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__dropdown--custom__option">
    <div class="cui__dropdown--custom__option__heading">
      Second item
    </div>

    <div class="cui__dropdown--custom__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__dropdown--custom__option">
    <div class="cui__dropdown--custom__option__heading">
      Third item
    </div>

    <div class="cui__dropdown--custom__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```

<a name="Dropdown/custom/disabled"></a>
### Disabled

```html
<div class="cui__dropdown--custom is-disabled">
  <div class="cui__dropdown--custom__option is-selected">
    <div class="cui__dropdown--custom__option__heading">
      This is a custom selector disabled
    </div>

    <div class="cui__dropdown--custom__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__dropdown--custom__option">
    <div class="cui__dropdown--custom__option__heading">
      Second item
    </div>

    <div class="cui__dropdown--custom__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__dropdown--custom__option">
    <div class="cui__dropdown--custom__option__heading">
      Third item
    </div>

    <div class="cui__dropdown--custom__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```

<a name="Dropdown/custom/disabled and collapsed"></a>
### Disabled and collapsed

```html
<div class="cui__dropdown--custom is-disabled is-collapsed">
  <div class="cui__dropdown--custom__option is-selected">
    <div class="cui__dropdown--custom__option__heading">
      This is a custom selector disabled and collapsed
    </div>

    <div class="cui__dropdown--custom__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__dropdown--custom__option">
    <div class="cui__dropdown--custom__option__heading">
      Second item
    </div>

    <div class="cui__dropdown--custom__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__dropdown--custom__option">
    <div class="cui__dropdown--custom__option__heading">
      Third item
    </div>

    <div class="cui__dropdown--custom__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```

<a name="Dropdown/radio"></a>
## Radio

```html
<div class="cui__dropdown--radio">
  <div class="cui__dropdown--radio__option is-selected">
    <div class="cui__dropdown--radio__option__heading">
      This is a radio selector
    </div>

    <div class="cui__dropdown--radio__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__dropdown--radio__option">
    <div class="cui__dropdown--radio__option__heading">
      Second item
    </div>

    <div class="cui__dropdown--radio__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__dropdown--radio__option">
    <div class="cui__dropdown--radio__option__heading">
      Third item
    </div>

    <div class="cui__dropdown--radio__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```

<a name="Dropdown/radio/borderless"></a>
### Borderless

```html
<div class="cui__dropdown--radio borderless">
  <div class="cui__dropdown--radio__option is-selected">
    <div class="cui__dropdown--radio__option__heading">
      This is a radio selector
    </div>

    <div class="cui__dropdown--radio__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__dropdown--radio__option">
    <div class="cui__dropdown--radio__option__heading">
      Second item
    </div>

    <div class="cui__dropdown--radio__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__dropdown--radio__option">
    <div class="cui__dropdown--radio__option__heading">
      Third item
    </div>

    <div class="cui__dropdown--radio__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```

<a name="Dropdown/radio/disabled"></a>
### Disabled

```html
<div class="cui__dropdown--radio is-disabled">
  <div class="cui__dropdown--radio__option is-selected">
    <div class="cui__dropdown--radio__option__heading">
      This is a radio selector
    </div>

    <div class="cui__dropdown--radio__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__dropdown--radio__option">
    <div class="cui__dropdown--radio__option__heading">
      Second item
    </div>

    <div class="cui__dropdown--radio__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__dropdown--radio__option">
    <div class="cui__dropdown--radio__option__heading">
      Third item
    </div>

    <div class="cui__dropdown--radio__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```

<a name="Dropdown/radio/borderless disabled"></a>
### Borderless disabled

```html
<div class="cui__dropdown--radio is-disabled">
  <div class="cui__dropdown--radio__option is-selected">
    <div class="cui__dropdown--radio__option__heading">
      This is a radio selector
    </div>

    <div class="cui__dropdown--radio__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__dropdown--radio__option">
    <div class="cui__dropdown--radio__option__heading">
      Second item
    </div>

    <div class="cui__dropdown--radio__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__dropdown--radio__option">
    <div class="cui__dropdown--radio__option__heading">
      Third item
    </div>

    <div class="cui__dropdown--radio__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```
