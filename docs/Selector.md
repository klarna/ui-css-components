# Selector

Selectors are lists of items optimized to be compatible with a mobile experience.

___

- [Direct](#Selector/direct)
  - [simple](#Selector/direct/simple)
  - [description](#Selector/direct/description)
  - [title](#Selector/direct/title)
- [Installments](#Selector/installments)

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
      class="cui__selector--direct__icon"
      viewBox="0 0 20 20"
      stroke="#3c3c3e"
      fill="none"
      fill-rule="evenodd"
      stroke-linecap="round"
      stroke-width="1">
      <path d="M8,6 l4,4 l-4,4"/>
    </svg>
  </div>

  <div class="cui__selector--direct__item">
    <div class="cui__selector--direct__label">
      Item 2
    </div>

    <svg
      class="cui__selector--direct__icon"
      viewBox="0 0 20 20"
      stroke="#3c3c3e"
      fill="none"
      fill-rule="evenodd"
      stroke-linecap="round"
      stroke-width="1">
      <path d="M8,6 l4,4 l-4,4"/>
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
      class="cui__selector--direct__icon"
      viewBox="0 0 20 20"
      stroke="#3c3c3e"
      fill="none"
      fill-rule="evenodd"
      stroke-linecap="round"
      stroke-width="1">
      <path d="M8,6 l4,4 l-4,4"/>
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
      class="cui__selector--direct__icon"
      viewBox="0 0 20 20"
      stroke="#3c3c3e"
      fill="none"
      fill-rule="evenodd"
      stroke-linecap="round"
      stroke-width="1">
      <path d="M8,6 l4,4 l-4,4"/>
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
      class="cui__selector--direct__icon"
      viewBox="0 0 20 20"
      stroke="#3c3c3e"
      fill="none"
      fill-rule="evenodd"
      stroke-linecap="round"
      stroke-width="1">
      <path d="M8,6 l4,4 l-4,4"/>
    </svg>
  </div>
</div>
```


<a name="Selector/direct/title"></a>
### Title

```html
<div class="cui__selector--direct title">
  <h2 class="cui__selector--direct__title">
    Description
  </h2>

  <div class="cui__selector--direct__item">
    <div class="cui__selector--direct__label">
      Item 1
    </div>

    <svg
      class="cui__selector--direct__icon"
      viewBox="0 0 20 20"
      stroke="#3c3c3e"
      fill="none"
      fill-rule="evenodd"
      stroke-linecap="round"
      stroke-width="1">
      <path d="M8,6 l4,4 l-4,4"/>
    </svg>
  </div>

  <div class="cui__selector--direct__item">
    <div class="cui__selector--direct__label">
      Item 2
    </div>

    <svg
      class="cui__selector--direct__icon"
      viewBox="0 0 20 20"
      stroke="#3c3c3e"
      fill="none"
      fill-rule="evenodd"
      stroke-linecap="round"
      stroke-width="1">
      <path d="M8,6 l4,4 l-4,4"/>
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
      class="cui__selector--direct__icon"
      viewBox="0 0 20 20"
      stroke="#3c3c3e"
      fill="none"
      fill-rule="evenodd"
      stroke-linecap="round"
      stroke-width="1">
      <path d="M8,6 l4,4 l-4,4"/>
    </svg>
  </div>
</div>
```

<a name="Selector/installments"></a>
## Installments

```html
<div class="cui__selector--installments">
   <input class="cui__selector--installments__input" type="radio" name="installments" id="installments1" />
   <label class="cui__selector--installments__label third" for="installments1">
     <span class="cui__selector--installments__label__value">$64.17/mo.</span>
     <span class="cui__selector--installments__label__connector">for</span>
     <span class="cui__selector--installments__label__info">6 months</span>
     <span class="cui__selector--installments__label__highlight"></span>
   </label>

   <input class="cui__selector--installments__input" type="radio" name="installments" id="installments2" />
   <label class="cui__selector--installments__label third" for="installments2">
     <span class="cui__selector--installments__label__value">$32.09/mo.</span>
     <span class="cui__selector--installments__label__connector">for</span>
     <span class="cui__selector--installments__label__info">12 months</span>
     <span class="cui__selector--installments__label__highlight"></span>
   </label>

   <input class="cui__selector--installments__input" type="radio" name="installments" id="installments3" />
   <label class="cui__selector--installments__label third" for="installments3">
     <span class="cui__selector--installments__label__value">$16.05/mo.</span>
     <span class="cui__selector--installments__label__connector">for</span>
     <span class="cui__selector--installments__label__info">24 months</span>
     <span class="cui__selector--installments__label__highlight"></span>
   </label>
</div>
```
