import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectOfferContent } from 'redux/user/userSelectors';
import { changeOffer, offerDescription } from 'redux/user/userSlice';
import css from './OfferDescription.module.scss';

export const OfferDescription = offerType => {
  const location = useLocation();
  const dispatch = useDispatch();
  const offerContent = useSelector(selectOfferContent);

  useEffect(() => {
    dispatch(changeOffer(offerType));
    dispatch(offerDescription(offerType));
    return () => {
      dispatch(changeOffer({ offerType: null }));
    };
  }, [location, offerType, dispatch]);

  return (
    <section className={css.container}>
      {!!offerContent && (
        <>
          <div className={css.description}>
            <h3
              className={[css['heading-third'], css.description__heading].join(
                ' '
              )}
            >
              {offerContent[0].title}
            </h3>
            {offerContent[0].description.map((descr, i) => (
              <p key={i} className={css['paragraph-first']}>
                {descr}
              </p>
            ))}
          </div>
          <h3
            className={[css['heading-third'], css.description__heading].join(
              ' '
            )}
          >
            {offerContent[0].packages.name}
          </h3>
          <ul className={css.option}>
            {offerContent[0].packages.types.map((pack, i) => (
              <li key={i} className={css.option__item}>
                <h4>
                  {pack.name} {pack.prize.timeValue} {pack.prize.timeType} /{' '}
                  {pack.prize.costValue} {pack.prize.costCurrency}
                </h4>
                <ul>
                  {pack.options.map((opt, i) => (
                    <li key={i} className={css.option__item}>
                      {opt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <h3
            className={[css['heading-third'], css.description__heading].join(
              ' '
            )}
          >
            {' '}
          </h3>
          <ul>
            {offerContent[0].others.map((other, i) => (
              <li key={i} className={css.option__item}>
                * {other}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
