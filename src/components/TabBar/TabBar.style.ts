import { css } from '@emotion/react';

const Container = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const TabContainerParent = css`
  position: sticky;
  top: 50px;
  z-index: 1;
`;

const TabContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Tab = (active: boolean) => css`
  display: flex;
  flex: 1 1 0;
  height: 43px;
  padding: 12px;
  border-bottom: ${active ? '2px #4F8337 solid' : '1px #EFEFEF solid'};
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${active ? '#4F8337' : '#ADADAD'};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  word-wrap: break-word;
  cursor: pointer;
`;

export { Container, TabContainerParent, TabContainer, Tab };
