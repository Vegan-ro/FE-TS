import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATH } from '@/constants/paths';

import { MainPage } from '@/features/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.ROOT} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
