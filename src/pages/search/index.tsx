import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { searchMovies } from '../../api/getMovies';
import Footer from '../../components/elements/Footer';
import SearchBox from '../../components/searchPage/SearchBox';
import SearchList from '../../components/searchPage/SearchList';
import { selectedContentState } from '../../states/footerState';
import { searchedMoviesState } from '../../states/searchState';

const SearchPage = (searchedData: any) => {
  const [selectedIcon, setSelectedIcon] = useRecoilState(selectedContentState);
  const router = useRouter();
  const pageName = router.asPath.slice(1);
  const [searchWord, setSearchWord] = useState('');
  const [searchedMovies, setSearchedMovies] =
    useRecoilState(searchedMoviesState);

  console.log(searchedData.results);
  setSearchedMovies(searchedData.results);

  // useEffect(() => {
  //   console.log(searchedData.results);
  //   setSearchedMovies(searchedData.results);
  // }, [searchedData]);

  useEffect(() => {
    setSelectedIcon(pageName);
  }, []);

  return (
    <SearchPageContainer>
      <SearchBox />
      <SearchList />
      <Footer />
    </SearchPageContainer>
  );
};

export default SearchPage;

const SearchPageContainer = styled.div`
  width: 375px;
  height: auto;

  display: flex;
  flex-direction: column;
`;

export async function getServerSideProps() {
  const searchedData: any = await searchMovies('ter');

  return {
    props: searchedData,
  };
}
