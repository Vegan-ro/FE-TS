import { InputContainer } from '@/components/InputBox/InputBox.styles';
import { InputBoxProps } from '@/components/InputBox/InputBox.types';

function InputBox({ type = 'text', placeholder, value = '', onChange }: InputBoxProps) {
  const inputContent = value && value.length > 0 ? 'existContent' : '';

  return (
    <InputContainer type={type} value={value} onChange={onChange} placeholder={placeholder} className={inputContent} />
  );
}

export default InputBox;
