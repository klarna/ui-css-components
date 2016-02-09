# Navigation

- [Examples](#Navigation/examples)
- [Segmented control](#Navigation/segmentedcontrol)
  - [fixed percentage](#Navigation/segmentedcontrol/fixed percentage)
  - [respect content width](#Navigation/segmentedcontrol/respect content width)
- [Tab menu](#Navigation/tab menu)
  - [fixed percentage](#Navigation/tab menu/fixed percentage)
  - [respect content width](#Navigation/tab menu/respect content width)
  - [compact](#Navigation/tab menu/compact)

<a name="Navigation/examples"></a>
## Examples

- [Dashboard](examples/base/dashboard.html)

<a name="Navigation/segmentedcontrol"></a>
## Segmented control

The segmented control is basically just a different representation of a group of radio buttons and can be used in that way.

<a name="Navigation/segmentedcontrol/fixed percentage"></a>
### fixed percentage
```html
<div class="cui__segmentedcontrol">
   <input class="cui__segmentedcontrol__input" type="radio" name="test" id="test1" checked="checked" />
   <label class="cui__segmentedcontrol__button left third" for="test1">One</label>

   <input class="cui__segmentedcontrol__input" type="radio" name="test" id="test2" />
   <label class="cui__segmentedcontrol__button center third" for="test2">Two</label>

   <input class="cui__segmentedcontrol__input" type="radio" name="test" id="test3" />
   <label class="cui__segmentedcontrol__button right third" for="test3">Three</label>
</div>
```

<a name="Navigation/segmentedcontrol/respect content width"></a>
### respect content width
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

<a name="Navigation/tab menu"></a>
## Tab menu

The tab menu is a different styling of the same navigation concept as the segmented control.

<a name="Navigation/tab menu/fixed percentage"></a>
### fixed percentage
```html
<div class="cui__tab-menu">
   <input class="cui__tab-menu__input" type="radio" name="tab-menu" id="tab-menu1" checked="checked" />
   <label class="cui__tab-menu__button third" for="tab-menu1">One</label>

   <input class="cui__tab-menu__input" type="radio" name="tab-menu" id="tab-menu2" />
   <label class="cui__tab-menu__button third" for="tab-menu2">Two</label>

   <input class="cui__tab-menu__input" type="radio" name="tab-menu" id="tab-menu3" />
   <label class="cui__tab-menu__button third" for="tab-menu3">Three</label>
</div>
```

<a name="Navigation/tab menu/respect content width"></a>
### respect content width
```html
<div class="cui__tab-menu">
   <input class="cui__tab-menu__input" type="radio" name="tab-menu-fluid" id="tab-menu-fluid1" checked="checked" />
   <label class="cui__tab-menu__button" for="tab-menu-fluid1">One</label>

   <input class="cui__tab-menu__input" type="radio" name="tab-menu-fluid" id="tab-menu-fluid2" />
   <label class="cui__tab-menu__button" for="tab-menu-fluid2">A very very long title</label>

   <input class="cui__tab-menu__input" type="radio" name="tab-menu-fluid" id="tab-menu-fluid3" />
   <label class="cui__tab-menu__button" for="tab-menu-fluid3">Three</label>
</div>
```

<a name="Navigation/tab menu/compact"></a>
### compact
```html
<div class="cui__tab-menu compact">
   <input class="cui__tab-menu__input" type="radio" name="tab-menu-compact" id="tab-menu-compact1" checked="checked" />
   <label class="cui__tab-menu__button" for="tab-menu-compact1">One</label>

   <input class="cui__tab-menu__input" type="radio" name="tab-menu-compact" id="tab-menu-compact2" />
   <label class="cui__tab-menu__button" for="tab-menu-compact2">A very very long title</label>

   <input class="cui__tab-menu__input" type="radio" name="tab-menu-compact" id="tab-menu-compact3" />
   <label class="cui__tab-menu__button" for="tab-menu-compact3">Three</label>
</div>
```
