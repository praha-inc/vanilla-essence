import { createVar } from '@vanilla-extract/css';

export const defaultEnterDuration = createVar({
  syntax: '<time>',
  inherits: true,
  initialValue: '250ms',
});

export const defaultExitDuration = createVar({
  syntax: '<time>',
  inherits: true,
  initialValue: '250ms',
});
