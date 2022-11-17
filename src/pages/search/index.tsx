import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { getPopular, searchMovies } from '../../api/getMovies';
import Footer from '../../components/elements/Footer';
import SearchBox from '../../components/searchPage/SearchBox';
import SearchList from '../../components/searchPage/SearchList';
import { selectedContentState } from '../../states/footerState';
import { searchedMoviesState, searchWordState } from '../../states/searchState';

const SearchPage = (searchedData: any) => {
  const [selectedIcon, setSelectedIcon] = useRecoilState(selectedContentState);
  const router = useRouter();
  const pageName = router.asPath.slice(1);
  const [searchWord, setSearchWord] = useRecoilState(searchWordState);
  const [searchedMovies, setSearchedMovies] =
    useRecoilState(searchedMoviesState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (searchWord) {
      fetch(
        `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${searchWord}`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchedMovies(data.results);
          setIsLoading(false);
        });
    } else {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchedMovies(data.results);
          setIsLoading(false);
        });
    }
  }, [searchWord]);

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

// export async function getServerSideProps() {
//   const searchedData: any = await searchMovies('hi');
//   return {
//     props: searchedData,
//   };
// }
