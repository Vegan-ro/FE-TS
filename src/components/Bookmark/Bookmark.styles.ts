import styled from '@emotion/styled';

const Button = styled.button<{ isClicked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: ${({ isClicked }) => (isClicked ? '#4F8337' : '#383838')};
  border-radius: 5px;
  padding: 8px;
  width: 448px;
  height: 48px;
  background-color: white;
  cursor: pointer;
`;

const Text = styled.span<{ isClicked: boolean }>`
  margin-left: 8px;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ isClicked }) => (isClicked ? '#4F8337' : '#383838')};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export { Button, Text, IconContainer };
