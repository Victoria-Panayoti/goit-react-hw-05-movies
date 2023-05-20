import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchTrendingMovies } from '../../service/Api';
import { Loader } from 'components/Loader/Loader';
import { HomeList, StyledLink } from './Home.styled';

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
            <HomeList>
              {movies.map(({ id, original_title }) => (
                <li key={id}>
                  <StyledLink to={`movies/${id}`} state={{ from: location }}>
                    {original_title}
                  </StyledLink>
                </li>
              ))}
            </HomeList>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
