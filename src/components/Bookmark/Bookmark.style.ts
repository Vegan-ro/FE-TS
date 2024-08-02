import { css } from '@emotion/react';

const buttonStyle = (isClicked: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: ${isClicked ? '#4F8337' : '#383838'};
  border-radius: 5px;
  padding: 8px;
  width: 448px;
  height: 48px;
  background-color: white;
  cursor: pointer;
`;

const textStyle = (isClicked: boolean) => css`
  margin-left: 8px;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${isClicked ? '#4F8337' : '#383838'};
`;
export { buttonStyle, textStyle };
