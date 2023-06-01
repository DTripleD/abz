import Img from '../../images/Preloader.svg';

const Loader = () => {
  return (
    <div className="loader-block">
      <img src={Img} alt="" className="loader" />
    </div>
  );
};

export default Loader;
