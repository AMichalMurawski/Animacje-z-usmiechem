import { NavLink } from 'react-router-dom';
import css from './OfferList.module.scss';

export const OfferList = () => {
  return (
    <section className={css.container}>
      <h3 className={css['heading-third']}>Oferujemy</h3>
      <ul className={css.offer}>
        <li className={css['offer__item']}>
          <NavLink to="/oferta/wesela">
            <div className={css['offer__icon']}></div>
          </NavLink>
          <NavLink to="/oferta/wesela">
            <p
              className={[css['paragraph-first'], css['offer__name']].join(' ')}
            >
              Wesela
            </p>
          </NavLink>
        </li>
        <li className={css['offer__item']}>
          <NavLink to="/oferta/komunie">
            <div className={css['offer__icon']}></div>
          </NavLink>
          <NavLink to="/oferta/komunie">
            <p
              className={[css['paragraph-first'], css['offer__name']].join(' ')}
            >
              Komunie
            </p>
          </NavLink>
        </li>
        <li className={css['offer__item']}>
          <NavLink to="/oferta/chrzciny">
            <div className={css['offer__icon']}></div>
          </NavLink>
          <NavLink to="/oferta/chrzciny">
            <p
              className={[css['paragraph-first'], css['offer__name']].join(' ')}
            >
              Chrzciny
            </p>
          </NavLink>
        </li>
        <li className={css['offer__item']}>
          <NavLink to="/oferta/urodziny">
            <div className={css['offer__icon']}></div>
          </NavLink>
          <NavLink to="/oferta/urodziny">
            <p
              className={[css['paragraph-first'], css['offer__name']].join(' ')}
            >
              Urodziny
            </p>
          </NavLink>
        </li>
        <li className={css['offer__item']}>
          <NavLink to="/oferta/inne">
            <div className={css['offer__icon']}></div>
          </NavLink>
          <NavLink to="/oferta/inne">
            <p
              className={[css['paragraph-first'], css['offer__name']].join(' ')}
            >
              Inne
            </p>
          </NavLink>
        </li>
      </ul>
    </section>
  );
};
