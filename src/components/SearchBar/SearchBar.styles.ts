import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
`;

export const SearchContainer = styled.div`
  position: absolute;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Search = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  border-radius: 4px;
  padding: 16px 40px 16px 16px;
  border: 1px solid ${(props) => props.theme.colors.gray[300]};
  box-shadow: ${(props) => props.theme.boxShadow.light};
  transition: all 0.2s ease-in;
  box-sizing: border-box;
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.gray[500]};
  }
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.green[500]};
    box-shadow: ${(props) => props.theme.boxShadow.medium};
  &:focus ~ div {
    color: ${(props) => props.theme.colors.gray[800]};
  }
  ${(props) => props.theme.viewPoint.tablet`
    padding: 16px 40px 16px 16px;
  `}
  ${(props) => props.theme.viewPoint.mobile`
    padding: 12px 40px 12px 12px;
  `}
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
