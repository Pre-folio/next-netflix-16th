import { getNowPlaying, getTopRated, getPopular, getUpcoming } from '../../api/getMovies';
import CircularThumbnail from '../../components/homePage/CircularThumbnail';
import RectangularThumbnail from '../../components/homePage/RectangularThumbnail';

const HomePage = ({ nowPlayingData, topRatedData, popularData, upComingData }: any) => {
  console.log(nowPlayingData);
  console.log(topRatedData);
  console.log(popularData);
  console.log(upComingData);

  return (
    <>
      <h1>HomePage</h1>
      <CircularThumbnail />
      <RectangularThumbnail />
    </>
  );
};

export default HomePage;

export async function getServerSideProps() {
  const nowPlayingData = await getNowPlaying();
  const topRatedData = await getTopRated();
  const popularData = await getPopular();
  const upComingData = await getUpcoming();

  return { props: { nowPlayingData, topRatedData, popularData, upComingData } };
}
