# Block

Blocks are the layout blocks available to place content.

- [Simple](#Block/simple)
	- [Blue](#Block/simple/blue)
- [Installments](#Block/installments)

<a name="Block/simple"></a>
## Simple

```html
<div class="cui__block">
  <h1 class="cui__title--primary">
    The default block has a white background
  </h1>
  <p class="cui__paragraph--primary">
    Some text inside helps to get an idea of how the block would look like.
  </p>
</div>
```

<a name="Block/simple/blue"></a>
### Blue

```html
<div class="cui__block blue">
  <h1 class="cui__title--primary white">
    When background is dark text color needs to be inverted manually
  </h1>

  <p class="cui__paragraph--primary white">
    And some lorem ipsum dolor sit amet et consequetur niman sulan anima lontana.
  </p>
</div>
```

<a name="Block/installments"></a>
## Installments

```html
<div class="cui__block--installments">
  <h3 class="cui__block--installments__title">
    Your Installments
  </h3>

  <div class="cui__block--installments__values">
    <div class="cui__block--installments__value">
      <h4 class="cui__block--installments__value__title">Estimated total</h4>
      <p class="cui__block--installments__value__content">
          €100
      </p>
    </div>

    <div class="cui__block--installments__value">
      <h4 class="cui__block--installments__value__title">APR</h4>
      <p class="cui__block--installments__value__content">
          9.99%<span class="cui__block--installments__value__content__clarification">†</span>
      </p>
    </div>  
  </div>
</div>
```
