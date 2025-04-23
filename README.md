# @praha/vanilla-essence

[![npm version](https://badge.fury.io/js/@praha%2Fvanilla-essence.svg)](https://www.npmjs.com/package/@praha/vanilla-essence)
[![npm download](https://img.shields.io/npm/dm/@praha/vanilla-essence.svg)](https://www.npmjs.com/package/@praha/vanilla-essence)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/praha-inc/vanilla-essence/blob/main/LICENSE)
[![Github](https://img.shields.io/github/followers/praha-inc?label=Follow&logo=github&style=social)](https://github.com/orgs/praha-inc/followers)

Essential utilities for vanilla-extract.

## 👏 Getting Started

### Installation

```bash
npm install @praha/vanilla-essence
```

### Usage

#### helpers

A collection of utility functions to simplify the usage of vanilla-extract.

##### `merge-styles`

A utility function for merging multiple style rules.
Use for pseudo-elements, etc., where the style cannot be passed as an array.

```ts
import { mergeStyles } from '@praha/vanilla-essence';
import { style } from '@vanilla-extract/css';

const baseStyle = { color: 'blue' };
const hoverStyle = { backgroundColor: 'red' };

const mergedStyle = style({
  ':hover': mergeStyles(baseStyle, hoverStyle),
});
```

##### `typed-query`

A utility function to assist in writing media queries in a type-safe manner.

```ts
import { typedQuery } from '@praha/vanilla-essence';
import { style } from '@vanilla-extract/css';

const buttonStyle = style({
  color: 'black',
  '@media': {
    [typedQuery('(prefers-color-scheme: dark)')]: {
      color: 'white',
    },
  },
});
```

#### styles

A collection of pre-defined styles for common use cases.

##### `animateIn`/`animateOut`

A utility function for creating CSS animations.  
Use in combination with fadeIn/fadeOut or slideIn/slideOut.

```ts
import {
  animateIn,
  animateOut,
  fadeIn,
  fadeOut,
  slideInFromBottom,
  slideOutToBottom,
} from '@praha/vanilla-essence';
import { style } from '@vanilla-extract/css';

const animateInStyle = style([
  animateIn(),
  fadeIn(),
  slideInFromBottom(),
]);

const animateOutStyle = style([
  animateOut(),
  fadeOut(),
  slideOutToBottom(),
]);
```

##### `fadeIn`/`fadeOut`

A utility function for creating fade-in and fade-out effects.

```ts
import { animateIn, animateOut, fadeIn, fadeOut } from '@praha/vanilla-essence';
import { style } from '@vanilla-extract/css';

const fadeInStyle = style([
  animateIn(),
  fadeIn(),
]);

const fadeOutStyle = style([
  animateOut(),
  fadeOut(),
]);
```

##### `slideIn`/`slideOut`

A utility function for creating slide-in and slide-out effects.

```ts
import {
  animateIn,
  animateOut,
  slideInFromBottom,
  slideOutToBottom,
} from '@praha/vanilla-essence';
import { style } from '@vanilla-extract/css';

const slideInStyle = style([
  animateIn(),
  slideInFromBottom(),
]);
const slideOutStyle = style([
  animateOut(),
  slideOutToBottom(),
]);
```

##### `hover`

A utility function for creating hover effects.

```ts
import { hover } from '@praha/vanilla-essence';
import { style } from '@vanilla-extract/css';

const buttonStyle = style([
  {
    backgroundColor: 'blue',
  },
  hover({ backgroundColor: 'red' }),
]);
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/praha-inc/vanilla-essence/issues) if you want to contribute.

## 📝 License

Copyright © [PrAha, Inc.](https://www.praha-inc.com/)

This project is [```MIT```](https://github.com/praha-inc/vanilla-essence/blob/main/LICENSE) licensed.
