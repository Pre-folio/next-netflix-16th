import { getNowPlaying, getTopRated, getPopular } from '../../api/getMovies';

const HomePage = ({ nowPlayingData, topRatedData, popularData }: any) => {
  console.log(nowPlayingData);
  console.log(topRatedData);
  console.log(popularData);

  return <h1>HomePage</h1>;
};

export default HomePage;

export async function getServerSideProps() {
  const nowPlayingData = await getNowPlaying();
  const topRatedData = await getTopRated();
  const popularData = await getPopular();

  return { props: { nowPlayingData, topRatedData, popularData } };
}
