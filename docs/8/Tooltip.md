# Tooltip

The tooltip element is to be user to show more information to a user either without occupying space on the page or by making the text more relevant visually.

The tooltip doesn't dictate positioning, only layout, so this must be implemented on your side. For some use cases, CSS will do, but you may need to use JavaScript for that.

The implementation of tooltip's pointer relies on `transform: translate` rather than using `calc`, since calc known issues on IE9. Both are unsupported on IE8.

___

- [Tooltip](#Tooltip)
	- [focused](#Icon/set/focused)

<a name="Tooltip"></a>
## Tooltip

<a name="Tooltip/simple"></a>
### Simple

Tooltip's width is limited to 250px.

```html
<div class="cui__tooltip">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div> 
```

<a name="Tooltip/small"></a>
### Small

If the content is smaller than 250 the tooltip will adapt to it, no need for extra classes.

```html
<div class="cui__tooltip">
  Lorem Ipsum
</div> 
```

<a name="Tooltip/with_arroe"></a>
### With arrow

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

<a name="Tooltip/small_with_arrow"></a>
### Small with arrow

All the arrows above also work with small tooltips.

```html
<div class="cui__tooltip top">
  Lorem Ipsum
</div> 
```