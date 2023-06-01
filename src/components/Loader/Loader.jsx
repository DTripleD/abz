import Img from '../../images/Preloader.svg';

const Loader = () => {
  return (
    <div className="loader-block">
      <div className="loaddder">
        <img src={Img} alt="" className="loader" />
      </div>
    </div>
  );
};

export default Loader;
