import { useInfiniteQuery } from '@tanstack/react-query';
import client from '../../api/client';
import { getPopular, searchMovies } from '../../api/getMovies';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

// const getInitialData = (page?: number) => {
//   return client.get(`movie/popular?api_key=${API_KEY}&page=${page}`);
// };

export function useInfiniteScrollQuery() {
  const getInitialData = async ({ pageParam = 1 }) => {
    const res = await client.get(`movie/popular?api_key=${API_KEY}&page=${pageParam}`);

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
