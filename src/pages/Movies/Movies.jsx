import { useLocation, useSearchParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchSearchMovies } from 'service/Api';
import { Loader } from 'components/Loader/Loader';
import SearchBox from 'components/SearchBox/SearchBox';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;
    setIsLoading(true);
    const getSearchMovie = async () => {
      try {
        const data = await fetchSearchMovies(query);
        if (data.results === 0) return;
        setMovies(data.results);
      } catch (error) {
        toast.error('Smthg went wrong, we re so sorry.')
        setMovies([]);
      } finally{setIsLoading(false)}
    }
    getSearchMovie();
  }, [searchParams]);
  
  const handleSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <div>
      <SearchBox onSubmit={handleSubmit} />
      {isLoading&&<Loader/>}
      <MovieList movies={movies} location={location} />
    </div>
  );
};
export default Movies;
