import styled from 'styled-components';
import Footer from '../../components/elements/Footer';
import Navigation from '../../components/elements/Navigation';
import { getNowPlaying, getTopRated, getPopular, getUpcoming } from '../../api/getMovies';
import CircularThumbnail from '../../components/homePage/CircularThumbnail';
import RectangularThumbnail from '../../components/homePage/RectangularThumbnail';
import Image from 'next/image';

const HomePage = ({ nowPlayingData, topRatedData, popularData, upComingData }: any) => {
  console.log(nowPlayingData);
  console.log(topRatedData);
  console.log(popularData);
  console.log(upComingData);

  const onClick = () => {
    console.log('hi');
  };

  const url = upComingData.results[0].backdrop_path;

  return (
    <HomePageContainer>
      <Navigation />
      <h1>HomePage</h1>
      <CircularThumbnail onClick={onClick} imageSrc={`https://image.tmdb.org/t/p/original${url}`} />
      <RectangularThumbnail />
      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;

const HomePageContainer = styled.div`
  width: 375px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export async function getServerSideProps() {
  const nowPlayingData = await getNowPlaying();
  const topRatedData = await getTopRated();
  const popularData = await getPopular();
  const upComingData = await getUpcoming();

  return { props: { nowPlayingData, topRatedData, popularData, upComingData } };
}
