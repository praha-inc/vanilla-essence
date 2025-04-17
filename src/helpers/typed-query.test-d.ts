import { describe, expectTypeOf, it } from 'vitest';

import { typedQuery } from './typed-query';

describe('typedQuery', () => {
  it('should accept a valid any-hover condition', () => {
    const query = typedQuery('(any-hover: hover)');

    expectTypeOf(query).toEqualTypeOf<'(any-hover: hover)'>();
  });

  it('should accept a valid prefers-color-scheme condition', () => {
    const query = typedQuery('(prefers-color-scheme: dark)');

    expectTypeOf(query).toEqualTypeOf<'(prefers-color-scheme: dark)'>();
  });

  it('should accept a valid dimension condition (Dimension Operator Length)', () => {
    const query = typedQuery('(width <= 10px)');

    expectTypeOf(query).toEqualTypeOf<'(width <= 10px)'>();
  });

  it('should accept a valid dimension condition (Length Operator Dimension)', () => {
    const query = typedQuery('(10rem = height)');

    expectTypeOf(query).toEqualTypeOf<'(10rem = height)'>();
  });

  it('should accept a valid dimension condition (Length < Dimension < Length)', () => {
    const query = typedQuery('(10px < width < 20px)');

    expectTypeOf(query).toEqualTypeOf<'(10px < width < 20px)'>();
  });

  it('should accept a valid orientation condition', () => {
    const query = typedQuery('(orientation: portrait)');

    expectTypeOf(query).toEqualTypeOf<'(orientation: portrait)'>();
  });

  it('should accept a valid reduced motion condition', () => {
    const query = typedQuery('(prefers-reduced-motion: reduce)');

    expectTypeOf(query).toEqualTypeOf<'(prefers-reduced-motion: reduce)'>();
  });

  it('should accept a valid media query with media type and media feature', () => {
    const query = typedQuery('screen and (prefers-reduced-motion: no-preference)');

    expectTypeOf(query).toEqualTypeOf<'screen and (prefers-reduced-motion: no-preference)'>();
  });

  it('should error when an invalid any-hover condition is used', () => {
    // @ts-expect-error
    typedQuery('(any-hover: invalid)');
  });

  it('should error when an invalid operator is used in dimension condition', () => {
    // @ts-expect-error
    typedQuery('(width > 10px)');
  });

  it('should error when an incomplete media query is used', () => {
    // @ts-expect-error
    typedQuery('invalid media query');
  });
});
