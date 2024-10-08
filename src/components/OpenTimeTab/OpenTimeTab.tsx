import DateTag from '@/components/DateTag/DateTag';
import SelectBox from '@/components/SelectBox/SelectBox';
import { OpenTimeTabProps } from '@/components/OpenTimeTab/OpenTimeTab.types';
import { hours } from '@/utils/hours/hours';
import {
  OpenTimeTabContainer,
  DateTagContainer,
  SelectBoxContainer,
} from '@/components/OpenTimeTab/OpenTimeTab.styles';

function OpenTimeTab({ selectedTag, setSelectedTag, timeValues, handleTimeChange }: OpenTimeTabProps) {
  const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <OpenTimeTabContainer>
      <DateTagContainer>
        {daysOfWeek.map((day) => (
          <DateTag key={day} title={day} isClicked={selectedTag === day} onClick={() => setSelectedTag(day)} />
        ))}
      </DateTagContainer>
      <SelectBoxContainer>
        <SelectBox
          placeholder="영업 시작"
          value={timeValues[selectedTag][0]}
          onChange={(value) => handleTimeChange(selectedTag, 0, value)}
          options={hours}
        />
        <SelectBox
          placeholder="영업 종료"
          value={timeValues[selectedTag][1]}
          onChange={(value) => handleTimeChange(selectedTag, 1, value)}
          options={hours}
        />
        <SelectBox
          placeholder="브레이크 시작"
          value={timeValues[selectedTag][2]}
          onChange={(value) => handleTimeChange(selectedTag, 2, value)}
          options={hours}
        />
        <SelectBox
          placeholder="브레이크 종료"
          value={timeValues[selectedTag][3]}
          onChange={(value) => handleTimeChange(selectedTag, 3, value)}
          options={hours}
        />
      </SelectBoxContainer>
    </OpenTimeTabContainer>
  );
}

export default OpenTimeTab;
