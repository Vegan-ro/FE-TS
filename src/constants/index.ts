export const PLACE_TYPES = {
  RESTAURANT: '식당',
  CAFE: '카페',
  BAR: '술집',
  MARKET: '마켓',
} as const;

export type PlaceType = keyof typeof PLACE_TYPES;

export const MENU_LIST = {
  MAIN: 'main',
  MY: 'my',
  ADDPLACE: 'addplace',
} as const;

export type MenuType = keyof typeof MENU_LIST;

export const VEGAN_MENU_TYPES = {
  FULL_VEGAN: '전체 채식 메뉴',
  PARTIAL_VEGAN: '일부 채식 메뉴',
} as const;

export type VeganMenuType = keyof typeof VEGAN_MENU_TYPES;
