import { usePage } from 'hooks';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectOfferType } from 'redux/user/userSelectors';
import css from './OfferList.module.scss';

export const OfferList = () => {
  const { offer } = usePage();
  const { wedding, communion, christening, birthday, others } = offer.routes;
  const allOffers = [wedding, communion, christening, birthday, others];
  const offerType = useSelector(selectOfferType);

  return (
    <section className={css.container}>
      <h3 className={css['heading-third']}>Oferujemy</h3>
      <ul className={css.offer}>
        {allOffers.map((route, index) => (
          <li className={css['offer__item']} key={index}>
            <NavLink to={route.fullLocation}>
              <div className={css['offer__icon']}></div>
            </NavLink>
            <NavLink to={route.fullLocation}>
              <p
                className={[
                  css['paragraph-first'],
                  css.offer__name,
                  offerType === route.name ? css.offer__active : null,
                ].join(' ')}
              >
                {route.title}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
