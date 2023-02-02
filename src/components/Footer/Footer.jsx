import { NavLink } from 'react-router-dom';
import css from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={[css.container, css.footer__container].join(' ')}>
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
  );
};
