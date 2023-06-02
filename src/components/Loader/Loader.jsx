import Img from '../../images/svg/preloader.svg';

const Loader = () => {
  return (
    <div className="loader-block">
      <img src={Img} alt="" className="loader" />
    </div>
  );
};

export default Loader;
