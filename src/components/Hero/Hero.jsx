import css from './Hero.module.css';

const Hero = () => {
  return (
    <div className={css.heroContainer}>
      <div className={css.textWrapper}>
        <h1 className={css.heroTitle}>
          Test assignment for front-end developer
        </h1>
        <p className={css.heroSubTitle}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <button className={css.buttonHero} type="button">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Hero;
