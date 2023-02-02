import css from './UserMenu.module.scss';

export const UserMenu = () => {
  return (
    <div className={css.menu}>
      <div className={[css['btn-close'], css.menu__close].join(' ')}>X</div>
      <NavLink to="/" className={[css.logo].join(' ')}></NavLink>
      <nav className={[css.nav].join(' ')}>
        <NavLink className={css.nav__link} to="/">
          O nas
        </NavLink>
        <NavLink className={css.nav__link} to="/oferta">
          Oferta
        </NavLink>
        <NavLink className={css.nav__link} to="/galeria">
          Galeria
        </NavLink>
        <a className={css.nav__link} href="#contact">
          Kontakt
        </a>
      </nav>
    </div>
  );
};
