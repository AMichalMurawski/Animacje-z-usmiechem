import { OfferList } from 'components/OfferList/OfferList';
import { Route, Routes } from 'react-router-dom';

const Offer = () => {
  return (
    <>
      <OfferList />
      <Routes>
        <Route path="wesela" element={<div>Tekst o weselach</div>} />
        <Route path="komunie" element={<div>Tekst o komuniach</div>} />
        <Route path="chrzciny" element={<div>Tekst o chrzcinach</div>} />
        <Route path="urodziny" element={<div>Tekst o urodzinach</div>} />
        <Route path="inne" element={<div>Tekst o innych</div>} />
      </Routes>
    </>
  );
};

export default Offer;
