import { OfferDescription } from 'components/OfferDescription/OfferDescription';
import { OfferForm } from 'components/OfferForm/OfferForm';
import { OfferList } from 'components/OfferList/OfferList';
import { Navigate, Route, Routes } from 'react-router-dom';

const Offer = () => {
  return (
    <div>
      <div>
        <OfferList />
        <Routes>
          <Route
            path="wesela"
            element={<OfferDescription offerType={'wedding'} />}
          />
          <Route
            path="komunie"
            element={<OfferDescription offerType={'communion'} />}
          />
          <Route
            path="chrzciny"
            element={<OfferDescription offerType={'christening'} />}
          />
          <Route
            path="urodziny"
            element={<OfferDescription offerType={'birthday'} />}
          />
          <Route
            path="inne"
            element={<OfferDescription offerType={'others'} />}
          />
          <Route path="*" element={<Navigate to="wesela" />} />
        </Routes>
      </div>
      <OfferForm />
    </div>
  );
};

export default Offer;
