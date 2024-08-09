import styled from '@emotion/styled';

export const PrimaryBtn = styled.button`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 12px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: ${(props) => (props.disabled ? props.theme.colors.gray[300] : props.theme.colors.green[500])};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const PrimaryBtnTitle = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
