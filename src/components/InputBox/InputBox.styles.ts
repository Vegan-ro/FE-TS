import styled from '@emotion/styled';

export const InputContainer = styled.input`
  display: flex;
  width: 100%;
  max-width: 448px;
  height: 50px;
  padding: 12px;
  align-items: center;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.gray[10]};
  border: 2px solid ${(props) => props.theme.colors.gray[10]};
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray[300]};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &.existContent {
    border-color: ${(props) => props.theme.colors.green[500]};
  }
`;
