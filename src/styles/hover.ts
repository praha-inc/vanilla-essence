import { typedQuery } from '../helpers/typed-query';

import type { CSSProperties, StyleRule } from '@vanilla-extract/css';

type CSSPropertiesWithVariables = CSSProperties & {
  vars?: {
    [key: string]: string;
  };
};

export const hover = (rule: CSSPropertiesWithVariables): StyleRule => {
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
