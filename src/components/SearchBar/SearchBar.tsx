import { SearchBarProps } from './SearchBar.types';
import { Wrapper, SearchContainer, Search, IconContainer } from './SearchBar.styles';
import { IoSearchOutline } from 'react-icons/io5';

function SearchBar({ placeholder, value, handleActive, handleChange }: SearchBarProps) {
  return (
    <Wrapper>
      <SearchContainer>
        <Search
          placeholder={placeholder}
          value={value}
          onFocus={handleActive}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        <IconContainer onClick={handleActive}>
          <IoSearchOutline css={{ color: '#C4C4C4', width: '24px', height: '24px' }} />
        </IconContainer>
      </SearchContainer>
    </Wrapper>
  );
}

export default SearchBar;
