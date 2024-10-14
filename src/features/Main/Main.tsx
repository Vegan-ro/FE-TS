import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentLocation } from '@/utils/hooks';
import KakaoMap from '@/features/KakaoMap/KakaoMap';
import SearchBar from '@/components/SearchBar/SearchBar';
import PlaceCategory from '@/components/PlaceCategory/PlaceCategory';
import MenuButton from '@/components/MenuButton/MenuButton';
import SmallRoundButton from '@/components/SmallRoundButton/SmallRoundButton';
import { Wrapper, TopBar, FilterBar, Categories, RelocateButton, BottomBar } from './Main.styles';
import { IoLocateOutline } from 'react-icons/io5';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { PLACE_TYPES } from '@/constants';

const Main = () => {
  const navigate = useNavigate();
  const { location, reloadLocation } = useCurrentLocation();
  const [searchValue, setSearchValue] = useState<string>('');
  const { selectedCategories, toggleCategory, resetCategories } = useCategoryStore();

  useEffect(() => {
    reloadLocation();
  }, []);

  const handleSearchActive = () => {
    navigate('/search');
  };
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };
  const handleCategorySelect = (categoryName: string) => {
    toggleCategory(categoryName);
  };
  const handleRelocate = (e: React.FormEvent) => {
    e.preventDefault();
    reloadLocation();
  };

  const centerMove = location ? location.center : { lat: 37.5465029, lng: 127.065263 };

  return (
    <>
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
          <RelocateButton title="gps" className="relocate-button" onClick={handleRelocate}>
            <IoLocateOutline size={24} />
          </RelocateButton>
          <MenuButton />
        </BottomBar>
      </Wrapper>
    </>
  );
};

export default Main;
