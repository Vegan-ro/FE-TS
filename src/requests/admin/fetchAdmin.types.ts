export interface PlaceData {
  name: string;
  category: string;
  // category_img: CategoryData;
  vegan_option: boolean;
  tel: string;
  address: string;
  address_lot_number: string;
  address_detail: string;
  location: number[];
  open_times: string[];
  sns_url: string[];
}

export interface ResPlaceData extends PlaceData {
  _id: string;
  user_id?: UserId;
  category_img: CategoryData;
  createdAt: string;
  updatedAt: string;
}

interface CategoryData {
  url: UrlData;
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface UrlData {
  basic_url: string;
  pin_url: string;
}

interface UserId {
  _id: string;
  email: string;
  name: string | null;
  nickname: string;
  phone: string | null;
  tag: string;
  tag_img: string;
  complaint: number;
  deleted_at: string | null;
  createdAt: string;
  updatedAt: string;
}
