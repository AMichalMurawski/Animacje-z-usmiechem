import { SharedLayout } from 'layouts/SharedLayout';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const AboutPage = lazy(() => import('./pages/About'));
const OfferPage = lazy(() => import('./pages/Offer'));
const GalleryPage = lazy(() => import('./pages/Gallery'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<AboutPage />} />
        <Route path="oferta/*" element={<OfferPage />}></Route>
        <Route path="galeria" element={<GalleryPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
