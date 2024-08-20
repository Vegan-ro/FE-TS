import {
  IoCallOutline,
  IoClipboardOutline,
  IoGlobeOutline,
  IoLocationOutline,
  IoMenuOutline,
  IoTimeOutline,
} from 'react-icons/io5';
import { HoursContainer, HourText, IconWrapper, InfoItem, InfoText, InfoWrapper } from './AdminPlaceDetail.styles';
import { AdminPlaceDetailProps } from './AdminPlaceDetail.types';

function AdminPlaceDetail({ placeDetail }: AdminPlaceDetailProps) {
  return (
    <InfoWrapper>
      <InfoItem>
        <IconWrapper>
          <IoLocationOutline size="16" />
        </IconWrapper>
        <InfoText>{placeDetail.address + ' ' + placeDetail.address_detail}</InfoText>
      </InfoItem>
      <InfoItem>
        <IconWrapper>
          <IoMenuOutline size="16" />
        </IconWrapper>
        <InfoText>{placeDetail.category}</InfoText>
      </InfoItem>
      <InfoItem>
        <IconWrapper>
          <IoClipboardOutline size="15" />
        </IconWrapper>
        <InfoText>{placeDetail.vegan_option ? '일부 비건' : '전체 비건'}</InfoText>
      </InfoItem>
      <InfoItem>
        <IconWrapper>
          <IoCallOutline size="13" />
        </IconWrapper>
        <InfoText>{placeDetail.tel}</InfoText>
      </InfoItem>
      <InfoItem>
        <IconWrapper>
          <IoTimeOutline size="15" />
        </IconWrapper>
        <InfoText>영업시간</InfoText>
      </InfoItem>
      <InfoItem>
        <HoursContainer>
          {placeDetail.open_times.map((hour: string, index: number) => (
            <HourText key={index}>{hour}</HourText>
          ))}
        </HoursContainer>
      </InfoItem>
      <InfoItem>
        <IconWrapper>
          <IoGlobeOutline size="15" />
        </IconWrapper>
        <InfoText>{placeDetail.sns_url}</InfoText>
      </InfoItem>
    </InfoWrapper>
  );
}

export default AdminPlaceDetail;
