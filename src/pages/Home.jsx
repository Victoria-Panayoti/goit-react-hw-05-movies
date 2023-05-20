import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchTrendingMovies } from '../service/Api';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        toast.error(`Smthg went wrong, we re so sorry.`);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>Trending today</h2>
          {movies && (
            <ul>
              {movies.map(({ id, original_title }) => (
                <li key={id}>
                  <Link to={`movies/${id}`} state={{ from: location }}>
                    {original_title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
