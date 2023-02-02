import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { openMenu } from 'redux/user/userSlice';
import css from './Header.module.scss';

export const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openMenu());
  };

  return (
    <header className={css.header}>
      <div className={[css.header__container, css.container].join(' ')}>
        <NavLink
          to="/"
          className={[css.logo, css.header__logo].join(' ')}
        ></NavLink>
        <h1 className={css.header__title}>Animacje z uśmiechem</h1>
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
        <div
          className={[css.menu, css.header__menu].join(' ')}
          onClick={handleClick}
        >
          <div className={css.menu__line}></div>
          <div className={css.menu__line}></div>
          <div className={css.menu__line}></div>
        </div>
      </div>
    </header>
  );
};
