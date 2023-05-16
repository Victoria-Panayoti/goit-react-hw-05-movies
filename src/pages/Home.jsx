import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies] = useState([
    'movie-1',
    'movie-2',
    'movie-3',
    'movie-4',
    'movie-5',
  ]);
  const location = useLocation();
  // запит популярних фільмів
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie}>
            <Link to={`movies/${movie}`} state={{from:location}}>{movie}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
