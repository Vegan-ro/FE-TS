import { MapButtonTitle, MapButtonProps } from './MapButton.types';
import { MapBtn, MapBtnTitle } from './MapButton.styles';
import { IoMenu, IoMapOutline, IoRefreshOutline, IoReaderOutline } from 'react-icons/io5';

function MapButton({ title }: MapButtonProps) {
  const renderIcon = (title: MapButtonTitle) => {
    switch (title) {
      case '리스트뷰':
        return <IoMenu style={{ color: '#FFFFFF', width: '24px', height: '24px' }} />;
      case '지도뷰':
        return <IoMapOutline style={{ color: '#FFFFFF', width: '24px', height: '24px' }} />;
      case '현재 위치로 검색':
        return <IoRefreshOutline style={{ color: '#FFFFFF', width: '24px', height: '24px' }} />;
      case '리뷰 작성하기':
        return <IoReaderOutline style={{ color: '#FFFFFF', width: '24px', height: '24px' }} />;
    }
  };
  return (
    <MapBtn>
      {renderIcon(title)}
      <MapBtnTitle>{title}</MapBtnTitle>
    </MapBtn>
  );
}

export default MapButton;
