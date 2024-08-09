import styled from '@emotion/styled';

export const SecondBtn = styled.button`
  display: flex;
  height: 50px;
  width: 100%;
  max-width: 260px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 4px;
  background-color: ${(props) => {
    switch (props.color) {
      case 'green':
        return props.theme.colors.green[500];
      case 'gray':
        return props.theme.colors.gray[300];
    }
  }};
`;

export const SecondBtnContent = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
