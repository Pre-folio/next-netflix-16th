import styled from "styled-components";
import Image from "next/image";
import { IThumbnailProps } from "../../interfaces/interface";

const BackgroundImage = ({ imageSrc, id }: IThumbnailProps) => {
  return (
    <Wrapper>
      <img src={imageSrc} width={375} height={415} alt="랜덤 이미지" />
    </Wrapper>
  );
};

export default BackgroundImage;

const Wrapper = styled.div`
  position: relative;

  width: 375px;
  height: 415px;

  background-color: #5a5a5a;

  img {
    object-fit: cover;
  }
`;
