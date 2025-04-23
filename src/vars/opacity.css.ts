import { createVar } from '@vanilla-extract/css';

export const enterOpacity = createVar({
  syntax: '<percentage>',
  inherits: true,
  initialValue: '0%',
});

export const exitOpacity = createVar({
  syntax: '<percentage>',
  inherits: true,
  initialValue: '0%',
});
