import Logo from '../Logo';
import { Route } from '../../definitions/types';
import { THEME } from '../../definitions/constants';
import * as Styled from './Navigation.styles';
import { useLocation } from 'react-router-dom';

type NavigationProps = {
  routes: Route[];
};

export const NavigationView = ({
  routes,
  ...rest
}: NavigationProps) => {
  const location = useLocation();

  // Fallback for Program route to highlight Home NavLink
  const shouldHighlight = (route: Route) => Boolean(route.match && location.pathname.match(route.match));

  return (
    <Styled.Container {...rest}>
      <Logo />
      <Styled.RoutesWrapper>
        {routes.map((route) => (
          <Styled.Route to={route.path} key={route.path} end
            style={({ isActive }) => ({
              color: isActive || shouldHighlight(route) ? THEME.palettes.main : THEME.palettes.mute
            })}
          >
            {route.title}
          </Styled.Route>
        ))}
      </Styled.RoutesWrapper>
    </Styled.Container>
  );
};
