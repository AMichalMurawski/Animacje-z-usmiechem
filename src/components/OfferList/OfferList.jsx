import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectOfferType } from 'redux/user/userSelectors';
import css from './OfferList.module.scss';

export const OfferList = () => {
  const offerType = useSelector(selectOfferType);

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
              className={[
                css['paragraph-first'],
                css.offer__name,
                offerType === 'wedding' ? css.offer__active : null,
              ].join(' ')}
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
              className={[
                css['paragraph-first'],
                css.offer__name,
                offerType === 'communion' ? css.offer__active : null,
              ].join(' ')}
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
              className={[
                css['paragraph-first'],
                css.offer__name,
                offerType === 'christening' ? css.offer__active : null,
              ].join(' ')}
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
              className={[
                css['paragraph-first'],
                css.offer__name,
                offerType === 'birthday' ? css.offer__active : null,
              ].join(' ')}
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
              className={[
                css['paragraph-first'],
                css.offer__name,
                offerType === 'others' ? css.offer__active : null,
              ].join(' ')}
            >
              Inne
            </p>
          </NavLink>
        </li>
      </ul>
    </section>
  );
};
