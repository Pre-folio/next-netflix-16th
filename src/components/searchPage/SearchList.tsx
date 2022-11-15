import styled from 'styled-components';
import SearchItem from './SearchItem';

const SearchList = () => {
  return (
    <ListWrapper>
      <ListTitle>Top Searches</ListTitle>
      <SearchItem
        title={'Citation'}
        imageSrc={`https://image.tmdb.org/t/p/original`}
      />
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
