# Text

These are the general text styles for the toolkit.

- [Example](#Text/example)
- [Title](#Text/title)
  - [Primary](#Text/title/primary)
    - [small](#Text/title/primary/small)
    - [small and prominent](#Text/title/primary/small-and-prominent)
    - [default margins](#Text/title/primary/default-margins)
  - [Secondary](#Text/title/secondary)
    - [condensed](#Text/title/secondary/condensed)
    - [default margins](#Text/title/secondary/default-margins)
  - [Subtitle](#Text/title/subtitle)
    - [condensed](#Text/title/subtitle/condensed)
    - [default margins](#Text/title/subtitle/default-margins)
- [Paragraph](#Text/paragraph)
  - [Primary](#Text/paragraph/primary)
    - [condensed](#Text/paragraph/primary/condensed)
    - [default margins](#Text/paragraph/primary/default-margins)
  - [Secondary](#Text/paragraph/secondary)
    - [condensed](#Text/paragraph/secondary/condensed)
    - [default margins](#Text/paragraph/secondary/default-margins)
  - [Legal](#Text/paragraph/legal)
    - [default margins](#Text/paragraph/legal/default-margins)
- [Promo Label](#Text/promo-label)
- [Link](#Text/link)
  - [dynamic styling](#Text/link/dynamic-styling)
- [Text label](#Text/text-label)
  - [default margins](#Text/text-label/default-margins)
- [Amount text](#Text/amount-text)

<a name="Text/example"></a>
## Example

- [Documentation example](examples/base/documentation.html)
- [Dashboard example](examples/base/dashboard.html)

<a name="Text/title"></a>
## Title

<a name="Text/title/primary"></a>
### Primary

```html
<h1 class="cui__title--primary">
  Primary title
</h1>

<h1 class="cui__title--primary blue">
  Primary title in blue
</h1>

<div class="cui__block blue">
  <h1 class="cui__title--primary white">
    Primary title in white
  </h1>
</div>
```

<a name="Text/title/primary/small"></a>
### Small

```html
<h1 class="cui__title--primary small">
  Small primary title to fit in several lines so that there it doesn't look as visually cluttered if the title is too long
</h1>

<h1 class="cui__title--primary small blue">
  Small primary title to fit in several lines so that there it doesn't look as visually cluttered if the title is too long in blue
</h1>

<div class="cui__block blue">
  <h1 class="cui__title--primary small  white">
    Small primary title to fit in several lines so that there it doesn't look as visually cluttered if the title is too long in white
  </h1>
</div>

```

<a name="Text/title/primary/small-and-prominent"></a>
### Small and prominent

```html
<h1 class="cui__title--primary small strong">
  Small but visually prominent primary title that could also fit in several lines so that there it doesn't look as visually cluttered if the title is too long
</h1>

<h1 class="cui__title--primary small strong blue">
  Small but visually prominent primary title that could also fit in several lines so that there it doesn't look as visually cluttered if the title is too long in blue
</h1>

<div class="cui__block blue">
  <h1 class="cui__title--primary small strong white">
  Small but visually prominent primary title that could also fit in several lines so that there it doesn't look as visually cluttered if the title is too long in white
  </h1>
</div>
```

<a name="Text/title/primary/default-margins"></a>
### Default margins

```html
<h1 class="cui__title--primary default-margins">
  Primary title
</h1>

<h1 class="cui__title--primary default-margins blue">
  Primary title in blue
</h1>

<div class="cui__block blue">
  <h1 class="cui__title--primary default-margins white">
    Primary title in white
  </h1>
</div>
```

<a name="Text/title/secondary"></a>
## Secondary

```html
<h2 class="cui__title--secondary">
  Secondary title
</h2>

<h2 class="cui__title--secondary blue">
  Secondary title in blue
</h2>

<div class="cui__block blue">
  <h2 class="cui__title--secondary white">
    Secondary title in white
  </h2>
</div>
```

<a name="Text/title/secondary/condensed"></a>
### Condensed

```html
<h2 class="cui__title--secondary condensed">
  Secondary condensed set
</h2>

<p class="cui__paragraph--primary condensed">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
```

<a name="Text/title/secondary/default-margins"></a>
### Default margins

```html
<h2 class="cui__title--secondary default-margins">
  Secondary title
</h2>

<h2 class="cui__title--secondary default-margins blue">
  Secondary title in blue
</h2>

<div class="cui__block blue">
  <h2 class="cui__title--secondary default-margins white">
    Secondary title in white
  </h2>
</div>
```

<a name="Text/title/subtitle"></a>
## Subtitle

```html
<h3 class="cui__subtitle">
  Subtitle
</h3>

<h3 class="cui__subtitle blue">
  Subtitle in blue
</h3>

<div class="cui__block blue">
  <h3 class="cui__subtitle white">
    Subtitle in white
  </h3>
</div>
```

<a name="Text/title/subtitle/condensed"></a>
### Condensed

```html
<h3 class="cui__subtitle condensed">
  Subtitle condensed
</h3>

<h3 class="cui__subtitle blue condensed">
  Subtitle condensed in blue
</h3>

<div class="cui__block blue">
  <h3 class="cui__subtitle white condensed">
    Subtitle condensed in white
  </h3>
</div>
```

<a name="Text/title/subtitle/default-margins"></a>
### Default margins

```html
<h3 class="cui__subtitle default-margins">
  Subtitle default margins
</h3>

<h3 class="cui__subtitle blue default-margins">
  Subtitle default margins in blue
</h3>

<div class="cui__block blue">
  <h3 class="cui__subtitle white default-margins">
    Subtitle default margins in white
  </h3>
</div>
```

<a name="Text/paragraph"></a>
## Paragraph

<a name="Text/paragraph/primary"></a>
### Primary

```html
<p class="cui__paragraph--primary">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
<p class="cui__paragraph--primary">
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
<p class="cui__paragraph--primary blue">
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
<div class="cui__block blue">
  <p class="cui__paragraph--primary white">
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
</div>
```

<a name="Text/paragraph/primary/condensed"></a>
### Primary condensed

```html
<p class="cui__paragraph--primary condensed">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
<p class="cui__paragraph--primary condensed">
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
<p class="cui__paragraph--primary blue condensed">
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
<div class="cui__block blue">
  <p class="cui__paragraph--primary white condensed">
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
</div>
```

<a name="Text/paragraph/primary/default-margins"></a>
### Default margins

```html
<p class="cui__paragraph--primary default-margins">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
<p class="cui__paragraph--primary default-margins">
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
<p class="cui__paragraph--primary default-margins blue">
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
<div class="cui__block blue">
  <p class="cui__paragraph--primary default-margins white">
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
</div>
```

<a name="Text/paragraph/secondary"></a>
### Secondary

```html
<p class="cui__paragraph--secondary">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
<p class="cui__paragraph--secondary">
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
```

<a name="Text/paragraph/secondary/condensed"></a>
### Secondary condensed

```html
<p class="cui__paragraph--secondary condensed">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
<p class="cui__paragraph--secondary condensed">
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
```

<a name="Text/paragraph/secondary/default-margins"></a>
### Default margins

```html
<p class="cui__paragraph--secondary default-margins">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
<p class="cui__paragraph--secondary default-margins">
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
```

<a name="Text/paragraph/legal"></a>
### Legal

```html
<p class="cui__paragraph--legal">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
```

<a name="Text/paragraph/legal/default-margins"></a>
#### Default margins

```html
<p class="cui__paragraph--legal default-margins">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
```

<a name="Text/promo-label"></a>
## Promo Label

```html
<p class="cui__paragraph--primary condensed">
  Lorem Ipsum is simply dummy text typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  <span class="cui__promo-label">Promo</span>
</p>
```

<a name="Text/link"></a>
## Link

```html
<p class="cui__paragraph--primary condensed">
  <a class="cui__link">
    Click here to go somewhere else
  </a>
  <br />
  <a class="cui__link black">
    Click here to go somewhere else
  </a>  
  <div class="cui__block blue">  
    <a class="cui__link white">
      Click here to go somewhere else
    </a>  
  </div>  
</a>
```

<a name="Text/link/dynamic-styling"></a>
### Dynamic styling

Dynamic styling is the feature of allowing for override of the background and foreground colors. Not all styles overrides are supported: for Links, only the "blue" link's text color.

In links, the `dynamic-styling` modifies the `hover`, `focus` and `active` states to have an underline instead of a darkened color. You can see the effect in the link below.

```html
<a
  class="cui__link dynamic-styling"
  style="color: #3500C8">
  Click here to go somewhere else
</a>
```

<a name="Text/text-label"></a>
## Text Label

The text label is a small title to be used in combination with some other text styles, such as
paragraphs or secondary titles.

```html
<h4 class="cui__text-label">
  Klarna ID
</h4>

<p class="cui__paragraph--primary condensed">
  123456-454-8953-34984-39834
</p>

<h4 class="cui__text-label">
  Original amount
</h4>

<h2 class="cui__title--secondary">
  1.600 kr
</h2>

<h4 class="cui__text-label">
  Billing address
</h4>

<h2 class="cui__title--secondary condensed">
  Jonathan Konstantin Smithsson
</h2>

<p class="cui__paragraph--primary condensed">
  15 Northeast Longname Industrial Parkway<br />
  San Francisco<br />
  94100 California<br />
  United States
</p>
```

<a name="Text/text-label/default-margins"></a>
### Default margins


```html
<h4 class="cui__text-label default-margins">
  Klarna ID
</h4>

<p class="cui__paragraph--primary condensed">
  123456-454-8953-34984-39834
</p>

<h4 class="cui__text-label default-margins">
  Original amount
</h4>

<h2 class="cui__title--secondary default-margins">
  1.600 kr
</h2>

<h4 class="cui__text-label default-margins">
  Billing address
</h4>

<h2 class="cui__title--secondary condensed">
  Jonathan Konstantin Smithsson
</h2>

<p class="cui__paragraph--primary condensed">
  15 Northeast Longname Industrial Parkway<br />
  San Francisco<br />
  94100 California<br />
  United States
</p>
```

<a name="Text/amount-text"></a>
## Amount Text

```html
<p class="cui__amount-text">
  €1500
</p>

<div class="cui__block blue">
  <p class="cui__amount-text white">
    $1800
  </p>
</div>
```
