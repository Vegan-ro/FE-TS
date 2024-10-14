import { useState, useEffect } from 'react';
import { PlaceCategoryProps } from './PlaceCategory.types';
import { PlaceCategoryBtn, PlaceCategoryTitle } from './PlaceCategory.styles';

import GrassIcon from '@/assets/icons/GrassIcon.svg';
import CafeIcon from '@/assets/icons/CafeIcon.svg';
import WineIcon from '@/assets/icons/WineIcon.svg';
import FishIcon from '@/assets/icons/FishIcon.svg';

const iconMap: Record<string, string> = {
  식당: GrassIcon,
  카페: CafeIcon,
  술집: WineIcon,
  마켓: FishIcon,
};

function PlaceCategory({ title, onClick, initialClicked }: PlaceCategoryProps) {
  const [isClicked, setIsClicked] = useState<boolean>(initialClicked);

  useEffect(() => {
    setIsClicked(initialClicked);
  }, [initialClicked]);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    onClick(title);
  };

  return (
    <PlaceCategoryBtn onClick={handleClick} clicked={isClicked ? true : false} title={title}>
      <img src={iconMap[title]} alt={title} className={isClicked ? 'clicked' : ''} />
      <PlaceCategoryTitle clicked={isClicked ? true : false}>{title}</PlaceCategoryTitle>
    </PlaceCategoryBtn>
  );
}

export default PlaceCategory;
