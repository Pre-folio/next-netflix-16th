import styled from "styled-components";
import {
  getNowPlaying,
  getTopRated,
  getPopular,
  getUpcoming,
} from "../../api/getMovies";
import Footer from "../../components/elements/Footer";
import Navigation from "../../components/elements/Navigation";
import CircularThumbnail from "../../components/homePage/CircularThumbnail";
import RectangularThumbnail from "../../components/homePage/RectangularThumbnail";

const HomePage = ({
  nowPlayingData,
  topRatedData,
  popularData,
  upComingData,
}: any) => {
  console.log(nowPlayingData);
  console.log(topRatedData);
  console.log(popularData);
  console.log(upComingData);

  return (
    <HomePageContainer>
      <Navigation />
      <CircularThumbnail />
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
