import { keyframes } from '@vanilla-extract/css';

import { enterOpacity } from '../vars/opacity.css';
import { enterTranslateX, enterTranslateY } from '../vars/translate.css';

export const enter = keyframes({
  from: {
    opacity: enterOpacity,
    transform: `translate(${enterTranslateX}, ${enterTranslateY})`,
  },
});
