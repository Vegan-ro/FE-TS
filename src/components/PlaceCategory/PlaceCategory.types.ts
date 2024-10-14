export interface PlaceCategoryProps {
  title: string;
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
