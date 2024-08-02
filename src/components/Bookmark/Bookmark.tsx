import { useState } from 'react';
import { IoBookmarkOutline, IoBookmarkSharp } from 'react-icons/io5';
import { buttonStyle, textStyle } from './Bookmark.style';
import { css } from '@emotion/react';

function Bookmark() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button css={buttonStyle(isClicked)} onClick={handleClick}>
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        {isClicked ? <IoBookmarkSharp size="24" color="#4F8337" /> : <IoBookmarkOutline size="24" color="#383838" />}
        <span css={textStyle(isClicked)}>저장하기</span>
      </div>
    </button>
  );
}

export default Bookmark;
