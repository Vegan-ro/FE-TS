import styled from '@emotion/styled';
import { MenuListProps } from './MenuButton.types';

export const Menu = styled.menu`
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 999;
`;
export const MenuList = styled.li<MenuListProps>`
  display: ${(props) => (props.$isOpened ? 'flex' : 'none')};
  flex-direction: column-reverse;
  gap: 8px;
`;
