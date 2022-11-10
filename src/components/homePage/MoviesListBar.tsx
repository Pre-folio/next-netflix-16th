import styled from 'styled-components';
import { Row } from '../elements/Row';
import { Column } from '../elements/Column';
import React from 'react';

type MoviesListBarProps = {
  children: React.ReactNode;
  title: string;
  gap: string;
  marginTop?: string;
};

const MoviesListBar = (props: MoviesListBarProps) => {
  return (
    <Wrapper style={{ marginTop: props.marginTop }}>
      <Column gap={props.gap}>
        <div style={{ marginLeft: '4px' }}>{props.title}</div>
        <ContentWrapper>{props.children}</ContentWrapper>
      </Column>
    </Wrapper>
  );
};

export default MoviesListBar;

const Wrapper = styled.div`
  padding-left: 12px;
  color: white;
  font-size: 26px;
  overflow-x: hidden;
  /* background-color: white; */
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 7px;
  overflow-x: scroll;
`;
