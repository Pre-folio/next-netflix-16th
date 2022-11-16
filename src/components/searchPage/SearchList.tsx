import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { searchMovies } from '../../api/getMovies';
import { searchedMoviesState, searchWordState } from '../../states/searchState';
import SearchItem from './SearchItem';

const SearchList = () => {
  const [searchedMovies, setSearchedMovies] =
    useRecoilState(searchedMoviesState);

  return (
    <ListWrapper>
      <ListTitle>Top Searches</ListTitle>
      {searchedMovies.map((movie) => {
        return (
          <SearchItem
            key={movie.id}
            title={movie.original_title}
            imageSrc={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          />
        );
      })}
    </ListWrapper>
  );
};

export default SearchList;

const ListWrapper = styled.div``;

const ListTitle = styled.h1`
  font-family: SF Pro Display;
  font-size: 27px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.07339449226856232px;

  margin: 0;
  padding: 21px 10px 21px 10px;

  color: #ffffff;
`;
