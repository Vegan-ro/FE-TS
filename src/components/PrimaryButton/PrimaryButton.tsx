import { PrimaryBtn, PrimaryBtnTitle } from '@/components/PrimaryButton/PrimaryButton.styles';
import { PrimaryButtonProps } from '@/components/PrimaryButton/PrimaryButton.types';

function PrimaryButton({ onClick, isEnabled, title }: PrimaryButtonProps) {
  return (
    <PrimaryBtn onClick={onClick} disabled={!isEnabled}>
      <PrimaryBtnTitle>{title}</PrimaryBtnTitle>
    </PrimaryBtn>
  );
}

export default PrimaryButton;
