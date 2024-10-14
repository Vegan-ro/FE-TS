import { useEffect } from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';
import { ModalOverlay, ModalContent } from '@/components/KakaoAddress/KakaoAddress.styles';
import { KakaoAddressProps } from '@/components/KakaoAddress/KakaoAddress.types';
import { getAddressCoordinates } from '@/api/addressApi/addressApi';
import { addressApiProps } from '@/api/addressApi/addressApi.types';

const KakaoAddress = ({ onClose, onAddressSelect }: KakaoAddressProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleComplete = async (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';
    const jibunAddress = data.autoJibunAddress || data.jibunAddress || '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress ? ` (${extraAddress})` : '';
    }

    try {
      // getAddressCoordinates 함수가 배열을 반환할 수 있으므로 배열일 경우 객체로 변환
      const result = await getAddressCoordinates({ address: fullAddress } as addressApiProps);

      let coordinates = null;
      if (Array.isArray(result)) {
        // 배열의 첫 번째와 두 번째 값을 lat, lng로 사용
        coordinates = { lat: result[0], lng: result[1] };
      } else {
        coordinates = result; // 이미 객체라면 그대로 사용
      }

      // onAddressSelect에 전달
      onAddressSelect({
        roadAddress: fullAddress,
        lotAddress: jibunAddress,
        coordinates: coordinates,
      });
    } catch (error) {
      console.error('좌표 변환 실패:', error);
      onAddressSelect({
        roadAddress: fullAddress,
        lotAddress: jibunAddress,
        coordinates: null,
      });
    }

    document.body.style.overflow = 'auto';
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <DaumPostcode onComplete={handleComplete} className="post-modal" />
      </ModalContent>
    </ModalOverlay>
  );
};

export default KakaoAddress;
