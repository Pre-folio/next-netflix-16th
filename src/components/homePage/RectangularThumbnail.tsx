import Link from 'next/link';
import styled from 'styled-components';
import { IThumbnailProps } from '../../interfaces/interface';

const RectangularThumbnail = ({ imageSrc, id }: IThumbnailProps) => {
  return (
    <Wrapper>
      <Link href={`/home/${id}`}>
        <img src={imageSrc} width={102} height={102} alt="직사각형 이미지" />
      </Link>
    </Wrapper>
  );
};

export default RectangularThumbnail;

const Wrapper = styled.button`
  width: 103px;
  height: 161px;
  overflow: hidden;
  border: none;

  cursor: pointer;

  img {
    object-fit: cover;
  }
`;
