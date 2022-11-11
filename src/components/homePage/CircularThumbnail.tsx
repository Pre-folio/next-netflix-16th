import styled from "styled-components";
import { IThumbnailProps } from "../../interfaces/interface";
import Link from "next/link";
import Image from "next/image";

const CircularThumbnail = ({ imageSrc, id }: IThumbnailProps) => {
  return (
    <Wrapper>
      <Link href={`/home/${id}`}>
        <img src={imageSrc} width={102} height={102} alt="원형 이미지" />
      </Link>
    </Wrapper>
  );
};

export default CircularThumbnail;

const Wrapper = styled.button`
  width: 102px;
  height: 102px;
  border-radius: 50%;
  overflow: hidden;
  border: none;
  padding: 0;

  cursor: pointer;

  img {
    object-fit: cover;
  }
`;
