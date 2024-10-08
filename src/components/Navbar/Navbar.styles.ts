import styled from '@emotion/styled';

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 16px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  background: ${(props) => props.theme.colors.white};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  z-index: 999;
  svg {
    font-size: 24px;
    color: ${(props) => props.theme.colors.gray[800]};
  }
`;

export const NavTitle = styled.p`
  color: ${(props) => props.theme.colors.gray[800]};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 18px */
  letter-spacing: -0.1px;
  margin-top: 4px;
`;
