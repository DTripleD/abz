import YourSvg from '../../images/svg/logo.svg';
import { Wrapper, ButtomWrapper, HeaderSection } from './Header.styled';
import { scrollTo } from 'services/scrollTo/scrollTo';

const Header = () => {
  return (
    <HeaderSection>
      <Wrapper className="header-wrapper">
        <img src={YourSvg} alt="Logo" width="104" height="26" />
        <ButtomWrapper>
          <button type="button" onClick={() => scrollTo('get')}>
            Users
          </button>
          <button type="button" onClick={() => scrollTo('post')}>
            Sign up
          </button>
        </ButtomWrapper>
      </Wrapper>
    </HeaderSection>
  );
};

export default Header;
