import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { PlaceCategoryBtnProps, PlaceCategoryTitleProps } from './PlaceCategory.types';

export const setBackgroundColor = (isClicked: boolean, title: string, theme: Theme) => {
  switch (title) {
    case '식당':
      return isClicked ? theme.colors.green[500] : theme.colors.white;
    case '카페':
      return isClicked ? theme.colors.beige[500] : theme.colors.white;
    case '술집':
      return isClicked ? theme.colors.burgundy[500] : theme.colors.white;
    case '마켓':
      return isClicked ? theme.colors.skyblue[500] : theme.colors.white;
    default:
      return theme.colors.white;
  }
};

export const PlaceCategoryBtn = styled.button<PlaceCategoryBtnProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.clicked ? props.theme.colors.white : props.theme.colors.gray[300])};
  background: ${(props) => setBackgroundColor(props.clicked, props.title, props.theme)};
  box-shadow: ${(props) => props.theme.boxShadow.light};
  transition: all 0.3s ease-in;

  img {
    width: 18px;
    height: 18px;
    &.clicked {
      filter: invert(100%);
    }
  }

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow.dark};
  }

  ${(props) => props.theme.viewPoint.tablet`
      padding: 8px 12px;
      gap: 6px;
  `}

  ${(props) => props.theme.viewPoint.mobile`
      padding: 6px 8px;
      gap: 4px;
  `}
`;

export const PlaceCategoryTitle = styled.p<PlaceCategoryTitleProps>`
  color: ${(props) => (props.clicked ? props.theme.colors.white : props.theme.colors.gray[700])};
  font-weight: 500;

  ${(props) => props.theme.viewPoint.tablet`
      font-size: 14px;
  `}

  ${(props) => props.theme.viewPoint.mobile`
      font-size: 12px;
  `}
`;
