import { typedQuery } from '../helpers/typed-query';

import type { StyleRule } from '@vanilla-extract/css';

export const hover = (rule: StyleRule): StyleRule => {
  return {
    '@media': {
      [typedQuery(`(any-hover: hover)`)]: {
        ':hover': rule,
      },
      [typedQuery(`(any-hover: none)`)]: {
        ':active': rule,
      },
    },
  };
};
