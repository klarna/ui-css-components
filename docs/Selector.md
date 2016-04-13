# Selector

Selectors are lists of items optimized to be compatible with a mobile experience.

___

- [Direct](#Selector/direct)
  - [simple](#Selector/direct/simple)
  - [description](#Selector/direct/description)

<a name="Selector/direct"></a>
## Direct

<a name="Selector/direct/simple"></a>
### Simple

```html
<div class="cui__selector--direct">
  <div class="cui__selector--direct__item">
    <div class="cui__selector--direct__label">
      Item 1
    </div>

    <svg
      class="cui__selector--direct__caret"
      width="20px"
      height="20px" viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M14,8 L10,12 L6,8"></path>
    </svg>
  </div>

  <div class="cui__selector--direct__item">
    <div class="cui__selector--direct__label">
      Item 2
    </div>

    <svg
      class="cui__selector--direct__caret"
      width="20px"
      height="20px" viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M14,8 L10,12 L6,8"></path>
    </svg>
  </div>

  <div class="cui__selector--direct__item">
    <div class="cui__selector--direct__label">
      Item 3
    </div>

    <div class="cui__selector--direct__value">
      Current value
    </div>

    <svg
      class="cui__selector--direct__caret"
      width="20px"
      height="20px" viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M14,8 L10,12 L6,8"></path>
    </svg>
  </div>
</div>
```

<a name="Selector/direct/description"></a>
### Description

```html
<div class="cui__selector--direct">
  <div class="cui__selector--direct__item">
    <div class="cui__selector--direct__label">
      Invoice
    </div>

    <p class="cui__selector--direct__description">
      Klarna will send you an email with payment instructions.
    </p>

    <p class="cui__selector--direct__description">
      <span class="cui__promo-label">One tap and you're done</span>
    </p>

    <svg
      class="cui__selector--direct__caret"
      width="20px"
      height="20px" viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M14,8 L10,12 L6,8"></path>
    </svg>
  </div>

  <div class="cui__selector--direct__item">
    <div class="cui__selector--direct__label">
      Credit or debit card
    </div>

    <p class="cui__selector--direct__description">
      You'll have to enter your card details
    </p>

    <svg
      class="cui__selector--direct__caret"
      width="20px"
      height="20px" viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M14,8 L10,12 L6,8"></path>
    </svg>
  </div>
</div>
```
