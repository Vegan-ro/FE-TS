import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentLocation } from '@/utils/hooks';
import KakaoMap from '@/features/KakaoMap/KakaoMap';
import SearchBar from '@/components/SearchBar/SearchBar';
import PlaceCategory from '@/components/PlaceCategory/PlaceCategory';
import MenuButton from '@/components/MenuButton/MenuButton';
import SmallRoundButton from '@/components/SmallRoundButton/SmallRoundButton';
import RoundButton from '@/components/RoundButton/RoundButton';
import { Wrapper, TopBar, FilterBar, Categories, BottomBar } from './Main.styles';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { PLACE_TYPES } from '@/constants';

const Main = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const { location, reloadLocation } = useCurrentLocation();
  const { selectedCategories, toggleCategory, resetCategories } = useCategoryStore();
  const centerMove = location ? location.center : { lat: 37.5465029, lng: 127.065263 };

  const handleSearchActive = () => {
    navigate('/search');
  };
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };
  const handleCategorySelect = (categoryName: string) => {
    toggleCategory(categoryName);
  };
  const handleRelocate = () => {
    reloadLocation();
  };

  useEffect(() => {
    reloadLocation();
  }, [location]);

  return (
    <Wrapper className="home">
      <TopBar>
        <SearchBar
          placeholder="‘가게 이름' 또는 ‘주소'를 검색해보세요."
          value={searchValue}
          handleChange={handleSearchChange}
          handleActive={handleSearchActive}
        />
        <FilterBar>
          <Categories className="category-bar">
            {PLACE_TYPES.map((title) => (
              <PlaceCategory
                key={title}
                title={title}
                onClick={() => handleCategorySelect(title)}
                initialClicked={selectedCategories.includes(title)}
              />
            ))}
            <SmallRoundButton title="refresh" onClick={resetCategories} />
          </Categories>
        </FilterBar>
      </TopBar>
      <KakaoMap centerMove={centerMove} categoriesStatus={selectedCategories} />
      <BottomBar>
        <RoundButton title="gps" onClick={handleRelocate} />
        <MenuButton />
      </BottomBar>
    </Wrapper>
  );
};

export default Main;
