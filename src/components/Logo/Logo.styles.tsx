import styled from 'styled-components';
import { THEME } from '../../definitions/constants';

export const Container = styled.div`
  display: flex;
  svg {
    fill: ${THEME.palettes.main};
    width: 15vw;
  }
`;
