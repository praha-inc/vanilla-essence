type AnyHover = 'hover' | 'none';

type AnyHoverCondition = `(any-hover: ${AnyHover})`;

type ColorScheme = 'light' | 'dark';

type ColorSchemeCondition = `(prefers-color-scheme: ${ColorScheme})`;

type Unit = 'px' | 'rem' | 'em';

type Length = `${number}${Unit}`;

type LessOperator = '<' | '<=';

type EqualOperator = '=';

type Operator = LessOperator | EqualOperator;

type Dimension = 'width' | 'height';

type DimensionCondition = (
  | `(${Dimension} ${Operator} ${Length})`
  | `(${Length} ${Operator} ${Dimension})`
  | `(${Length} ${LessOperator} ${Dimension} ${LessOperator} ${Length})`
);

type Orientation = 'portrait' | 'landscape';

type OrientationCondition = `(orientation: ${Orientation})`;

type ReducedMotion = 'reduce' | 'no-preference';

type ReduceMotionCondition = `(prefers-reduced-motion: ${ReducedMotion})`;

type MediaFeature = (
  | AnyHoverCondition
  | ColorSchemeCondition
  | DimensionCondition
  | OrientationCondition
  | ReduceMotionCondition
);

type MediaType = 'all' | 'print' | 'screen' | 'speech';

type MediaQuery = MediaFeature | `${MediaType} and ${MediaFeature}`;

export const typedQuery = <T extends MediaQuery>(query: T) => query;
