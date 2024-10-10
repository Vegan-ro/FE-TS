import styled from '@emotion/styled';
import { MenuTagBtnProps } from '@/components/MenuTag/MenuTag.types';

export const MenuTagBtn = styled.button<MenuTagBtnProps>`
  display: flex;
  height: 50px;
  width: 100%;
  max-width: 218px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border-radius: 4px;
  background: ${(props) => (props.$clicked ? '#4F83371A' : props.theme.colors.gray[10])};
  border: 1px solid ${(props) => (props.$clicked ? props.theme.colors.green[500] : props.theme.colors.gray[10])};
`;

export const MenuTagContent = styled.p<MenuTagBtnProps>`
  color: ${(props) => (props.$clicked ? props.theme.colors.green[500] : props.theme.colors.gray[600])};
  font-weight: 500;
  ${(props) => props.theme.viewPoint.desktop`
    font-size: 16px;
  `}
  ${(props) => props.theme.viewPoint.tablet`
    font-size: 15px;
  `}
  ${(props) => props.theme.viewPoint.mobile`
    font-size: 14px;
  `}
`;
