export interface PlaceCategoryProps {
  title: '식당' | '카페' | '술집' | '마켓';
  onClick: (title: string) => void;
  initialClicked: boolean;
}

export interface PlaceCategoryBtnProps {
  title: string;
  clicked: boolean;
}

export interface PlaceCategoryTitleProps {
  clicked: boolean;
}
