import YourSvg from '../../images/Logo.svg';
import { Wrapper, ButtomWrapper, Button } from './Header.styled';
import { scrollTo } from 'services/scrollTo/scrollTo';

const Header = () => {
  return (
    <Wrapper className="header-wrapper">
      <img src={YourSvg} alt="Logo" width="104" />
      <ButtomWrapper>
        <Button type="button" onClick={() => scrollTo('get')}>
          Users
        </Button>
        <Button type="button" onClick={() => scrollTo('post')}>
          Sign up
        </Button>
      </ButtomWrapper>
    </Wrapper>
  );
};

export default Header;
