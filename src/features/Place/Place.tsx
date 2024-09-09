import PlaceDetailCard from '@/components/PlaceDetailCard/PlaceDetailCard';
import PlaceMap from '@/components/PlaceMap/PlaceMap';
import { usePlace } from '@/hooks/Place/usePlace';
import { useParams } from 'react-router-dom';

function Place() {
  const { placeId } = useParams();
  const { data: place, isLoading, isError } = usePlace(placeId ?? '');

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  if (!placeId) return <div>유효하지 않은 페이지입니다.</div>;

  return (
    <>
      <PlaceMap address={place?.address} name={place?.name} />
      <PlaceDetailCard place={place} />
    </>
  );
}

export default Place;
