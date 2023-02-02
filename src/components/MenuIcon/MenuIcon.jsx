import { useDispatch } from 'react-redux';
import { openMenu } from 'redux/user/userSlice';
import css from './MenuIcon.module.scss';

export const MenuIcon = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openMenu());
  };

  return (
    <div className={css.menu} onClick={handleClick}>
      <div className={css.menu__line}></div>
      <div className={css.menu__line}></div>
      <div className={css.menu__line}></div>
    </div>
  );
};
