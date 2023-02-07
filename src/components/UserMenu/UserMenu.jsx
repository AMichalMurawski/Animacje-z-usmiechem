import { useMediaQuery, usePage } from 'hooks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectShowMenu } from 'redux/user/userSelectors';
import { hideMenu } from 'redux/user/userSlice';
import css from './UserMenu.module.scss';
import logo from '../../images/logo-animacje-z-usmiechem-color-removebg-squoosh.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector(selectShowMenu);
  const mediaQuery = useMediaQuery();
  const { home, offer, gallery, contact } = usePage();

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

  const backdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(hideMenu());
      return;
    }
  };

  return (
    <div
      className={[css.menu, showMenu ? css.menu__show : null].join(' ')}
      onClick={backdropClick}
    >
      <div className={css.modal}>
        <div
          className={[css['btn-close'], css.modal__close].join(' ')}
          onClick={handleClick}
        >
          X
        </div>
        <NavLink
          className={[css.logo, css.logo__modal].join(' ')}
          to={home.fullLocation}
          onClick={handleClick}
        >
          <img
            className={css['logo__image']}
            src={logo}
            alt="logo firmy animacje z uśmiechem"
          />
        </NavLink>
        <nav className={[css.nav].join(' ')}>
          <NavLink
            className={css.nav__link}
            to={home.fullLocation}
            onClick={handleClick}
          >
            {home.title}
          </NavLink>
          <NavLink
            className={css.nav__link}
            to={offer.fullLocation}
            onClick={handleClick}
          >
            {offer.title}
          </NavLink>
          <NavLink
            className={css.nav__link}
            to={gallery.fullLocation}
            onClick={handleClick}
          >
            {gallery.title}
          </NavLink>
          <a className={css.nav__link} href="#contact" onClick={handleClick}>
            {contact.title}
          </a>
        </nav>
      </div>
    </div>
  );
};
