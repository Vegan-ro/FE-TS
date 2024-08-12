import styled from '@emotion/styled';

export const Button = styled.button`
  border-radius: 100%;
  border: solid 1px ${(props) => props.theme.colors.gray[300]};
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.boxShadow.light};
  transition: all 0.3s ease-in;
  box-sizing: border-box;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow.dark};
  }
  ${(props) => props.theme.viewPoint.tablet`
    width: 36px;
    height: 36px;
  `}
  ${(props) => props.theme.viewPoint.mobile`
    width: 32px;
    height: 32px;
      svg{
          width: 20px;
          height: 20px;
      }
  `}
`;
