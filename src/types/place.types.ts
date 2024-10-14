export type Place = {
  _id: string;
  name: string;
  category: string;
  category_img: CategoryImg;
  vegan_option: boolean;
  tel: string;
  address: string;
  address_lot_number: string;
  address_detail: string;
  location: {
    type: 'Point';
    coordinates: Coordinates;
  };
  open_times: string[];
  sns_url: string[];
  deleted_at: null | string;
  createdAt: string;
  updatedAt: string;
};

type Coordinates = [number, number];

type CategoryImg = {
  _id: string;
  name: string;
  url: {
    basic_url: string;
    pin_url: string;
  };
  createdAt: string;
  updatedAt: string;
};
