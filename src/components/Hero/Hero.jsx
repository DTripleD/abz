import {
  Section,
  HeroContainer,
  TextWrapper,
  HeroTitle,
  HeroSubTitle,
  HeroButton,
} from './Hero.styled';
import { scrollTo } from 'services/scrollTo/scrollTo';

const Hero = () => {
  return (
    <Section>
      <HeroContainer>
        <TextWrapper>
          <HeroTitle>Test assignment for front-end developer</HeroTitle>
          <HeroSubTitle>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </HeroSubTitle>
          <HeroButton type="button" onClick={() => scrollTo('post')}>
            Sign up
          </HeroButton>
        </TextWrapper>
      </HeroContainer>
    </Section>
  );
};

export default Hero;
