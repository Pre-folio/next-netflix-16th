import { getNowPlaying } from '../../api/getMovies';
import client from '../../api/client';

const HomePage = ({ data }: any) => {
  console.log(data);

  return <h1>HomePage</h1>;
};

export default HomePage;

export async function getServerSideProps() {
  const data = await getNowPlaying();
  return { props: { data } };
}
