import { enter } from '../keyframes/enter.css';
import { exit } from '../keyframes/exit.css';
import { defaultEnterDuration, defaultExitDuration } from '../vars/default.css';
import { enterOpacity, exitOpacity } from '../vars/opacity.css';
import { enterTranslateX, enterTranslateY, exitTranslateX, exitTranslateY } from '../vars/translate.css';

import type { StyleRule } from '@vanilla-extract/css';

export const animateIn = (value: string = defaultEnterDuration): StyleRule => ({
  animationName: `${enter}`,
  animationDuration: value,
  vars: {
    [enterOpacity]: 'initial',
    [enterTranslateX]: 'initial',
    [enterTranslateY]: 'initial',
  },
});

export const animateOut = (value: string = defaultExitDuration): StyleRule => ({
  animationName: `${exit}`,
  animationDuration: value,
  vars: {
    [exitOpacity]: 'initial',
    [exitTranslateX]: 'initial',
    [exitTranslateY]: 'initial',
  },
});
