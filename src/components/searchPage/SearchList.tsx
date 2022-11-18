import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { searchMovies } from '../../api/getMovies';
import { SearchListProps } from '../../interfaces/interface';
import { searchedMoviesState, searchWordState } from '../../states/searchState';
import SearchItem from './SearchItem';
import SkeletonItem from './SkeletonItem';

const SearchList = ({ isLoading }: SearchListProps) => {
  const [searchedMovies, setSearchedMovies] = useRecoilState(searchedMoviesState);
  let arr = new Array(20).fill(1);

  return (
    <ListWrapper>
      <ListTitle>Top Searches</ListTitle>
      {isLoading
        ? arr.map((arr, index) => {
            return <SkeletonItem key={index} />;
          })
        : searchedMovies.map((movie) => {
            return <SearchItem key={movie.id} {...movie} />;
          })}
    </ListWrapper>
  );

  // return (
  //   <ListWrapper>
  //     <ListTitle>Top Searches</ListTitle>
  //     {isLoading && <SkeletonItem />}
  //     {isLoading &&
  //       searchedMovies.map((movie) => {
  //         return <SearchItem key={movie.id} {...movie} />;
  //       })}
  //   </ListWrapper>
  // );
};

export default SearchList;

const ListWrapper = styled.div``;

const ListTitle = styled.h1`
  font-size: 27px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.07339449226856232px;

  margin: 0;
  padding: 21px 10px 21px 10px;

  color: #ffffff;
`;

const SearchItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
