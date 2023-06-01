import Header from './Header/Header';
import Hero from './Hero/Hero';
import Get from './Get/Get';
import Post from './Post/Post';
import '../App.scss';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Hero />
      <Get />
      <Post />
    </div>
  );
};
