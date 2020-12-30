# Slides HTML

[![version](https://img.shields.io/npm/v/slides-html.svg)](https://www.npmjs.com/package/slides-html) [![npm downloads](https://img.shields.io/npm/dm/slides-html.svg)](https://npm-stat.com/charts.html?package=slides-html&from=2020-12-30)

[DEMO](https://refatalsakka.github.io/slides-html/)

## Installation
```sh
npm i slides-html
```
## Usage

### HTML
```html
  <div class="slides">
    <div class="slide slide-1" data-slide="1">
      <div class="intro">
        <h1>First</h1>
        <p>Lorem Text</p>
      </div>
      <div class="content">
        <div class="header"><span class="close">x</span>
          <h2>First Slide</h2>
        </div>
        <div class="body">...</div>
      </div>
    </div>
    <div class="slide slide-2" data-slide="2">
      <div class="intro">
        <h1>Second</h1>
        <p>Lorem Text</p>
      </div>
      <div class="content">
        <div class="header"><span class="close">x</span>
          <h2>Second Slide</h2>
        </div>
        <div class="body">...</div>
      </div>
    </div>
    <div class="slide slide-3" data-slide="3">
      <div class="intro">
        <h1>Third</h1>
        <p>Lorem Text</p>
      </div>
      <div class="content">
        <div class="header"><span class="close">x</span>
          <h2>Third Slide</h2>
        </div>
        <div class="body">...</div>
      </div>
    </div>
  </div>
```

### CSS
```css
  .slide-1 {
    background-color: #173e61 !important;
    scrollbar-color: #173e61 #112f49 !important;
  }

  .slide-1::-webkit-scrollbar-track {
    background: #112f49 !important;
  }

  .slide-1::-webkit-scrollbar-thumb {
    background-color: #173e61 !important;
    border-color: #112f49 !important;
  }

  .slide-2 {
    background-color: #f8bb44 !important;
    scrollbar-color: #f8bb44 #bb8f37 !important;
  }

  .slide-2::-webkit-scrollbar-track {
    background: #bb8f37 !important;
  }

  .slide-2::-webkit-scrollbar-thumb {
    background-color: #f8bb44 !important;
    border-color: #bb8f37 !important;
  }

  .slide-3 {
    background-color: #8c4b7e !important;
    scrollbar-color: #8c4b7e #5f3456 !important;
  }

  .slide-3::-webkit-scrollbar-track {
    background: #5f3456 !important;
  }

  .slide-3::-webkit-scrollbar-thumb {
    background-color: #8c4b7e !important;
    border-color: #5f3456 !important;
  }
```

If you are using **sass** then you can easily loop over all the slides
### SCSS
```scss
$slides: (
  'slide-1': (
    'bg': #173e61,
    'scroll-bg': #112f49,
    'scroll-color': #173e61,
  ),
  'slide-2': (
    'bg': #f8bb44,
    'scroll-bg': #bb8f37,
    'scroll-color': #f8bb44,
  ),
  'slide-3': (
    'bg': #8c4b7e,
    'scroll-bg': #5f3456,
    'scroll-color': #8c4b7e,
  ),
);

@each $slide, $value in $slides {
  .#{$slide} {
    background-color: map-get($value, 'bg') !important;
    scrollbar-color: map-get($value, 'scroll-color') map-get($value, 'scroll-bg') !important;
  }

  .#{$slide}::-webkit-scrollbar-track {
    background: map-get($value, 'scroll-bg') !important;
  }

  .#{$slide}::-webkit-scrollbar-thumb {
    background-color: map-get($value, 'scroll-color') !important;
    border-color: map-get($value, 'scroll-bg') !important;
  }
}
```

![](https://raw.githubusercontent.com/refatalsakka/slides-html/master/slides-html.gif)
