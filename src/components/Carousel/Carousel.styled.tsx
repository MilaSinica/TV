import styled from 'styled-components';
import { THEME } from '../../definitions/constants';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  margin-left: 4vw;
`;

export const Track = styled.div`
  display: flex;
  width: 130vw;
  gap: 1vw;

  @media (max-width: ${THEME.media.small}) {
    width: 400vw;
    gap: 3vw;
  }
`;
