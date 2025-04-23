import { keyframes } from '@vanilla-extract/css';

import { exitOpacity } from '../vars/opacity.css';
import { exitTranslateX, exitTranslateY } from '../vars/translate.css';

export const exit = keyframes({
  to: {
    opacity: exitOpacity,
    transform: `translate(${exitTranslateX}, ${exitTranslateY})`,
  },
});
