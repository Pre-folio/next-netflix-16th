import styled from 'styled-components';
import { SearchItemProps } from '../../interfaces/interface';

const SearchItem = (props: SearchItemProps) => {
  return (
    <ItemWrapper>
      {props.imageSrc ? (
        <ItemImg src={`https://image.tmdb.org/t/p/original${props.imageSrc}`} />
      ) : (
        <SkeletonImage />
      )}

      <InfoWrapper>
        <ItemTitle>{props.title}</ItemTitle>
        <PlayImg src='/images/search/play-circle.svg' />
      </InfoWrapper>
    </ItemWrapper>
  );
};

export default SearchItem;

const ItemWrapper = styled.div`
  background-color: #424242;

  width: 375px;
  height: 76px;

  display: flex;
  align-items: center;
`;

const ItemImg = styled.img`
  background-color: #191919;

  box-sizing: content-box;

  width: 146px;
  height: 76px;
  aspect-ratio: 146/76;

  border: 0;
  border-radius: 2px;

  object-fit: cover;
`;

const SkeletonImage = styled.div`
  background: #191919;

  width: 146px;
  height: 76px;
  aspect-ratio: 146/76;

  border-radius: 2px;
`;

const InfoWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const ItemTitle = styled.div`
  height: 30px;
  width: 170px;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 14.7222px;
  line-height: 30px;

  letter-spacing: 0.751111px;

  padding-left: 19px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #ffffff;
`;

const PlayImg = styled.img`
  padding-right: 14.33px;
`;
