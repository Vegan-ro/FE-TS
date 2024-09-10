import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATH } from '@/constants/paths';

import { MainPage, AdminPage, PlacePage, ReviewPage, AddPlacePage } from '@/features';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.ROOT} element={<MainPage />} />
        <Route path={PATH.ADMIN} element={<AdminPage />} />
        <Route path={PATH.PLACEDETAIL} element={<PlacePage />} />
        <Route path={PATH.REVIEW} element={<ReviewPage />} />
        <Route path={PATH.ADDPLACE} element={<AddPlacePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
