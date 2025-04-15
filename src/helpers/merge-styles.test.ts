import { describe, it, expect } from 'vitest';

import { mergeStyles } from './merge-styles';

describe('mergeStyles', () => {
  it('should merge multiple style rules', () => {
    const rule1 = { color: 'red' };
    const rule2 = { background: 'blue' };

    const merged = mergeStyles([rule1, rule2]);

    expect(merged).toEqual({ color: 'red', background: 'blue' });
  });

  it('should override properties from the last rule', () => {
    const rule1 = { color: 'red' };
    const rule2 = { color: 'blue' };

    const merged = mergeStyles([rule1, rule2]);

    expect(merged).toEqual({ color: 'blue' });
  });

  it('should merge nested objects', () => {
    const rule1 = { '::after': { style: 'solid', width: '1px' } };
    const rule2 = { '::after': { color: 'black' } };

    const merged = mergeStyles([rule1, rule2]);

    expect(merged).toEqual({
      '::after': { style: 'solid', width: '1px', color: 'black' },
    });
  });

  it('should merge arrays of values', () => {
    const rule1 = { color: ['black', 'white'] };
    const rule2 = { color: ['red', 'green', 'blue'] };

    const merged = mergeStyles([rule1, rule2]);

    expect(merged).toEqual({ color: ['red', 'green', 'blue'] });
  });

  it('should handle empty rules', () => {
    const merged = mergeStyles([]);

    expect(merged).toEqual({});
  });
});
