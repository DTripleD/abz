import css from './Header.module.css';
import YourSvg from '../../images/Logo.svg';

const Header = () => {
  return (
    <div className={css.headerWrapper}>
      <img src={YourSvg} alt="Logo" width="104" />
      <div className={css.buttonWrapper}>
        <button type="button" className={css.buttonHeader}>
          Users
        </button>
        <button type="button" className={css.buttonHeader}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
