import { css } from '@emotion/react';

const Main = () => {
  return (
    <div
      css={(theme) => css`
        background-color: ${theme.colors.gray[500]};
        height: 100%;
      `}
    ></div>
  );
};

export default Main;
