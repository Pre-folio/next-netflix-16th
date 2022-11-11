import styled from "styled-components";
import Footer from "../../components/elements/Footer";
import Navigation from "../../components/elements/Navigation";
import {
  getNowPlaying,
  getTopRated,
  getPopular,
  getUpcoming,
} from "../../api/getMovies";
import CircularThumbnail from "../../components/homePage/CircularThumbnail";
import RectangularThumbnail from "../../components/homePage/RectangularThumbnail";
import MoviesListBar from "../../components/homePage/MoviesListBar";
import { Row } from "../../components/elements/Row";
import Image from "next/image";
import { useRecoilState } from "recoil";
import {
  nowPlyingMoviesState,
  popularMoviesState,
  topRatedMoviesState,
  upComingMoviesState,
} from "../../states/homeState";
import { Column } from "../../components/elements/Column";
import BackgroundImage from "../../components/homePage/BackgroundImage";
import PlayBar from "../../components/homePage/PlayBar";

const HomePage = ({
  nowPlayingData,
  topRatedData,
  popularData,
  upComingData,
  backgroundData,
}: any) => {
  const [nowPlayingMovies, setNowPlayingMovies] =
    useRecoilState(nowPlyingMoviesState);
  const [topRatedMovies, setTopRatedMovies] =
    useRecoilState(topRatedMoviesState);
  const [popularMovies, setPopularMovies] = useRecoilState(popularMoviesState);
  const [upComingMovies, setUpComingMovies] =
    useRecoilState(upComingMoviesState);

  setNowPlayingMovies(nowPlayingData.results);
  setTopRatedMovies(topRatedData.results);
  setPopularMovies(popularData.results);
  setUpComingMovies(upComingData.results);

  // 나중에 없애기. 확인하면서 작업하는 용도
  console.log(nowPlayingData.results);
  console.log(topRatedData.results);
  console.log(popularData.results);
  console.log(upComingData.results);

  const randomNowPlaying =
    nowPlayingData.results[
      Math.floor(Math.random() * nowPlayingData.results.length)
    ];

  return (
    <HomePageContainer>
      <Navigation />
      <BackgroundImage
        id={randomNowPlaying.id}
        imageSrc={`https://image.tmdb.org/t/p/original${randomNowPlaying.backdrop_path}`}
      />
      <PlayBar />

      <Column gap="22px">
        <MoviesListBar title="Previews" gap="23px">
          {upComingMovies.map((movie) => {
            const imagePath = movie.backdrop_path;
            return (
              <CircularThumbnail
                key={movie.id}
                id={movie.id}
                imageSrc={`https://image.tmdb.org/t/p/original${imagePath}`}
              />
            );
          })}
        </MoviesListBar>
        <MoviesListBar title="Now Playing" gap="14px" marginTop="6px">
          {nowPlayingMovies.map((movie) => {
            const imagePath = movie.backdrop_path;
            return (
              <RectangularThumbnail
                key={movie.id}
                id={movie.id}
                imageSrc={`https://image.tmdb.org/t/p/original${imagePath}`}
              />
            );
          })}
        </MoviesListBar>
        <MoviesListBar title="Top Rated" gap="14px">
          {topRatedMovies.map((movie) => {
            const imagePath = movie.backdrop_path;
            return (
              <RectangularThumbnail
                key={movie.id}
                id={movie.id}
                imageSrc={`https://image.tmdb.org/t/p/original${imagePath}`}
              />
            );
          })}
        </MoviesListBar>
        <MoviesListBar title="Popular" gap="14px">
          {popularMovies.map((movie) => {
            const imagePath = movie.backdrop_path;
            return (
              <RectangularThumbnail
                key={movie.id}
                id={movie.id}
                imageSrc={`https://image.tmdb.org/t/p/original${imagePath}`}
              />
            );
          })}
        </MoviesListBar>
      </Column>

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

  /* overflow-x: scroll; */
  /* align-items: center; */
`;

const Wrapper = styled.div`
  overflow-y: auto;
  /* overflow-x: scroll; */
  /* align-items: center; */
`;

export async function getServerSideProps() {
  const nowPlayingData = await getNowPlaying();
  const topRatedData = await getTopRated();
  const popularData = await getPopular();
  const upComingData = await getUpcoming();

  return {
    props: {
      nowPlayingData,
      topRatedData,
      popularData,
      upComingData,
    },
  };
}
