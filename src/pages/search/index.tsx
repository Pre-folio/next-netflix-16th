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

const SearchPage = () => {
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
      searchMovies(searchWord).then((res) => {
        setSearchedMovies(res.data.results);
        setIsLoading(false);
        return res.data;
      });
    } else {
      getPopular().then((res) => {
        setSearchedMovies(res.results);
        setIsLoading(false);
        return res.data;
      });
    }
  }, [searchWord]);

  useEffect(() => {
    setSelectedIcon(pageName);
  }, []);

  return (
    <SearchPageContainer>
      <SearchBox />
      <SearchList isLoading={isLoading} />
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
//   const initialData = await getPopular();
//   return {
//     props: initialData,
//   };
// }
