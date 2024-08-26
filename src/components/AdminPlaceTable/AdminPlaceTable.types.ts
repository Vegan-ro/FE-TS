export interface AdminPlaceTableProps {
  placeData: PlaceData[];
}

export interface PlaceData {
  _id: string;
  name: string;
  category: string;
  // category_img: string;
  vegan_option: boolean;
  tel: string;
  address: string;
  // address_lot_number: string;
  address_detail: string;
  // location: number[];
  open_times: string[];
  sns_url: string[];
  user_id?: string;
}
