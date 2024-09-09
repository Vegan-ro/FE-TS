import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
`;

export const TitleWrapper = styled.div`
  align-self: stretch;
  padding-bottom: 6px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

export const Title = styled.div`
  color: #1f1f1f;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
`;

export const InfoWrapper = styled.div`
  align-self: stretch;
  border-radius: 4px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: flex;
`;

export const InfoItem = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
`;

export const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  border: 1px #8f8f8f solid;
`;

export const InfoText = styled.div`
  flex: 1 1 0;
  color: #1f1f1f;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

export const HoursContainer = styled.div`
  margin-left: 29px;
  width: 100%;
  height: 100%;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

export const HourText = styled.div`
  flex: 1 1 0;
  color: #1f1f1f;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

export const HoursWrapper = styled.div`
  display: flex;
  align-items: center;
`;
