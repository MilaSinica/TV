import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { THEME } from '../../definitions/constants';

export const Container = styled.nav`
  text-align: left;
  height: ${THEME.constants.navBarHeightMedium};
  padding: 0 4vw;
  position: fixed;
  display: flex;
  background: ${THEME.palettes.inverse};
  box-sizing: border-box;
  width: 100%;
  align-items: flex-end;
  z-index: ${THEME.zIndexes.navBar};

  @media (max-width: ${THEME.media.small}) {
    height: ${THEME.constants.navBarHeightSmall};
  }
`;

export const RoutesWrapper = styled.div`
  display: flex; 
  margin-left: 5vw;
  gap: 2vw;
`;

export const Route = styled(NavLink)`
  text-decoration: none;
  font-weight: 800;
  color: ${THEME.palettes.mute};
  cursor: pointer;
  font-size: 2vw;

  @media (max-width: ${THEME.media.small}) {
    font-size: 1rem;
  }

  .active {
    color: ${THEME.palettes.main};
  }

  .active {
    color: red;
  }

  &:hover {
    text-decoration: underline;
  }
`;
