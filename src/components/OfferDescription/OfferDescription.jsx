import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectOfferContent } from 'redux/user/userSelectors';
import { offerDescription } from 'redux/user/userSlice';
import css from './OfferDescription.module.scss';

export const OfferDescription = offerType => {
  const location = useLocation();
  const dispatch = useDispatch();
  const offerContent = useSelector(selectOfferContent);

  useEffect(() => {
    dispatch(offerDescription(offerType));
  }, [location, offerType, dispatch]);

  return (
    <section className={css.container}>
      {!!offerContent && (
        <div className={css.description}>
          {offerContent[0].description.map((descr, i) => (
            <p key={i} className={css['paragraph-first']}>
              {descr}
            </p>
          ))}
        </div>
      )}
      {!!offerContent && (
        <>
          <h3
            className={[css['heading-third'], css.description__heading].join(
              ' '
            )}
          >
            Atrakcje
          </h3>
          <ul className={css.option}>
            {offerContent[0].options.map((opt, i) => (
              <li key={i} className={css.option__item}>
                {opt}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
