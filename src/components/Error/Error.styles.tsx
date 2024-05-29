import styled from 'styled-components';
import { THEME } from '../../definitions/constants';

export const Container = styled.div`
  height: 10rem;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 2rem;
  color: ${THEME.palettes.main};

  svg {
    width: 5rem;
    fill: ${THEME.palettes.main};
  }
`;