import { useInfiniteQuery } from '@tanstack/react-query';
import { AnyTxtRecord } from 'dns';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import client from '../../api/client';
import { useDebounce } from '../../hooks/useDebounce';
import { searchWordState } from '../../states/searchState';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

// const getInitialData = (page?: number) => {
//   return client.get(`movie/popular?api_key=${API_KEY}&page=${page}`);
// };

export function useInfiniteScrollQuery() {
  const getInitialData = async ({ pageParam = 1 }) => {
    const res = await client.get(
      `movie/popular?api_key=${API_KEY}&page=${pageParam}`
    );

    return {
      board_page: res.data.results,
      current_page: pageParam,
      isLast: res.data.total_pages === pageParam, //미쳤다.
    };
  };

  const {
    data: getBoard,
    fetchNextPage: getNextPage,
    isSuccess: getBoardIsSuccess,
    hasNextPage: getNextPageIsPossible,
  } = useInfiniteQuery(['popular'], getInitialData, {
    getNextPageParam: (lastPage: any, pages: any) => {
      if (!lastPage.isLast) return lastPage.current_page + 1;
      return undefined;
    },
  });

  return { getBoard, getNextPage, getBoardIsSuccess, getNextPageIsPossible };
}

export function useInfiniteScrollSearchQuery(debouncedSearchWord: string) {
  useEffect(() => {
    console.log(debouncedSearchWord);
    getSearchData({});
  }, [debouncedSearchWord]);

  const getSearchData = async ({
    pageParam = 1,
    searchWord = debouncedSearchWord,
  }) => {
    // const [num, setNum] = useState([1, 2]);

    const res = await client.get(
      `search/movie/?api_key=${API_KEY}&query=${searchWord}&page=${pageParam}`
    );

    console.log('gg', debouncedSearchWord);

    return {
      board_page: res.data.results,
      current_page: pageParam,
      isLast: res.data.total_pages === pageParam, //미쳤다.
      current_word: debouncedSearchWord,
    };
  };

  const {
    data: getBoard,
    fetchNextPage: getNextPage,
    isSuccess: getBoardIsSuccess,
    hasNextPage: getNextPageIsPossible,
  } = useInfiniteQuery(['search'], getSearchData, {
    getNextPageParam: (lastPage: any, pages: any) => {
      if (!lastPage.isLast) return lastPage.current_page + 1;
      return undefined;
    },
  });

  return {
    getBoard,
    getNextPage,
    getBoardIsSuccess,
    getNextPageIsPossible,
  };
}
