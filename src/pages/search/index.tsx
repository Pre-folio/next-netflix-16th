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
import { useInfiniteScrollQuery } from '../../components/searchPage/useInfiniteScrollQuery';
import { useInView } from 'react-intersection-observer';
import SkeletonItem from '../../components/searchPage/SkeletonItem';
import SearchItem from '../../components/searchPage/SearchItem';

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
  const { getBoard, getNextPage, getBoardIsSuccess, getNextPageIsPossible } = useInfiniteScrollQuery();
  const [ref, isView] = useInView();

  useEffect(() => {
    if (isView && getNextPageIsPossible) {
      getNextPage();
    }
  }, [isView, getBoard]);

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
      <div className="home-wrapper">
        {debouncedSearchWord ? <></> : (
        {
          // 데이터를 불러오는데 성공하고 데이터가 0개가 아닐 때 렌더링
          getBoardIsSuccess && getBoard!.pages
            ? getBoard!.pages.map((page_data: any, page_num: any) => {
                const board_page = page_data.board_page;
                console.log(board_page);

                return board_page?.map((item: any, idx: any) => {
                  if (
                    // 마지막 요소에 ref 달아주기
                    getBoard!.pages.length - 1 === page_num &&
                    board_page.length - 1 === idx
                  ) {
                    return (
                      // 마지막 요소에 ref 넣기 위해 div로 감싸기
                      <div ref={ref} key={item.board_id}>
                        <SkeletonItem key={item.board_id} />
                      </div>
                    );
                  } else {
                    return <SearchItem key={item.board_id} {...item} />;
                  }
                });
              })
            : null
        }
        )}
      </div>
      {/* <SearchList isLoading={isLoading} /> */}
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
  gap: 3px;
`;

// export async function getServerSideProps() {
//   const initialData = await getPopular();
//   return {
//     props: initialData,
//   };
// }
