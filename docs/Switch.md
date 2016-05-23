# Switch

The Switch component are a set of checkbox-type components, both in list and standalone. In mobile the look and feel of the component is always the slider style switch, while in desktop there is the option of being either the same style as mobile or a more traditional checkbox mark.

___

- [Examples](#Switch/examples)
- [Single](#Switch/single)
  - [right](#Switch/single/right)
  - [pressed](#Switch/single/pressed)
  - [checked](#Switch/single/checked)
  - [error](#Switch/single/error)
  - [checked and pressed](#Switch/single/checked and pressed)
  - [checkbox](#Switch/single/checkbox)
    - [legal](#Switch/single/checkbox/legal)
  - [disabled](#Switch/single/disabled)
  - [dynamic styling](#Switch/single/dynamic-styling)
- [Multiple](#Switch/multiple)
  - [checkbox](#Switch/multiple/checkbox)
  - [borderless](#Switch/multiple/borderless)
  - [checkbox borderless](#Switch/multiple/checkbox borderless)
  - [disabled](#Switch/multiple/disabled)
  - [disabled checkbox](#Switch/multiple/disabled checkbox)
  - [disabled borderless checkbox](#Switch/multiple/disabled borderless checkbox)
  - [dynamic styling](#Switch/multiple/dynamic-styling)

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

<a name="Switch/single/error"></a>
### Error

```html
<div class="cui__switch is-error">
  This is a toggle switch in an error state
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

<a name="Switch/single/checkbox/legal"></a>
#### Legal

```html
<div class="cui__switch checkbox legal">
  This is checkbox that signals approving legally required text that is too long to be rendered with a regular size and needs to be slightly smaller to fit.
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

<a name="Switch/single/dynamic-styling"></a>
### Dynamic styling

```html
<div class="cui__switch dynamic-styling">
  <div
    class="cui__switch__bullet"
    style="background-color: #3500C8; border-color: #3500C8;"></div>
  <div
    class="cui__switch__bullet__checkmark"
    style="background-color: #F9FF3C;"></div>
  This is a toggle switch with custom styles
</div>

<div class="cui__switch is-checked dynamic-styling">
  <div
    class="cui__switch__bullet"
    style="background-color: #3500C8; border-color: #3500C8;"></div>
  <div
    class="cui__switch__bullet__checkmark"
    style="background-color: #F9FF3C;"></div>
  This is a toggle switch with custom styles
</div>

<div class="cui__switch checkbox dynamic-styling">
  <div
    class="cui__switch__bullet"
    style="background-color: #3500C8; border-color: #3500C8;"></div>
  <div
    class="cui__switch__bullet__checkmark">
    <svg
      width="14px"
      height="14px"
      viewBox="0 0 14 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
            <g transform="translate(0, -1508)">
              <g transform="translate(0, 1457)">
                <g transform="translate(0, 33)">
                  <g transform="translate(0, 14)">
                    <g transform="translate(0, 4)"><g>
                      <rect x="0" y="0" width="14" height="14" rx="2"></rect>
                      <path d="M3.8,6.67583361 L6.40484483,9.5982824 L10.7279517,4.2"
                      stroke="#F9FF3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
  </div>
  This is a checkbox switch with custom styles
</div>

<div class="cui__switch checkbox is-checked dynamic-styling">
  <div
    class="cui__switch__bullet"
    style="background-color: #3500C8; border-color: #3500C8;"></div>
  <div
    class="cui__switch__bullet__checkmark">
    <svg
      width="14px"
      height="14px"
      viewBox="0 0 14 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
            <g transform="translate(0, -1508)">
              <g transform="translate(0, 1457)">
                <g transform="translate(0, 33)">
                  <g transform="translate(0, 14)">
                    <g transform="translate(0, 4)"><g>
                      <rect x="0" y="0" width="14" height="14" rx="2"></rect>
                      <path d="M3.8,6.67583361 L6.40484483,9.5982824 L10.7279517,4.2"
                      stroke="#F9FF3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
  </div>
  This is a checkbox switch with custom styles
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

<a name="Switch/multiple/dynamic-styling"></a>
### Dynamic styling

```html
<div class="cui__switch--multiple">
  <div class="cui__switch--multiple__option is-checked dynamic-styling">
    <div
      class="cui__switch__bullet"
      style="background-color: #3500C8; border-color: #3500C8;"></div>
    <div
      class="cui__switch__bullet__checkmark"
      style="background-color: #F9FF3C;"></div>

    <div class="cui__switch--multiple__option__heading">
      This is a multiple choice
    </div>

    <div class="cui__switch--multiple__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div
        class="cui__promo-label"
        style="background-color: #3500C8; color: #F9FF3C;">
        promo
      </div>
    </div>
  </div>

  <div class="cui__switch--multiple__option dynamic-styling">
    <div
      class="cui__switch__bullet"
      style="background-color: #3500C8; border-color: #3500C8;"></div>
    <div
      class="cui__switch__bullet__checkmark"
      style="background-color: #F9FF3C;"></div>

    <div class="cui__switch--multiple__option__heading">
      Second item
    </div>

    <div class="cui__switch--multiple__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__switch--multiple__option dynamic-styling">
    <div
      class="cui__switch__bullet"
      style="background-color: #3500C8; border-color: #3500C8;"></div>
    <div
      class="cui__switch__bullet__checkmark"
      style="background-color: #F9FF3C;"></div>

    <div class="cui__switch--multiple__option__heading">
      Third item
    </div>

    <div class="cui__switch--multiple__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>

<div class="cui__switch--multiple checkbox">
  <div class="cui__switch--multiple__option is-checked dynamic-styling">
    <div
      class="cui__switch__bullet"
      style="background-color: #3500C8; border-color: #3500C8;"></div>
    <div
      class="cui__switch__bullet__checkmark">
      <svg
        width="14px"
        height="14px"
        viewBox="0 0 14 14"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
              <g transform="translate(0, -1508)">
                <g transform="translate(0, 1457)">
                  <g transform="translate(0, 33)">
                    <g transform="translate(0, 14)">
                      <g transform="translate(0, 4)"><g>
                        <rect x="0" y="0" width="14" height="14" rx="2"></rect>
                        <path d="M3.8,6.67583361 L6.40484483,9.5982824 L10.7279517,4.2"
                        stroke="#F9FF3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
    </div>

    <div class="cui__switch--multiple__option__heading">
      This is a multiple choice
    </div>

    <div class="cui__switch--multiple__option__description">
      This is a description Sed tristique ex lectus, bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
      <div
        class="cui__promo-label"
        style="background-color: #3500C8; color: #F9FF3C;">
        promo
      </div>
    </div>
  </div>

  <div class="cui__switch--multiple__option dynamic-styling">
    <div
      class="cui__switch__bullet"
      style="background-color: #3500C8; border-color: #3500C8;"></div>
    <div
      class="cui__switch__bullet__checkmark">
      <svg
        width="14px"
        height="14px"
        viewBox="0 0 14 14"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
              <g transform="translate(0, -1508)">
                <g transform="translate(0, 1457)">
                  <g transform="translate(0, 33)">
                    <g transform="translate(0, 14)">
                      <g transform="translate(0, 4)"><g>
                        <rect x="0" y="0" width="14" height="14" rx="2"></rect>
                        <path d="M3.8,6.67583361 L6.40484483,9.5982824 L10.7279517,4.2"
                        stroke="#F9FF3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
    </div>

    <div class="cui__switch--multiple__option__heading">
      Second item
    </div>

    <div class="cui__switch--multiple__option__description">
      Bibendum aliquet orci facilisis nec. Lorem ipsum sit amet mercuri.
    </div>
  </div>

  <div class="cui__switch--multiple__option dynamic-styling">
    <div
      class="cui__switch__bullet"
      style="background-color: #3500C8; border-color: #3500C8;"></div>
    <div
      class="cui__switch__bullet__checkmark">
      <svg
        width="14px"
        height="14px"
        viewBox="0 0 14 14"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
              <g transform="translate(0, -1508)">
                <g transform="translate(0, 1457)">
                  <g transform="translate(0, 33)">
                    <g transform="translate(0, 14)">
                      <g transform="translate(0, 4)"><g>
                        <rect x="0" y="0" width="14" height="14" rx="2"></rect>
                        <path d="M3.8,6.67583361 L6.40484483,9.5982824 L10.7279517,4.2"
                        stroke="#F9FF3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
    </div>

    <div class="cui__switch--multiple__option__heading">
      Third item
    </div>

    <div class="cui__switch--multiple__option__description">
      Facilisis nec. Lorem ipsum sit amet mercuri. Tristique ex lectus, bibendum aliquet orci facilisis nec.
    </div>
  </div>
</div>
```
