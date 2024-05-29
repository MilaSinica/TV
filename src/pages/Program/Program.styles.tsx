import styled, { css } from 'styled-components';
import { THEME } from '../../definitions/constants';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 4vw;
  gap: 4vw;

  @media (max-width: ${THEME.media.small}) {
    img {
      width: calc(100% - 8vw);
    }
  }
`;

export const Meta = styled.div`
  max-width: calc(100% - 30vw - 8vw);

  @media (max-width: ${THEME.media.small}) {
    max-width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 4vw;

  @media (max-width: ${THEME.media.small}) {
    flex-direction: column;
  }
`;

