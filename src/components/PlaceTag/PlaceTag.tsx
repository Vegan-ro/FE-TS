import { PlaceTagBtn, PlaceTagContent } from '@/components/PlaceTag/PlaceTag.styles';
import { PlaceTagProps } from '@/components/PlaceTag/PlaceTag.types';

function PlaceTag({ title, onClick, isSelected }: PlaceTagProps) {
  return (
    <PlaceTagBtn onClick={onClick} clicked={isSelected ? 1 : 0}>
      <PlaceTagContent clicked={isSelected ? 1 : 0}>{title}</PlaceTagContent>
    </PlaceTagBtn>
  );
}

export default PlaceTag;
