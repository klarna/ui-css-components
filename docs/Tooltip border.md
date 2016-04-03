# Tooltip-border

The tooltip element is to be used to show more information to a user either without occupying space on the page or by making the text more relevant visually.

The tooltip doesn't dictate positioning, only layout, so this must be implemented on your side. For some use cases, CSS will do, but you may need to use JavaScript for that.

The implementation of tooltip's pointer relies on `transform: translate` rather than using `calc`, since calc known issues on IE9. Both are unsupported on IE8.

___

- [Tooltip-border](#Tooltip-border)
  - [Simple](#Tooltip-border/simple)
  - [Small](#Tooltip-border/small)
  - [Arrows](#Tooltip-border/arrows)
  - [Small with arrows](#Tooltip-border/arrows/small)


<a name="Tooltip-border"></a>
## Tooltip-border

<a name="Tooltip-border/simple"></a>
### Simple

Tooltip's width is limited to 250px.

```html
<div class="cui__tooltip-border">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div> 
```

<a name="Tooltip-border/small"></a>
### Small

If the content is smaller than 250 the tooltip will adapt to it, no need for extra classes.

```html
<div class="cui__tooltip-border">
  Lorem Ipsum
</div> 
```

<a name="Tooltip-border/arrows"></a>
### Arrows

You can add arrows on 9 different positions.

```html
<div class="cui__tooltip-border top-left">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    
<hr />
<div class="cui__tooltip-border top">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div> 
<hr />
<div class="cui__tooltip-border top-right">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div> 

<hr />
<div class="cui__tooltip-border right-top">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    
<hr />
<div class="cui__tooltip-border right">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>
<hr />    
<div class="cui__tooltip-border right-bottom">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    

<hr />
<div class="cui__tooltip-border bottom-right">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    
<hr />
<div class="cui__tooltip-border bottom">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>
<hr />    
<div class="cui__tooltip-border bottom-left">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    

<hr />    
<div class="cui__tooltip-border left-bottom">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    
<hr />
<div class="cui__tooltip-border left">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>
<hr />
<div class="cui__tooltip-border left-top">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</div>    

```

<a name="Tooltip-border/arrows/small"></a>
### Small with arrow

All the arrows above also work with small tooltips.

```html
<div class="cui__tooltip-border top">
  Lorem Ipsum
</div> 
```