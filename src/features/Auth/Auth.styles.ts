import styled from '@emotion/styled';

export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.green[100]};
`;
export const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 44px;
  z-index: 9;
  position: absolute;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LogoContent = styled.p`
  color: ${(props) => props.theme.colors.green[500]};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.48px;
`;

export const NoLogin = styled.button`
  color: ${(props) => props.theme.colors.gray[500]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: underline;
  transition: all 0.2s ease-in;
  &:hover {
    color: ${(props) => props.theme.colors.gray[700]};
  }
`;
export const EmailLogin = styled.button`
  color: white;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 6px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.gray[300]};
  transition: all 0.2s ease-in;
  &:hover {
    box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.1);
  }
`;
export const LoginBtnContainer = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  img {
    transition: all.0.2s ease-in;
    &:hover {
      box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.1);
    }
  }
`;
