import styled from '@emotion/styled';

import BackgroundImage from '../../images/background-image.jpg';

export const Section = styled.section`
  background-color: #f4e041;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${BackgroundImage});
  max-width: 1170px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrapper = styled.div`
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 40px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 21px;
`;

export const HeroSubTitle = styled.p`
  font-size: 16px;
  line-height: 1.62;

  text-align: center;

  color: #ffffff;
  margin-bottom: 32px;
`;
