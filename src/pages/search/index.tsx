import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { getPopular, searchMovies } from '../../api/getMovies';
import Footer from '../../components/elements/Footer';
import SearchBox from '../../components/searchPage/SearchBox';
import SearchList from '../../components/searchPage/SearchList';
import { useDebounce } from '../../hooks/useDebounce';
import { selectedContentState } from '../../states/footerState';
import { searchedMoviesState, searchWordState } from '../../states/searchState';

const SearchPage = (searchedData: any) => {
  const router = useRouter();

  const [selectedIcon, setSelectedIcon] = useRecoilState(selectedContentState);
  const pageName = router.asPath.slice(1);
  const [searchWord, setSearchWord] = useRecoilState(searchWordState);
  const debouncedSearchWord = useDebounce(searchWord, 500);
  const [searchedMovies, setSearchedMovies] = useRecoilState(searchedMoviesState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [popularPageLength, setPopularPageLength] = useState<number>(1);
  const [searchedPageLength, setSearchedPageLength] = useState<number>(1);

  useEffect(() => {
    setIsLoading(true);
    if (debouncedSearchWord) {
      searchMovies(searchWord).then((res) => {
        setSearchedMovies(res.data.results);
        setSearchedPageLength(res.data.total_pages);
        setIsLoading(false);
        return res.data;
      });
    } else {
      getPopular().then((res) => {
        setSearchedPageLength(res.total_pages);
        setSearchedMovies(res.results);
        setIsLoading(false);
        return res.data;
      });
    }
  }, [debouncedSearchWord]);

  useEffect(() => {
    setSelectedIcon(pageName);
  });

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
  min-height: 100%;

  position: relative;

  padding-bottom: 53px;

  display: flex;
  flex-direction: column;
`;

// export async function getServerSideProps() {
//   const initialData = await getPopular();
//   return {
//     props: initialData,
//   };
// }
