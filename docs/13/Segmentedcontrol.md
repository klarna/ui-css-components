# Segemented Control

The segmented contol is basically just a different representation of a group of radio buttons and can be used in that way.

## fixed percentage
```html
<div class="cui__segmentedcontrol">
   <input type="radio" name="test" id="test1" checked="checked" />
   <label for="test1" class="left third">One</label>
    
   <input type="radio" name="test" id="test2" />
   <label for="test2" class="center third">Two</label>
       
   <input type="radio" name="test" id="test3" />
   <label for="test3" class="right third">Three</label>
</div>
```

## respect content width
```html
<div class="cui__segmentedcontrol">
   <input type="radio" name="fluid" id="fluid1" checked="checked" />
   <label for="fluid1" class="left">One</label>
    
   <input type="radio" name="fluid" id="fluid2" />
   <label for="fluid2" class="center">A very very long title</label>
       
   <input type="radio" name="fluid" id="fluid3" />
   <label for="fluid3" class="right">Three</label>
</div>
```