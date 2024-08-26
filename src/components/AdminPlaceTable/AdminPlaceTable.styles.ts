import { SystemStyleObject } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const tdStyles: SystemStyleObject = {
  fontSize: 'lg',
};

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const DataContent = styled.div`
  align-self: stretch;
  height: 120px;
  padding: 16px 12px;
  background: #f9f9f9;
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  display: flex;
`;

export const NoData = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
`;

export const NoDataText = styled.div`
  color: #c4c4c4;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;
