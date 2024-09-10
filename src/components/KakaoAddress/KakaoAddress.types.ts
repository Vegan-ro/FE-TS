export interface KakaoAddressProps {
  onClose: () => void;
  onAddressSelect: (address: {
    roadAddress: string;
    lotAddress: string;
    coordinates: { lat: number; lng: number } | null;
  }) => void;
}
