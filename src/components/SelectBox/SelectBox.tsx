import { Select, Box } from '@chakra-ui/react';
import { SelectBoxProps } from '@/components/SelectBox/SelectBox.types';

function SelectBox({ placeholder, value, onChange, options = [] }: SelectBoxProps) {
  return (
    <Box height="50px" width="206px">
      <Select
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        fontSize="14px"
        fontWeight="600"
        color="#6E6E6E"
        height="50px"
        borderColor="#E2E8F0"
        _focus={{ borderColor: '#4F8337', boxShadow: '0 0 0 1px #4F83371A' }}
        _hover={{ borderColor: '#4F83371A' }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </Box>
  );
}

export default SelectBox;
