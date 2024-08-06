import { SecondBtn, SecondBtnContent } from '@/components/SecondaryButton/SecondaryButton.styles';
import { SecondaryButtonProps } from '@/components/SecondaryButton/SecondaryButton.types';

function SecondaryButton({ color, title, onClick }: SecondaryButtonProps) {
  return (
    <SecondBtn color={color} onClick={onClick}>
      <SecondBtnContent>{title}</SecondBtnContent>
    </SecondBtn>
  );
}

export default SecondaryButton;
