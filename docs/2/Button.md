# Button

Buttons use the `cui__button` block, and only `button` tags should be used.

- [Overview](#Button/overview)
- [Usage](#Button/usage)
	- [Importance](#Button/usage/importance)
	- [Size](#Button/usage/size)
- [Primary](#Button/primary)
	- [loading](#Button/primary/loading)
	- [disabled](#Button/primary/disabled)
	- [small](#Button/primary/small)
	- [small & disabled](#Button/primary/small/disabled)
	- [big](#Button/primary/big)
	- [big & loading](#Button/primary/big/loading)
	- [big & disabled](#Button/primary/big/disabled)
	- [with price](#Button/primary/price)
	- [with price big](#Button/primary/price/big)
- [Secondary](#Button/secondary)
	- [loading](#Button/secondary/loading)
	- [disabled](#Button/secondary/disabled)
	- [small](#Button/secondary/small)
	- [small & disabled](#Button/secondary/small/disabled)
	- [big](#Button/secondary/big)
	- [big & loading](#Button/secondary/big/loading)
	- [big & disabled](#Button/secondary/big/disabled)
	- [with price](#Button/secondary/price)
	- [with price big](#Button/secondary/price/big)

<a name="Button/overview"></a>
## Overview

Here's a showcase of all buttons. Pass your mouse over and click the elements to see the hover and active states.

<table cellspacing="0" cellpadding="0">
	<tr>
		<td>
			<button class="cui__button--primary small">
				Small
			</button>
		</td>
		<td>
			<button class="cui__button--secondary small">
				Small
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary small is-disabled">
				Small
			</button>
		</td>
		<td>
			<button class="cui__button--secondary small is-disabled">
				Small
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary">
				Primary
			</button>
		</td>
		<td>
			<button class="cui__button--secondary">
				Secondary
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary is-disabled">
				Primary
			</button>
		</td>
		<td>
			<button class="cui__button--secondary is-disabled">
				Secondary
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary is-loading">
			</button>
		</td>
		<td>
			<button class="cui__button--secondary is-loading">
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary big">
				Primary
			</button>
		</td>
		<td>
			<button class="cui__button--secondary big">
				Secondary
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary big is-disabled">
				Primary
			</button>
		</td>
		<td>
			<button class="cui__button--secondary big is-disabled">
				Secondary
			</button>
		</td>
	</tr>
	<tr>
		<td>
			<button class="cui__button--primary big is-loading">
			</button>
		</td>
		<td>
			<button class="cui__button--secondary big is-loading">
			</button>
		</td>
	</tr>
</table>

<a name="Button/usage/importance"></a>
## Importance

Buttons are divided by importance, therefore we have primary and secondary buttons.

You should always use the primary button for your main actions, actions that will make the user move forward in your flow, like "buy", "save", "continue" or "confirm".

Secondary buttons should be used for auxiliary or negative actions, like "cancel" or "skip".

When you have both actions, the secondary button should be on the left of the primary button.

<div class="example-block" style="text-align: center;">
	<div class="example">
		<button class="cui__button--secondary">
			Cancel
		</button>
		<button class="cui__button--primary">
			Save
		</button>
	</div>
</div>

<a name="Button/usage/size"></a>
## Size

Buttons have 3 different sizes. Big buttons should be used for calls to action, specially when they are the main action on a page. Small buttons are more appropriate for non-final actions, when you have many steps, or when you need more page space.

<div class="example-block" style="text-align: center;">
	<div class="example">
		<button class="cui__button--primary big">
			Buy now!
		</button>
		<button class="cui__button--primary">
			Finish
		</button>
		<button class="cui__button--primary small">
			Continue
		</button>
	</div>
</div>

<a name="Button/primary"></a>
## Primary

This should be used for your main actions.

```html
<button class="cui__button--primary">
  Primary
</button>
```

<a name="Button/primary/loading"></a>
### Loading

Every time a user submits a form, you should change the current submit button to be loading.

```html
<button class="cui__button--primary is-loading">
</button>
```

<a name="Button/primary/disabled"></a>
### Disabled

```html
<button class="cui__button--primary is-disabled">
  Primary disabled
</button>
```

<a name="Button/primary/small"></a>
### Small

```html
<button class="cui__button--primary small">
  Primary small
</button>
```

<a name="Button/primary/small/disabled"></a>
### Small & disabled

```html
<button class="cui__button--primary small is-disabled">
  Primary small disabled
</button>
```

<a name="Button/primary/big"></a>
### Big

```html
<button class="cui__button--primary big">
  Primary big
</button>
```

<a name="Button/primary/big/loading"></a>
### Big & loading

```html
<button class="cui__button--primary big is-loading">
</button>
```

<a name="Button/primary/big/disabled"></a>
### Big & disabled

```html
<button class="cui__button--primary big is-disabled">
  Primary big disabled
</button>
```

<a name="Button/primary/price"></a>
### With price

```html
<button class="cui__button--primary has-price">
  Pay now
  <span class="cui__button--primary__price">
    $1.20
  </span>
</button>
```

<a name="Button/primary/price/big"></a>
### With price big

```html
<button class="cui__button--primary big has-price">
  Pay now
  <span class="cui__button--primary__price">
    $1.20
  </span>
</button>
```



<a name="Button/secondary"></a>
## Secondary

This should be used for your secondary actions.

```html
<button class="cui__button--secondary">
  Secondary
</button>
```

<a name="Button/secondary/loading"></a>
### Loading

```html
<button class="cui__button--secondary is-loading">
</button>
```

<a name="Button/secondary/disabled"></a>
### Disabled

```html
<button class="cui__button--secondary is-disabled">
  Secondary disabled
</button>
```

<a name="Button/secondary/small"></a>
### Small

```html
<button class="cui__button--secondary small">
  Secondary small
</button>
```

<a name="Button/secondary/small/disabled"></a>
### Small & disabled

```html
<button class="cui__button--secondary small is-disabled">
  Secondary small disabled
</button>
```

<a name="Button/secondary/big"></a>
### Big

```html
<button class="cui__button--secondary big">
  Secondary big
</button>
```

<a name="Button/secondary/big/loading"></a>
### Big & loading

```html
<button class="cui__button--secondary big is-loading">
</button>
```

<a name="Button/secondary/big/disabled"></a>
### Big & disabled

```html
<button class="cui__button--secondary big is-disabled">
  Secondary big disabled
</button>
```

<a name="Button/secondary/price"></a>
### With price

```html
<button class="cui__button--secondary has-price">
  Pay now
  <span class="cui__button--secondary__price">
    $1.20
  </span>
</button>
```

<a name="Button/secondary/price/big"></a>
### With price big

```html
<button class="cui__button--secondary big has-price">
  Pay now
  <span class="cui__button--secondary__price">
    $1.20
  </span>
</button>
```

