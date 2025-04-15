import deepmerge from 'deepmerge';

import type { StyleRule } from '@vanilla-extract/css';

export const mergeStyles = (rules: StyleRule[]): StyleRule => {
  return deepmerge.all<StyleRule>(rules, {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    arrayMerge: (_, source) => source,
  });
};
