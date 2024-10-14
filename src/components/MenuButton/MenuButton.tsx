import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenuStore } from '@/stores/useMenuStore';
import { Menu, MenuList } from './MenuButton.styles';
import RoundButton from '@/components/RoundButton/RoundButton';
import { PATH, PathKeys } from '@/constants/paths';
import { MENU_TYPES } from '@/constants';

function MenuButton() {
  const navigate = useNavigate();
  const { isMenuOpen, toggleMenu, isModalOpen, closeModal } = useMenuStore();
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleToggleMenu = () => {
    if (isModalOpen) {
      closeModal();
    }
    toggleMenu();
    setIsButtonActive(!isButtonActive);
  };

  const handleNavigation = (menu: string) => {
    toggleMenu();

    if (menu in PATH) {
      const routePath = PATH[menu as PathKeys];
      navigate(routePath);
    } else {
      console.error('❌ Route path not found for:', menu);
    }
  };

  return (
    <Menu>
      <MenuList $isOpened={isMenuOpen}>
        {isMenuOpen &&
          Object.keys(MENU_TYPES).map((type) => (
            <RoundButton key={type} title={type} onClick={() => handleNavigation(type)} />
          ))}
      </MenuList>
      <RoundButton title={isButtonActive ? 'close' : 'menu'} onClick={handleToggleMenu} />
    </Menu>
  );
}

export default MenuButton;
