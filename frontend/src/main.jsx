import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import Movie,{ loader as movieLoader } from "./routes/movie.jsx";

import './index.css'
import Home from './routes/home.jsx';
import Search from './routes/search.jsx';
import { replaceSpacesWithDashesInURL } from './lib/utils.js';
import Movies from './routes/allmovies.jsx';
import MoviesCategory, {loader as moviescategoryLoader} from './routes/moviescategory.jsx';
import ErrorPage from './components/ErrorPage/index.jsx';
import getUser  from './lib/loaders.js';
import { redirect } from 'react-router-dom';

replaceSpacesWithDashesInURL();
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Root />,

    children: [
      {
        path:'/home',
        element: <Home />,
        loader: async () => {
          const user = await getUser();
          if (!user) {
            return redirect("http://localhost:8080/login");
          }
          return user;
        },
      },
      {
        path: '/movie/:name',
        element: <Movie />,
        loader: movieLoader,
      },
      {
      path: '/search',
      element: <Search />,
    },
    {
      path: '/movies',
      element: <Movies />,
    },
    {
      path: '/movies/:category',
      element: <MoviesCategory />,
      loader: moviescategoryLoader,
    }
    ]
  }
])

const rootElement = document.querySelector("#root");


if (rootElement) {
  ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
} else {
  console.error("No root element found");
}