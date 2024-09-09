import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 60px;
  padding-top: 16px;
  padding-bottom: 717px;
  background: #f5f5f5;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 15px 0;
`;

export const ContentContainer = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
`;

export const ImageSection = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 380px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 18px;
  display: flex;
`;

export const Tag = styled.div`
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  display: flex;
`;

export const VeganIcon = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
`;

export const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const InnerContainer = styled.div`
  margin: 0 20px 0 0;
  width: 60px;
  height: 60px;
  border-radius: 3.6px;
  overflow: hidden;
  display: flex;
`;

export const Icon = styled.img`
  width: 54px;
  height: 54px;
  left: 4px;
  top: 4px;
  position: relative;
  background: white;
`;

export const NameContainer = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  display: flex;
`;

export const Name = styled.div`
  color: #383838;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 600;
  word-wrap: break-word;
`;

export const TagContainer = styled.div`
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  background: rgba(79, 131, 55, 0.1);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
`;

export const placeTag = styled.div`
  color: #4f8337;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 600;
  word-wrap: break-word;
`;

export const InfoContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
  display: flex;
`;

export const Info = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  display: flex;
`;

export const DistanceIcon = styled.div`
  width: 15px;
  height: 15px;
  position: relative;
`;

export const Distance = styled.div`
  color: #6e6e6e;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`;

export const placeVeganIcon = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
`;

export const VeganTag = styled.div`
  color: #6e6e6e;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`;

export const ReviewContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fff;
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const MenuContainer = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  background: transparent;
  z-index: 999;
`;
