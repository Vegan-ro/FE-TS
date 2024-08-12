import styled from '@emotion/styled';

export const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: solid 1px ${(props) => props.theme.colors.gray[300]};
  background: ${(props) => props.theme.colors.white};
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.1);
  transition: all 0.3s ease-in;
  box-sizing: border-box;
  outline: none;
  ${(props) => props.theme.flex.row('center', 'center')}
  &:hover {
    box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.3);
  }
`;
