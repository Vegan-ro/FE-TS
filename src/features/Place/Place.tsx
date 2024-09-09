import PlaceDetailCard from '@/components/PlaceDetailCard/PlaceDetailCard';
import { useParams } from 'react-router-dom';

function Place() {
  const { placeId } = useParams();

  if (!placeId) return <div>유효하지 않은 페이지입니다.</div>;

  return (
    <>
      <PlaceDetailCard placeId={placeId ?? ''} />
    </>
  );
}

export default Place;
