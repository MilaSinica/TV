import { Outlet } from "react-router-dom";
import { ROUTES } from './definitions/constants';
import Navigation from './components/Navigation';
import Layout from './components/Layout';

const App = () => {
  return (
    <>
      <Navigation routes={Object.values(ROUTES).filter((route) => route.hasNavItem)} />
      <Layout.Wrapper>
        <Outlet />
      </Layout.Wrapper>
    </>
  );
}

export default App;
