import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const vibration = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(2deg);
    }
`;
export const Wrapper = styled.div`
  width: calc(100% - 480px);
  min-width: 360px;
  height: 100vh;
  ${(props) => props.theme.flex.col('center', 'center')}
  gap: 36px;
`;
export const Link = styled.a`
  width: 220px;
  height: 296px;
  ${(props) => props.theme.flex.row('center', 'center')}
  background-image: url('https://storage.googleapis.com/elice_04/vegan-ro-img/landing_sign.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  &:hover {
    animation: ${vibration} 0.3s forwards;
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
export const TopText = styled.p`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.green[500]};
`;
export const BodyText = styled.p`
  font-size: 40px;
  font-weight: 800;
  padding: 12px 18px;
  border-radius: 100px;
  background-color: white;
  box-shadow: ${(props) => props.theme.boxShadow.light};
  color: ${(props) => props.theme.colors.green[500]};
  b {
    font-weight: 900;
  }
`;
export const BottomText = styled.p`
  font-size: 36px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.green[500]};
  display: flex;
  align-items: center;
  small {
    font-size: 28px;
    display: inline-block;
    margin-right: 8px;
    position: relative;
    &::after {
      content: '';
      width: 110%;
      height: 10px;
      position: absolute;
      bottom: -10px;
      left: 0;
      background-image: url('https://storage.googleapis.com/elice_04/vegan-ro-img/landing_underline.png');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;
