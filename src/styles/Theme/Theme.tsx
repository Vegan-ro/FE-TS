import { Theme, css } from '@emotion/react';
import { Sizes, ViewPointType, ColorsType, BoxShadowType, FlexType } from './Theme.types';

const sizes: Sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 328,
};

const viewPoint: ViewPointType = {
  desktop: (...args) => css`
    @media (min-width: ${sizes.desktop}px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${sizes.tablet}px) {
      ${css(...args)};
    }
  `,
  mobile: (...args) => css`
    @media (min-width: ${sizes.mobile}px) and (max-width: ${sizes.tablet - 1}px) {
      ${css(...args)};
    }
  `,
};

const colors: ColorsType = {
  green: {
    700: '#3D642A',
    500: '#4F8337',
    300: '#A9D097',
  },
  skyblue: {
    500: '#7DB8E8',
  },
  beige: {
    500: '#A99283',
    300: '#FFF9F5',
  },
  burgundy: {
    500: '#B53B3B',
  },
  olive: {
    500: '#7A7C22',
  },
  gray: {
    900: '#1F1F1F',
    800: '#383838',
    700: '#4F4F4F',
    600: '#6E6E6E',
    500: '#8F8F8F',
    400: '#ADADAD',
    300: '#C4C4C4',
    200: '#DDDDDD',
    100: '#EFEFEF',
    50: '#F5F5F5',
    10: '#f9f9f9',
  },
  white: '#FFFFFF',
};

const boxShadow: BoxShadowType = {
  light: `4px 6px 16px 0px rgba(71, 71, 71, 0.1)`,
  medium: `4px 6px 16px 0px rgba(71, 71, 71, 0.2)`,
  dark: `4px 6px 16px 0px rgba(71, 71, 71, 0.3)`,
};

const flex: FlexType = {
  row: (just = 'center', align = 'center') => {
    return `display: flex;
    justify-content: ${just};
    align-items: ${align};`;
  },
  col: (just = 'center', align = 'center') => {
    return `display: flex;
    flex-direction: column;
    justify-content: ${just};
    align-items: ${align};`;
  },
};

export type ViewPointTypes = typeof viewPoint;
export type ColorsTypes = typeof colors;
export type BoxShadowTypes = typeof boxShadow;
export type FlexTypes = typeof flex;

const theme: Theme & { viewPoint: ViewPointTypes; colors: ColorsTypes; boxShadow: BoxShadowTypes; flex: FlexTypes } = {
  viewPoint,
  colors,
  boxShadow,
  flex,
};

export default theme;
