import { NavLink } from 'react-router-dom';
import css from './Footer.module.scss';
import logo from '../../images/logo-animacje-z-usmiechem-color-removebg-squoosh.png';
import { usePage } from 'hooks';

export const Footer = () => {
  const { home } = usePage();

  return (
    <footer className={css.footer}>
      <div className={[css.container, css.footer__container].join(' ')}>
        <NavLink
          to={home.fullLocation}
          className={[css.logo, css.logo__footer].join(' ')}
        >
          <img
            className={css['logo__image']}
            src={logo}
            alt="logo firmy animacje z uśmiechem"
          />
        </NavLink>
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
  );
};
