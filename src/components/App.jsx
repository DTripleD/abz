import Header from './Header/Header';
import Hero from './Hero/Hero';
import Get from './Get/Get';
import Post from './Post/Post';

export const App = () => {
  return (
    <div
      style={{
        width: 1170,
        display: 'flex',

        paddingLeft: '15px',
        paddingRight: '15px',
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
