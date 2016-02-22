# Preview

Preview is a text component for previewing the already-filled content of a fieldset
block.

- [Examples](#Preview/examples)
- [Default](#Preview/default)
  - [with link](#Preview/default/with link)

<a name="Preview/examples"></a>
## Examples

- [Checkout](examples/base/checkout.html)

<a name="Preview/default"></a>
## Default
```html
<h3 class="cui__subtitle condensed">
  Billing Address
</h3>

<div class="cui__preview">
  <h2 class="cui__preview__title">John Smith</h2>
  <p class="cui__preview__content">
    1425 North Avenue Street<br />
    San Francisco<br />
    94100 California<br />
    United States
  </p>
</div>
```

<a name="Preview/default/with link"></a>
### with link

```html
<h3 class="cui__subtitle condensed">
  Billing Address
</h3>

<div class="cui__preview has-link">
  <h2 class="cui__preview__title">John Smith</h2>
  <p class="cui__preview__content">
    1425 North Avenue Street<br />
    San Francisco<br />
    94100 California<br />
    United States
  </p>
  <div class="cui__preview__footer">
    <a class="cui__preview__footer__link">Change address</a>
  </div>
</div>
```
