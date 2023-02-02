import { NavLink } from 'react-router-dom';
import css from './Header.module.scss';
import logo from '../../images/logo-animacje-z-usmiechem-color-removebg-squoosh.png';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={[css.header__container, css.container].join(' ')}>
        <NavLink
          to="/"
          className={[css.logo, css.logo__header, css.header__logo].join(' ')}
        >
          <img
            className={css['logo__image']}
            src={logo}
            alt="logo firmy animacje z uśmiechem"
          />
        </NavLink>
        <h1 className={css.header__title}>Animacje z uśmiechem</h1>
        <nav className={[css.nav, css.header__nav].join(' ')}>
          <NavLink className={css.nav__link} to="/">
            O nas
          </NavLink>
          <NavLink className={css.nav__link} to="/oferta/wesela">
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
  );
};
