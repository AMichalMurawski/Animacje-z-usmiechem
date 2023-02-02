import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.scss';
import { FidgetSpinner } from 'react-loader-spinner';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
// import { useEffect } from 'react';

export const SharedLayout = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>
        <div className={css.container}>
          <Suspense
            fallback={
              <FidgetSpinner
                backgroundColor="mediumaquamarine"
                ballColors={['plum', 'plum', 'plum']}
                wrapperClass={css.spinner}
              />
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
};
