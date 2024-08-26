export interface OpenTimeTabProps {
  selectedTag: string;
  setSelectedTag: (day: string) => void;
  timeValues: Record<string, string[]>;
  handleTimeChange: (day: string, index: number, value: string) => void;
}
