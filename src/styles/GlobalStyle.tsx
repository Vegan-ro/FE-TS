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
        }
        *,
        html,
        body,
        textarea {
          padding: 0;
          margin: 0;
          font-size: 62.5%;
          font-family:
            Pretendard,
            -apple-system,
            BlinkMacSystemFont,
            system-ui,
            Roboto,
            'Helvetica Neue',
            'Segoe UI',
            'Apple SD Gothic Neo',
            'Noto Sans KR',
            'Malgun Gothic',
            sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
        * {
          box-sizing: border-box;
          font-family:
            Pretendard,
            -apple-system,
            BlinkMacSystemFont,
            system-ui,
            Roboto,
            'Helvetica Neue',
            'Segoe UI',
            'Apple SD Gothic Neo',
            'Noto Sans KR',
            'Malgun Gothic',
            sans-serif;
        }
        html,
        body,
        div,
        span,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        a,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        form,
        label,
        table {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 10px;
          vertical-align: baseline;
        }
        body {
          line-height: 1;
          font-family:
            Pretendard,
            -apple-system,
            BlinkMacSystemFont,
            system-ui,
            Roboto,
            'Helvetica Neue',
            'Segoe UI',
            'Apple SD Gothic Neo',
            'Noto Sans KR',
            'Malgun Gothic',
            sans-serif;
          background-color: #f6f9f0;
        }
        ol,
        ul {
          list-style: none;
        }
        button {
          border: 0;
          background: transparent;
          cursor: pointer;
        }
        button[disabled] {
          cursor: default;
        }
        #root {
          display: flex;
          justify-content: center;
          position: relative;
        }
      `}
    />
  );
};

export default GlobalStyle;
