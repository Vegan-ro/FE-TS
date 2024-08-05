import { useState } from 'react';
import { IoBookmarkOutline, IoBookmarkSharp } from 'react-icons/io5';
import { Button, IconContainer, Text } from './Bookmark.styles';

function Bookmark() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Button isClicked={isClicked} onClick={handleClick}>
      <IconContainer>
        {isClicked ? <IoBookmarkSharp size="24" color="#4F8337" /> : <IoBookmarkOutline size="24" color="#383838" />}
        <Text isClicked={isClicked}>저장하기</Text>
      </IconContainer>
    </Button>
  );
}

export default Bookmark;
