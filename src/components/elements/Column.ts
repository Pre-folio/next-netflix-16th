import { IWrapperProps } from './../../interfaces/interface';
import styled from 'styled-components';

export const Column = styled.div.attrs<IWrapperProps>((props) => ({
  marginBottom: props.marginBottom || 0,
  justifyContent: props.justifyContent || 'center',
  alignItems: props.alignItems || 'flex-start',
  gap: props.gap || 0,
}))<IWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-bottom: ${(props) => props.marginBottom};
  gap: ${(props) => props.gap};
`;
