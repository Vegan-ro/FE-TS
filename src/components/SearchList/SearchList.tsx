import {
  CardWrapper,
  TextBox,
  TitleBox,
  PlaceName,
  VeganMenu,
  DistBox,
  Address,
  Tel,
  Distance,
  CategoryIcon,
  CategoryImg,
} from '@/components/SearchList/SearchList.style';
import { IoNavigateCircleOutline } from 'react-icons/io5';
import { VEGAN_MENU_TYPES } from '@/constants';
import { SearchListProps } from '@/components/SearchList/SearchList.types';

export default function SearchList({ onClick, img, name, vegan_option, distance, address, tel }: SearchListProps) {
  return (
    <CardWrapper onClick={onClick}>
      <CategoryIcon>
        <CategoryImg className="category" src={img} alt="식당 카테고리" />
      </CategoryIcon>
      <TextBox>
        <TitleBox>
          <PlaceName>{name}</PlaceName>
          <VeganMenu>{vegan_option ? VEGAN_MENU_TYPES.FULL_VEGAN : VEGAN_MENU_TYPES.PARTIAL_VEGAN}</VeganMenu>
        </TitleBox>
        <DistBox>
          <IoNavigateCircleOutline size="12" color="#6e6e6e" />
          <Distance>{distance}</Distance>
        </DistBox>
        <Address>{address}</Address>
        <Tel>{tel}</Tel>
      </TextBox>
    </CardWrapper>
  );
}
