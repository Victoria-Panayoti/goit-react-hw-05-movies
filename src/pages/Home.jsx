import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { fetchTrendingMovies } from '../service/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getTrendingMovies();
  }, []);
  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
