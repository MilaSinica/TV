import styled from 'styled-components';
import { THEME } from '../../definitions/constants';

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 2rem;
  padding: 2rem;
  border: 0.25rem dashed ${THEME.palettes.highlight};
  border-radius: 0.5rem;
`;
