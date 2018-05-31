# group-css-supports

[NPM v1.0.0](https://www.npmjs.com/package/group-css-supports)

CSS postprocessing: group supports content. Useful for postprocessing preprocessed CSS files.

# What is it?

You have input.css (take note on similar media query):
```css
@supports (display: grid) {
  .grid__cell--align-top {
    align-self: start;
  }
}
.grid__cell--align-bottom {
  align-self: flex-end;
}
@supports  (display: grid) {
  .grid__cell--align-bottom {
    align-self: end;
  }
}
@media (min-width: 840px) {
  @supports (display: grid) {
    .grid__inner {
      display: grid;
    }
  }
  .grid__cell {
    box-sizing: border-box;
  }
  @supports (display: grid) {
	.grid__cell {
      grid-column-end: span 4;
    }
  }
}
```

Run this utility:
```
group-css-supports input.css output.css
```

The result is output.css:
```css
.grid__cell--align-bottom {
  align-self: flex-end;
}
@supports  (display: grid) {
  .grid__cell--align-top {
    align-self: start;
  }
  .grid__cell--align-bottom {
    align-self: end;
  }
}
@media (min-width: 840px) {
  .grid__cell {
    box-sizing: border-box;
  }
  @supports (display: grid) {
    .grid__inner {
      display: grid;
    }
	.grid__cell {
      grid-column-end: span 4;
    }
  }
}
```

Voila!

# Installing

```
# for project
npm i -S group-css-supports

# or global
npm i -g group-css-supports
```

# Recommendations
* Use `group-css-supports` preprocessor after `group-css-media-queries` preprocessor (see: [GitHub](https://github.com/Se7enSky/group-css-media-queries) or [NPM](https://www.npmjs.com/package/group-css-media-queries), author Ivan Kravchenko)
* Version for gulp: [GitHub](https://github.com/rozaverta/gulp-group-css-supports) or [NPM](https://www.npmjs.com/package/gulp-group-css-supports)

# Changelog
* 1.0.0 – initial working release
