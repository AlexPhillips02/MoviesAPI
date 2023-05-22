import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { FetchMovies } from "./components/FetchMovies";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/fetch-movies',
    element: <FetchMovies />
  }
];

export default AppRoutes;
