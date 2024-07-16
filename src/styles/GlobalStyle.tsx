import emotionReset from 'emotion-reset';
import { css, Global } from '@emotion/react';
import PretendardBlack from '@/assets/fonts/Pretendard-Black.subset.woff2';
import PretendardExtraBold from '@/assets/fonts/Pretendard-ExtraBold.subset.woff2';
import PretendardBold from '@/assets/fonts/Pretendard-Bold.subset.woff2';
import PretendardSemibold from '@/assets/fonts/Pretendard-SemiBold.subset.woff2';
import PretendardMedium from '@/assets/fonts/Pretendard-Medium.subset.woff2';
import PretendardRegular from '@/assets/fonts/Pretendard-Regular.subset.woff2';
import PretendardLight from '@/assets/fonts/Pretendard-Light.subset.woff2';
import PretendardExtraLight from '@/assets/fonts/Pretendard-ExtraLight.subset.woff2';
import PretendardThin from '@/assets/fonts/Pretendard-Thin.subset.woff2';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Pretendard';
          font-weight: 900;
          font-display: swap;
          src: url(${PretendardBlack}) format('woff2');
        }
        @font-face {
          font-family: 'Pretendard';
          font-weight: 800;
          font-display: swap;
          src: url(${PretendardExtraBold}) format('woff2');
        }
        @font-face {
          font-family: 'Pretendard';
          font-weight: 700;
          font-display: swap;
          src: url(${PretendardBold}) format('woff2');
        }
        @font-face {
          font-family: 'Pretendard';
          font-weight: 600;
          font-display: swap;
          src: url(${PretendardSemibold}) format('woff2');
        }
        @font-face {
          font-family: 'Pretendard';
          font-weight: 500;
          font-display: swap;
          src: url(${PretendardMedium}) format('woff2');
        }
        @font-face {
          font-family: 'Pretendard';
          font-weight: 400;
          font-display: swap;
          src: url(${PretendardRegular}) format('woff2');
        }
        @font-face {
          font-family: 'Pretendard';
          font-weight: 300;
          font-display: swap;
          src: url(${PretendardLight}) format('woff2');
        }
        @font-face {
          font-family: 'Pretendard';
          font-weight: 200;
          font-display: swap;
          src: url(${PretendardExtraLight}) format('woff2');
        }
        @font-face {
          font-family: 'Pretendard';
          font-weight: 100;
          font-display: swap;
          src: url(${PretendardThin}) format('woff2');
        }
        ${emotionReset}
        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
        *,
        html,
        body,
        textarea {
          padding: 0;
          margin: 0;
          font-size: 62.5%;
          Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyle;
