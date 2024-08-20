export const PLACE_TYPES = {
  RESTAURANT: '식당',
  CAFE: '카페',
  BAR: '술집',
  MARKET: '마켓',
} as const;

export type PlaceType = keyof typeof PLACE_TYPES;
export type PlaceValues = (typeof PLACE_TYPES)[PlaceType][];

export const MENU_TYPES = {
  ROOT: 'root',
  MY: 'my',
  ADDPLACE: 'addplace',
} as const;

export type MenuType = keyof typeof MENU_TYPES;
export type MenuValues = (typeof MENU_TYPES)[MenuType];

export const VEGAN_MENU_TYPES = {
  FULL_VEGAN: '전체 채식 메뉴',
  PARTIAL_VEGAN: '일부 채식 메뉴',
} as const;

export type VeganMenuType = keyof typeof VEGAN_MENU_TYPES;
export type VeganMenuValues = (typeof VEGAN_MENU_TYPES)[VeganMenuType][];
