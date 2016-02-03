# Segemented Control

The segmented contol is basically just a different representation of a group of radio buttons and can be used in that way.

## fixed percentage
```html
<div class="cui__segmentedcontrol">
   <input class="cui__segmentedcontrol__input" type="radio" name="test" id="test1" checked="checked" />
   <label class="cui__segmentedcontrol__button left third" for="test1">One</label>
    
   <input class="cui__segmentedcontrol__input" type="radio" name="test" id="test2" />
   <label class="cui__segmentedcontrol__button right third" for="test2">Two</label>
       
   <input class="cui__segmentedcontrol__input" type="radio" name="test" id="test3" />
   <label class="cui__segmentedcontrol__button right third" for="test3">Three</label>
</div>
```

## respect content width
```html
<div class="cui__segmentedcontrol">
   <input class="cui__segmentedcontrol__input" type="radio" name="fluid" id="fluid1" checked="checked" />
   <label class="cui__segmentedcontrol__button left" for="fluid1">One</label>
    
   <input class="cui__segmentedcontrol__input" type="radio" name="fluid" id="fluid2" />
   <label class="cui__segmentedcontrol__button center" for="fluid2">A very very long title</label>
       
   <input class="cui__segmentedcontrol__input" type="radio" name="fluid" id="fluid3" />
   <label class="cui__segmentedcontrol__button right" for="fluid3">Three</label>
</div>
```