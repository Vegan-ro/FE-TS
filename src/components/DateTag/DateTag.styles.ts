import styled from '@emotion/styled';
import { DateTagBtnProps } from '@/components/DateTag/DateTag.types';

export const DateTagBtn = styled.button<DateTagBtnProps>`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 12px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  background: ${(props) => (props.clicked ? '#4F83371A' : props.theme.colors.gray[10])};
  border: 1px solid ${(props) => (props.clicked ? props.theme.colors.green[500] : props.theme.colors.gray[10])};
`;

export const DateTagContent = styled.p<DateTagBtnProps>`
  color: ${(props) => (props.clicked ? props.theme.colors.green[500] : props.theme.colors.gray[600])};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
