import styled, { css } from "styled-components";

const PlayBar = () => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <ItemWrapper>
          <PlayBarImg src="/images/home/my-list.svg" />
          <PlayBarItem>My List</PlayBarItem>
        </ItemWrapper>
        <PlayButton>
          <PlayBarImg src="/images/home/play-button.svg" isButton={true} />
          <PlayBarItem isButton={true}>Play</PlayBarItem>
        </PlayButton>
        <ItemWrapper>
          <PlayBarImg src="/images/home/info.svg" />
          <PlayBarItem>Info</PlayBarItem>
        </ItemWrapper>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default PlayBar;

const Wrapper = styled.div`
  width: 375px;

  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  width: 259px;
  height: 45px;

  margin-top: 13px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlayButton = styled.button`
  width: 110.62px;
  height: 45px;

  border: 0;
  outline: 0;

  background-color: #c4c4c4;
  border-radius: 5.625px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const PlayBarImg = styled.img<{ isButton?: boolean }>`
  width: 24px;
  height: 24px;

  ${(props) =>
    props.isButton &&
    css`
      width: 18px;
      height: 21.6px;
    `}
`;

const PlayBarItem = styled.div<{ isButton?: boolean }>`
  font-size: 13.64px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.04px;
  text-align: center;
  color: #ffffff;

  ${(props) =>
    props.isButton &&
    css`
      color: #000;
      font-size: 20.46px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: -0.06px;
    `}
`;
