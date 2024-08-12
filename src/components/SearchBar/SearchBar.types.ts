export interface SearchBarProps {
  placeholder: string;
  value: string;
  handleActive: () => void;
  handleChange: (value: string) => void;
}
