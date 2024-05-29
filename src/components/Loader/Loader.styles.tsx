import styled, { keyframes } from 'styled-components';
import { THEME } from '../../definitions/constants';

export const InfiniteRotationDiv = styled.div`
  width: auto;
  height: 100%;
  animation: ${keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`} 1s linear infinite;
  &&& {
    > * {
      width: auto;
      height: 100%;
    }
  }

  svg {
    fill: ${THEME.palettes.mute};
  }
`;

export const LoaderContainer = styled.div`
  height: 4rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
