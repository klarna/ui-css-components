# Switch

The Switch component are a set of checkbox-type components, both in list and standalone. In mobile the look and feel of the component is always the slider style switch, while in desktop there is the option of being either the same style as mobile or a more traditional checkbox mark.

___

- [Examples](#Switch/examples)
- [Single](#Switch/single)
  - [right](#Switch/single/right)
  - [pressed](#Switch/single/pressed)
  - [checked](#Switch/single/checked)
  - [checked and pressed](#Switch/single/checked and pressed)
  - [checkbox](#Switch/single/checkbox)
  - [disabled](#Switch/single/disabled)
- [Multiple](#Switch/multiple)
  - [checkbox](#Switch/multiple/checkbox)
  - [borderless](#Switch/multiple/borderless)
  - [checkbox borderless](#Switch/multiple/checkbox borderless)
  - [disabled](#Switch/multiple/disabled)
  - [disabled checkbox](#Switch/multiple/disabled checkbox)
  - [disabled borderless checkbox](#Switch/multiple/disabled borderless checkbox)

<a name="Switch/examples"></a>
## Examples

- [Selectors](examples/base/selectors.html)

<a name="Switch/single"></a>
## Single

```html
<div class="cui__switch">
  This is a toggle switch
</div>
```

<a name="Switch/single/right"></a>
### Right

```html
<div class="cui__switch right">
  This is a toggle switch on the right side
</div>
```

<a name="Switch/single/checked"></a>
### Checked

```html
<div class="cui__switch is-checked">
  This is a toggle switch checked
</div>
```

<a name="Switch/single/pressed"></a>
### Pressed

```html
<div class="cui__switch is-pressed">
  This is a toggle switch checked
</div>
```

<a name="Switch/single/checked and pressed"></a>
### Checked and pressed

```html
<div class="cui__switch is-pressed is-checked">
  This is a toggle switch checked
</div>
```

<a name="Switch/single/checkbox"></a>
### Checkbox

```html
<div class="cui__switch checkbox">
  This is a toggle switch with checkbox styles on desktop
</div>
```

<a name="Switch/single/checkbox disabled"></a>
### Checkbox disabled

```html
<div class="cui__switch checkbox is-disabled">
  This is a disabled toggle switch with checkbox styles on desktop
</div>
```

<a name="Switch/single/disabled"></a>
### Disabled

```html
<div class="cui__switch is-disabled">
  This is a toggle switch disabled
</div>
```

<a name="Switch/multiple"></a>
## Multiple

```html
<div class="cui__switch--multiple">
  <div class="cui__switch--multiple__option is-checked">
    <div class="cui__switch--multiple__option__heading">
      This is a multiple choice
    </div>

    <div class="cui__switch--multiple__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__switch--multiple__option">
    <div class="cui__switch--multiple__option__heading">
      Second item
    </div>

    <div class="cui__switch--multiple__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__switch--multiple__option">
    <div class="cui__switch--multiple__option__heading">
      Third item
    </div>

    <div class="cui__switch--multiple__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```

<a name="Switch/multiple/checkbox"></a>
### Checkbox

```html
<div class="cui__switch--multiple checkbox">
  <div class="cui__switch--multiple__option is-checked">
    <div class="cui__switch--multiple__option__heading">
      This is a multiple choice
    </div>

    <div class="cui__switch--multiple__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__switch--multiple__option">
    <div class="cui__switch--multiple__option__heading">
      Second item
    </div>

    <div class="cui__switch--multiple__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__switch--multiple__option">
    <div class="cui__switch--multiple__option__heading">
      Third item
    </div>

    <div class="cui__switch--multiple__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```

<a name="Switch/multiple/borderless"></a>
### Borderless

```html
<div class="cui__switch--multiple borderless">
  <div class="cui__switch--multiple__option is-checked">
    <div class="cui__switch--multiple__option__heading">
      This is a multiple choice
    </div>

    <div class="cui__switch--multiple__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__switch--multiple__option">
    <div class="cui__switch--multiple__option__heading">
      Second item
    </div>

    <div class="cui__switch--multiple__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__switch--multiple__option">
    <div class="cui__switch--multiple__option__heading">
      Third item
    </div>

    <div class="cui__switch--multiple__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```

<a name="Switch/multiple/checkbox borderless"></a>
### Checkbox borderless

```html
<div class="cui__switch--multiple borderless checkbox">
  <div class="cui__switch--multiple__option is-checked">
    <div class="cui__switch--multiple__option__heading">
      This is a multiple choice
    </div>

    <div class="cui__switch--multiple__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__switch--multiple__option">
    <div class="cui__switch--multiple__option__heading">
      Second item
    </div>

    <div class="cui__switch--multiple__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__switch--multiple__option">
    <div class="cui__switch--multiple__option__heading">
      Third item
    </div>

    <div class="cui__switch--multiple__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```

<a name="Switch/multiple/disabled"></a>
### Disabled

```html
<div class="cui__switch--multiple is-disabled">
  <div class="cui__switch--multiple__option is-checked">
    <div class="cui__switch--multiple__option__heading">
      This is a multiple choice
    </div>

    <div class="cui__switch--multiple__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__switch--multiple__option is-checked">
    <div class="cui__switch--multiple__option__heading">
      Second item
    </div>

    <div class="cui__switch--multiple__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__switch--multiple__option">
    <div class="cui__switch--multiple__option__heading">
      Third item
    </div>

    <div class="cui__switch--multiple__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```

<a name="Switch/multiple/disabled checkbox"></a>
### Disabled checkbox

```html
<div class="cui__switch--multiple checkbox is-disabled">
  <div class="cui__switch--multiple__option is-checked">
    <div class="cui__switch--multiple__option__heading">
      This is a multiple choice
    </div>

    <div class="cui__switch--multiple__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__switch--multiple__option is-checked">
    <div class="cui__switch--multiple__option__heading">
      Second item
    </div>

    <div class="cui__switch--multiple__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__switch--multiple__option">
    <div class="cui__switch--multiple__option__heading">
      Third item
    </div>

    <div class="cui__switch--multiple__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```

<a name="Switch/multiple/disabled borderless checkbox"></a>
### Disabled borderless checkbox

```html
<div class="cui__switch--multiple checkbox borderless is-disabled">
  <div class="cui__switch--multiple__option is-checked">
    <div class="cui__switch--multiple__option__heading">
      This is a multiple choice
    </div>

    <div class="cui__switch--multiple__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div class="cui__promo-label">promo</div>
    </div>
  </div>

  <div class="cui__switch--multiple__option is-checked">
    <div class="cui__switch--multiple__option__heading">
      Second item
    </div>

    <div class="cui__switch--multiple__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__switch--multiple__option">
    <div class="cui__switch--multiple__option__heading">
      Third item
    </div>

    <div class="cui__switch--multiple__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```
