import styled from 'styled-components';
import { IThumbnailProps } from '../../interfaces/interface';
import Link from 'next/link';
import Image from 'next/image';

const CircularThumbnail = ({ onClick, imageSrc }: IThumbnailProps) => {
  return (
    <Wrapper onClick={onClick}>
      <Link href={'/home/id'}>
        <Image src="" width={102} height={102} alt="원형 이미지" />
      </Link>
    </Wrapper>
  );
};

export default CircularThumbnail;

const Wrapper = styled.button`
  width: 102px;
  height: 102px;
  border-radius: 50%;
  background-color: white;
  overflow: hidden;
  border: none;

  cursor: pointer;
`;
