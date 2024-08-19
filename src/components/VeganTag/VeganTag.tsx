import { useState } from 'react';
import { VegTagButton, VegTagTitle } from '@/components/VeganTag/VeganTag.styles';
import { VeganTagProps } from '@/components/VeganTag/VeganTag.types';

function VeganTag({ title, onClick, isActive }: VeganTagProps) {
  const [isClickable, setIsClickable] = useState(true);

  const handleClick = () => {
    if (isClickable) {
      setIsClickable(false);
      onClick();
      setTimeout(() => {
        setIsClickable(true);
      }, 1000);
    }
  };

  return (
    <VegTagButton onClick={handleClick} $isActive={isActive}>
      <VegTagTitle $isActive={isActive}>{title}</VegTagTitle>
    </VegTagButton>
  );
}

export default VeganTag;
