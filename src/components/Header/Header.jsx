import YourSvg from '../../images/Logo.svg';
import { Wrapper, ButtomWrapper, Button } from './Header.styled';

const Header = () => {
  return (
    <Wrapper>
      <img src={YourSvg} alt="Logo" width="104" />
      <ButtomWrapper>
        <Button type="button">Users</Button>
        <Button type="button">Sign up</Button>
      </ButtomWrapper>
    </Wrapper>
  );
};

export default Header;
