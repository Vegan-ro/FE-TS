import { RoundButtonProps } from './RoundButton.types';
import { Button } from './RoundButton.styles';
import {
  IoGridOutline,
  IoLocate,
  IoHomeOutline,
  IoPersonOutline,
  IoFlagOutline,
  IoLogOutOutline,
  IoClose,
} from 'react-icons/io5';

const iconStyle = {
  color: '#383838',
  width: '24px',
  height: '24px',
};

function RoundButton({ title, onClick }: RoundButtonProps) {
  const renderIcon = (title: RoundButtonProps['title']) => {
    switch (title) {
      case 'gps':
        return <IoLocate style={iconStyle} />;
      case 'menu':
        return <IoGridOutline style={iconStyle} />;
      case 'main':
        return <IoHomeOutline style={iconStyle} />;
      case 'my':
        return <IoPersonOutline style={iconStyle} />;
      case 'addplace':
        return <IoFlagOutline style={iconStyle} />;
      case 'logout':
        return <IoLogOutOutline style={iconStyle} />;
      case 'close':
        return <IoClose style={iconStyle} />;
      default:
        return null;
    }
  };
  return <Button onClick={onClick}>{renderIcon(title)}</Button>;
}

export default RoundButton;
