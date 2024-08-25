import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATH } from '@/constants/paths';

import { MainPage } from '@/features/Main';
import { AdminPage } from '@/features/Admin';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.ROOT} element={<MainPage />} />
        <Route path={PATH.ADMIN} element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
