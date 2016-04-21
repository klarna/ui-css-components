# Tooltip

The tooltip element is to be used to show more information to a user either without occupying space on the page or by making the text more relevant visually.

The tooltip doesn't dictate positioning, only layout, so this must be implemented on your side. For some use cases, CSS will do, but you may need to use JavaScript for that.

The implementation of tooltip's pointer relies on `transform: translate` rather than using `calc`, since calc known issues on IE9. Both are unsupported on IE8.

Tooltip's width is limited to **250px**. To use wider Tooltip you will need to override the `max-width`.
___

- [Tooltip](#Tooltip)
	- [Simple](#Tooltip/simple)
	- [Small](#Tooltip/small)
	- [Arrows](#Tooltip/arrows)
	- [Small with arrows](#Tooltip/arrows/small)
  - [Tooltip with border](#Tooltip-border)
  - [Simple with border](#Tooltip/simple-border)
  - [Small with border](#Tooltip/small-border)
  - [Arrows with border](#Tooltip/arrows-border)
  - [Small with arrows with border](#Tooltip/arrows/small-border)


<a name="Tooltip"></a>
## Tooltip

<a name="Tooltip/simple"></a>
### Simple

```html
<div class="cui__tooltip">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>
```

<a name="Tooltip/small"></a>
### Small

```html
<div class="cui__tooltip">
  Lorem Ipsum
</div>
```

<a name="Tooltip/arrows"></a>
### Arrows

You can add arrows on 9 different positions.

```html
<div class="cui__tooltip top-left">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    
<hr />
<div class="cui__tooltip top">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>
<hr />
<div class="cui__tooltip top-right">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>

<hr />
<div class="cui__tooltip right-top">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    
<hr />
<div class="cui__tooltip right">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>
<hr />    
<div class="cui__tooltip right-bottom">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    

<hr />
<div class="cui__tooltip bottom-right">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    
<hr />
<div class="cui__tooltip bottom">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>
<hr />    
<div class="cui__tooltip bottom-left">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    

<hr />    
<div class="cui__tooltip left-bottom">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    
<hr />
<div class="cui__tooltip left">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>
<hr />
<div class="cui__tooltip left-top">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    

```

<a name="Tooltip/arrows/small"></a>
### Small with arrow

All the arrows above also work with small tooltips.

```html
<div class="cui__tooltip top">
  Lorem Ipsum
</div>
```

<a name="Tooltip-border"></a>
## Tooltip with border

<a name="Tooltip/simple-border"></a>
### Simple

```html
<div class="cui__tooltip border">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>
```

<a name="Tooltip/small-border"></a>
### Small

```html
<div class="cui__tooltip border">
  Lorem Ipsum
</div>
```

<a name="Tooltip/arrows-border"></a>
### Arrows

You can add arrows on 9 different positions.

```html
<div class="cui__tooltip top-left border">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    
<hr />
<div class="cui__tooltip top border">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>
<hr />
<div class="cui__tooltip top-right border">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>

<hr />
<div class="cui__tooltip right-top border">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    
<hr />
<div class="cui__tooltip right border">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>
<hr />    
<div class="cui__tooltip right-bottom border">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    

<hr />
<div class="cui__tooltip bottom-right border">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    
<hr />
<div class="cui__tooltip bottom border">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>
<hr />    
<div class="cui__tooltip bottom-left border">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    

<hr />    
<div class="cui__tooltip left-bottom border">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    
<hr />
<div class="cui__tooltip left border">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>
<hr />
<div class="cui__tooltip left-top border">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    

```

<a name="Tooltip/arrows/small-border"></a>
### Small with arrow

All the arrows above also work with small tooltips.

```html
<div class="cui__tooltip top border">
  Lorem Ipsum
</div>
```
