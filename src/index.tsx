import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { store } from './store';
import HomePage from './pages/Home';
import ErrorPage from "./pages/Error";
import ProgramPage from './pages/Program';

import { ROUTES } from './definitions/constants';
import { ProgramType } from './definitions/types';

import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: ROUTES.home.path,
    element: <App />,
    children: [
      {
        path: ROUTES.program.path,
        element: <ProgramPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.tvShows.path,
        element: <HomePage programFilter={ProgramType.Series} />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.movies.path,
        element: <HomePage programFilter={ProgramType.Movie} />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.animatedCarousel.path,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.home.path,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
    ]
  }
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
