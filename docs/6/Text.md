# Text

These are the general text styles for the toolkit.

- [Example](#Text/example)
- [Title](#Text/title)
  - [Primary](#Text/title/primary)
    - [small](#Text/title/primary/small)
    - [small and prominent](#Text/title/primary/small and prominent)
  - [Secondary](#Text/title/secondary)
    - [Subtitle](#Text/title/subtitle)
- [Paragraph](#Text/paragraph)
  - [Primary](#Text/paragraph/primary)
    - [condensed](#Text/paragraph/primary/condensed)
  - [Secondary](#Text/paragraph/secondary)
    - [condensed](#Text/paragraph/secondary/condensed)
  - [Legal](#Text/paragraph/legal)
- [Label](#Text/label)

<a name="Text/example"></a>
## Example

- [Documentation example](examples/base/documentation.html)

<a name="Text/title"></a>
## Title

<a name="Text/title/primary"></a>
### Primary

```html
<h1 class="cui__title--primary">
  Primary title
</h1>

<h1 class="cui__title--primary -blue">
  Primary title in blue
</h1>
```

<a name="Text/title/primary/small"></a>
### Small

```html
<h1 class="cui__title--primary -small">
  Small primary title to fit in several lines so that there it doesn't look as visually cluttered if the title is too long
</h1>

<h1 class="cui__title--primary -small -blue">
  Small primary title to fit in several lines so that there it doesn't look as visually cluttered if the title is too long in blue
</h1>
```

<a name="Text/title/primary/small and prominent"></a>
### Small and prominent

```html
<h1 class="cui__title--primary -small -strong">
  Small but visually prominent primary title that could also fit in several lines so that there it doesn't look as visually cluttered if the title is too long
</h1>

<h1 class="cui__title--primary -small -strong -blue">
  Small but visually prominent primary title that could also fit in several lines so that there it doesn't look as visually cluttered if the title is too long in blue
</h1>
```

<a name="Text/title/secondary"></a>
## Secondary

```html
<h2 class="cui__title--secondary">
  Secondary title
</h2>

<h2 class="cui__title--secondary -blue">
  Secondary title in blue
</h2>
```

<a name="Text/title/subtitle"></a>
## Subtitle

```html
<h3 class="cui__subtitle">
  Subtitle
</h3>

<h3 class="cui__subtitle -blue">
  Subtitle in blue
</h3>
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
```

<a name="Text/paragraph/primary/condensed"></a>
### Primary condensed

```html
<p class="cui__paragraph--primary -condensed">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
<p class="cui__paragraph--primary -condensed">
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
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
<p class="cui__paragraph--secondary -condensed">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
<p class="cui__paragraph--secondary -condensed">
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

<a name="Text/label"></a>
## Label

```html
<p class="cui__paragraph--primary -condensed">
  Lorem Ipsum is simply dummy text typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  <span class="cui__label">Promo</span>
</p>
```
