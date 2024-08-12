import { ButtonProps } from './SmallRoundButton.types';
import { Button } from './SmallRoundButton.styles';
import { IoRefreshOutline, IoFilterOutline, IoCloseOutline } from 'react-icons/io5';

const iconStyle = {
  color: '#4f4f4f',
  width: '24px',
  height: '24px',
};

function SmallRoundButton({ title, onClick }: ButtonProps) {
  const handleClick = () => {
    onClick();
  };

  const renderIcon = (title: ButtonProps['title']) => {
    switch (title) {
      case 'refresh':
        return <IoRefreshOutline style={iconStyle} />;
      case 'filter':
        return <IoFilterOutline style={iconStyle} />;
      case 'close':
        return <IoCloseOutline style={iconStyle} />;
      default:
        return null;
    }
  };
  return <Button onClick={handleClick}>{renderIcon(title)}</Button>;
}

export default SmallRoundButton;
