import styled from '@emotion/styled';
import GlobalStyle from '@/styles/GlobalStyle';
import { useMediaQuery } from 'react-responsive';
import Landing from './components/Landing/Landing';
import Toast from '@/utils/hooks/useToast/useToast';

import Routes from '@/routes/index';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`;
const AppContainer = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  border-left: solid 1px ${(props) => props.theme.colors.gray[200]};
  border-right: solid 1px ${(props) => props.theme.colors.gray[200]};
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`;

function App(): JSX.Element {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  return (
    <AppWrapper>
      {isDesktopOrLaptop && <Landing />}
      <AppContainer>
        <GlobalStyle />
        <Routes />
        <Toast isDesktopOrLaptop={isDesktopOrLaptop} />
      </AppContainer>
    </AppWrapper>
  );
}

export default App;
