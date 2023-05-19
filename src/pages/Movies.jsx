import { useLocation, useSearchParams} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchSearchMovies } from 'service/Api';
import SearchBox from 'components/SearchBox';
import MovieList from 'components/MovieList';


const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    const getSearchMovie = async () => {
      try {
        const data = await fetchSearchMovies(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error)
        setMovies([]);
      }
    }
    getSearchMovie();
  }, [searchParams]);
  
  const handleSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <div>
      <SearchBox onSubmit={handleSubmit} />
      <MovieList movies={movies} location={location} />
    </div>
  );
};
export default Movies;
