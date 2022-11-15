import styled from 'styled-components';
import { SearchItemProps } from '../../interfaces/interface';

const SearchItem = (props: SearchItemProps) => {
  return (
    <ItemWrapper>
      <ItemImg src={props.imageSrc} />
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
  background-color: #ffffff;

  width: 146px;
  height: 76px;

  border-radius: 2px;

  object-fit: cover;
`;

const InfoWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const ItemTitle = styled.div`
  height: 30px;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 14.7222px;
  line-height: 30px;

  text-align: center;
  letter-spacing: 0.751111px;

  padding-left: 19px;

  color: #ffffff;
`;

const PlayImg = styled.img`
  padding-right: 14.33px;
`;
