import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const TabContainerParent = styled.div`
  position: sticky;
  top: 50px;
  z-index: 1;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Tab = styled.div<{ active: boolean }>`
  display: flex;
  flex: 1 1 0;
  height: 43px;
  padding: 12px;
  border-bottom: ${(props) => (props.active ? '2px #4F8337 solid' : '1px #EFEFEF solid')};
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => (props.active ? '#4F8337' : '#ADADAD')};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  word-wrap: break-word;
  cursor: pointer;
`;

const TabContent = styled.div`
  position: absolute;
  top: 50px;
`;

export { Container, TabContainerParent, TabContainer, Tab, TabContent };
