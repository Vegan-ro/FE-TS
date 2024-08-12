import { SerializedStyles } from '@emotion/react';

/**
 * ViewPoint
 */
export type Sizes = {
  desktop: number;
  tablet: number;
  mobile: number;
};

export type ViewPointType = {
  desktop: (strings: TemplateStringsArray) => SerializedStyles;
  tablet: (strings: TemplateStringsArray) => SerializedStyles;
  mobile: (strings: TemplateStringsArray) => SerializedStyles;
};

/**
 * Color
 */

export type ColorVariants = {
  [key: number]: string;
};

export type ColorsType = {
  green: ColorVariants;
  skyblue: ColorVariants;
  beige: ColorVariants;
  burgundy: ColorVariants;
  olive: ColorVariants;
  gray: ColorVariants;
  white: string;
};

/**
 * BoxShadow
 */
export type BoxShadowType = {
  light: string;
  medium: string;
  dark: string;
};

/**
 * Flex
 */
export type FlexType = {
  row: (just?: string, align?: string) => string;
  col: (just?: string, align?: string) => string;
};
