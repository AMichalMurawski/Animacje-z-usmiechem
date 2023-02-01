import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.scss';
import { FidgetSpinner } from 'react-loader-spinner';
// import { useEffect } from 'react';

export const SharedLayout = () => {
  // const location = useLocation();
  // let classLocation = 'about';

  // useEffect(() => {
  //   if (location.pathname.includes('/oferta')) {
  //     classLocation = 'offer';
  //     console.log(classLocation);
  //     return;
  //   }
  //   if (location.pathname.includes('/galeria')) {
  //     classLocation = 'gallery';
  //     console.log(classLocation);
  //     return;
  //   }
  //   classLocation = 'about';
  //   console.log(classLocation);
  // }, [location]);

  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <div className={[css.header__container, 'container'].join(' ')}>
          <NavLink
            to="/"
            className={[css.logo, css.header__logo].join(' ')}
          ></NavLink>
          <h1 className={css.title}>Animacje z uśmiechem</h1>
          <nav className={[css.nav, css.header__nav].join(' ')}>
            <NavLink className={css.nav__link} to="/">
              O nas
            </NavLink>
            <NavLink className={css.nav__link} to="/oferta">
              Oferta
            </NavLink>
            <NavLink className={css.nav__link} to="/galeria">
              Galeria
            </NavLink>
            <a className={css.nav__link} href="#contact">
              Kontakt
            </a>
          </nav>
        </div>
      </header>
      <main className={css.main}>
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
      </main>
      <footer className={css.footer}>
        <div className={['container', css.footer__container].join(' ')}>
          <NavLink
            to="/"
            className={[css.logo, css['logo--footer']].join(' ')}
          ></NavLink>
          <address id="contact" className={css.contact}>
            <p className={css.contact__item}>Karolina Murawska</p>
            <a
              className={[css.contact__item, css.contact__link].join(' ')}
              href="tel:+48123456789"
            >
              123 456 789
            </a>
            <a
              className={[css.contact__item, css.contact__link].join(' ')}
              href="mailto:firma@mail.to"
            >
              firma@mail.to
            </a>
          </address>
        </div>
      </footer>
    </div>
  );
};
