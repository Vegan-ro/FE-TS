import styled from '@emotion/styled';

export const MapBtn = styled.button`
  height: 48px;
  padding: 12px 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 100px;
  background: ${(props) => props.theme.colors.gray[800]};
`;

export const MapBtnTitle = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-weight: 600;
`;
