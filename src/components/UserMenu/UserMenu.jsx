import { useMediaQuery } from 'hooks/useMedia';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectShowMenu } from 'redux/user/userSelectors';
import { hideMenu } from 'redux/user/userSlice';
import css from './UserMenu.module.scss';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector(selectShowMenu);
  const mediaQuery = useMediaQuery();

  const mediaEvent = () => {
    dispatch(hideMenu());
  };

  useEffect(() => {
    window
      .matchMedia(mediaQuery.minTablet)
      .addEventListener('change', mediaEvent);
    return () => {
      window
        .matchMedia(mediaQuery.minTablet)
        .removeEventListener('change', mediaEvent);
    };
  });

  const handleClick = () => {
    dispatch(hideMenu());
  };

  return (
    <div
      className={[css.menu, showMenu ? css.menu__show : null].join(' ')}
      aria-expanded="true"
    >
      <div
        className={[css['btn-close'], css.menu__close].join(' ')}
        onClick={handleClick}
      >
        X
      </div>
      <NavLink
        className={[css.logo, css['logo--high']].join(' ')}
        to="/"
        onClick={handleClick}
      ></NavLink>
      <nav className={[css.nav].join(' ')}>
        <NavLink className={css.nav__link} to="/" onClick={handleClick}>
          O nas
        </NavLink>
        <NavLink className={css.nav__link} to="/oferta" onClick={handleClick}>
          Oferta
        </NavLink>
        <NavLink className={css.nav__link} to="/galeria" onClick={handleClick}>
          Galeria
        </NavLink>
        <a className={css.nav__link} href="#contact" onClick={handleClick}>
          Kontakt
        </a>
      </nav>
    </div>
  );
};
