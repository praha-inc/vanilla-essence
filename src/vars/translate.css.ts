import { createVar } from '@vanilla-extract/css';

export const enterTranslateX = createVar({
  syntax: '<length-percentage>',
  inherits: true,
  initialValue: '0',
});

export const enterTranslateY = createVar({
  syntax: '<length-percentage>',
  inherits: true,
  initialValue: '0',
});

export const exitTranslateX = createVar({
  syntax: '<length-percentage>',
  inherits: true,
  initialValue: '0',
});

export const exitTranslateY = createVar({
  syntax: '<length-percentage>',
  inherits: true,
  initialValue: '0',
});
