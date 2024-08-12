import { DateTagBtn, DateTagContent } from '@/components/DateTag/DateTag.styles';
import { DateTagProps } from '@/components/DateTag/DateTag.types';

function DateTag({ title, isClicked, onClick }: DateTagProps) {
  return (
    <DateTagBtn onClick={onClick} clicked={isClicked ? 1 : 0}>
      <DateTagContent clicked={isClicked ? 1 : 0}>{title}</DateTagContent>
    </DateTagBtn>
  );
}

export default DateTag;
