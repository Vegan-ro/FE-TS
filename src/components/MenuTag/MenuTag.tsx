import { MenuTagBtn, MenuTagContent } from '@/components/MenuTag/MenuTag.styles';
import { MenuTagProps } from '@/components/MenuTag/MenuTag.types';

function MenuTag({ title, onClick, isSelected }: MenuTagProps) {
  return (
    <MenuTagBtn onClick={onClick} $clicked={isSelected ? 1 : 0}>
      <MenuTagContent $clicked={isSelected ? 1 : 0}>{title}</MenuTagContent>
    </MenuTagBtn>
  );
}

export default MenuTag;
