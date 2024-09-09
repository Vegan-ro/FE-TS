import {
  Container,
  TitleWrapper,
  Title,
  InfoWrapper,
  InfoItem,
  IconWrapper,
  InfoText,
  HoursContainer,
  HourText,
} from './PlaceDetailCard.styles';
import { IoLocationOutline, IoCallOutline, IoTimeOutline, IoGlobeOutline } from 'react-icons/io5';
import { PlaceDetailCardProps } from './PlaceDetailCard.types';

export default function PlaceDetailCard({ place }: PlaceDetailCardProps) {
  return (
    <Container>
      <TitleWrapper>
        <Title>가게 정보</Title>
      </TitleWrapper>
      <InfoWrapper>
        <InfoItem>
          <IconWrapper>
            <IoLocationOutline size="16" />
          </IconWrapper>
          <InfoText>{place?.address || '주소 정보가 없습니다.'}</InfoText>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <IoCallOutline size="13" />
          </IconWrapper>
          <InfoText>{place?.tel || '전화번호 정보가 없습니다.'}</InfoText>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <IoTimeOutline size="15" />
          </IconWrapper>
          <InfoText>영업시간</InfoText>
        </InfoItem>
        <InfoItem>
          <HoursContainer>
            {place?.open_times?.length ? (
              place.open_times.map((hour: string, index: number) => <HourText key={index}>{hour}</HourText>)
            ) : (
              <HourText>영업시간 정보가 없습니다.</HourText>
            )}
          </HoursContainer>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <IoGlobeOutline size="15" />
          </IconWrapper>
          <InfoText>{place?.sns_url || 'SNS 정보가 없습니다.'}</InfoText>
        </InfoItem>
      </InfoWrapper>
    </Container>
  );
}
