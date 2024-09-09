import Navbar from '@/components/Navbar/Navbar';
import PlaceDetailCard from '@/components/PlaceDetailCard/PlaceDetailCard';
import PlaceMap from '@/components/PlaceMap/PlaceMap';
import Bookmark from '@/components/Bookmark/Bookmark';
import { useGetPlace } from '@/hooks/usePlace';
import { useParams } from 'react-router-dom';
import {
  Container,
  Content,
  ContentContainer,
  DistanceIcon,
  Icon,
  ImageSection,
  InnerContainer,
  NameContainer,
  OuterContainer,
  TagContainer,
  Tag,
  InfoContainer,
  Info,
  Name,
  Distance,
  Loading,
  ReviewContainer,
  MenuContainer,
  DetailContainer,
} from './Place.styles';
import { IoNavigateCircleOutline } from 'react-icons/io5';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import getDistance from '@/hooks/useDistance';
import Review from '@/components/Review/Review';
import MenuButton from '@/components/MenuButton/MenuButton';

function Place() {
  const { placeId } = useParams();
  const { data: place, isLoading, isError } = useGetPlace(placeId ?? '');
  const { location, isLoading: isLoadingLocation, error: locationError } = useCurrentLocation();

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;
  if (locationError) return <div>위치 정보를 불러올 수 없습니다.</div>;
  if (!placeId) return <div>유효하지 않은 페이지입니다.</div>;
  if (isLoadingLocation || isLoading)
    return (
      <Container>
        <Loading>
          <div>Loading...</div>
        </Loading>
      </Container>
    );

  const distance =
    getDistance({
      lat1: location.center.lat,
      lon1: location.center.lng,
      lat2: place.location.coordinates[1],
      lon2: place.location.coordinates[0],
    }) / 1000;

  return (
    <Container>
      <Navbar title={place?.name} icon="null" />
      <ContentContainer>
        <ImageSection>
          <PlaceMap address={place?.address} name={place?.name} />
          <OuterContainer>
            <Content>
              <InnerContainer>
                <Icon src={place?.category_img.url.basic_url} />
              </InnerContainer>
              <ContentContainer>
                <NameContainer>
                  <Name>{place?.name}</Name>
                  <TagContainer>
                    <Tag>{place?.vegan_option ? '일부 비건' : '비건'}</Tag>
                  </TagContainer>
                </NameContainer>
                <InfoContainer>
                  <Info>
                    <DistanceIcon>
                      <IoNavigateCircleOutline size="15" />
                    </DistanceIcon>
                    <Distance>{distance}km</Distance>
                  </Info>
                </InfoContainer>
              </ContentContainer>
            </Content>
            <Bookmark />
          </OuterContainer>
        </ImageSection>
      </ContentContainer>
      <DetailContainer>
        <PlaceDetailCard place={place} />
      </DetailContainer>
      <ReviewContainer>
        <Review placeId={placeId} address={place?.address} />
        <MenuContainer>
          <MenuButton />
        </MenuContainer>
      </ReviewContainer>
    </Container>
  );
}

export default Place;
