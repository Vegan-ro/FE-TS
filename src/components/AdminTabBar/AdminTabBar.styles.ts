import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh; /* 뷰포트 전체 높이를 사용하도록 설정 */
  background-color: #fff;
`;

export const TabContainerParent = styled.div`
  position: sticky;
  top: 0; /* 페이지 상단에 고정 */
  z-index: 1;
  width: 100%;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Tab = styled.div<{ active: boolean }>`
  display: flex;
  flex: 1;
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

export const TabContent = styled.div`
  margin-top: 10px; /* 탭과 콘텐츠 사이의 여백 */
  padding: 20px;
  width: 100%;
  background-color: #fff;
`;
