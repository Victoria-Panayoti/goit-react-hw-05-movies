import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchBox } from '../components/SearchBox';
import { MovieList } from '../components/MovieList';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const movies = [
    { id: '1', name: 'angel' },
    { id: '2', name: 'demon' },
    { id: '3', name: 'batman' },
    { id: '4', name: 'potter' },
    { id: '5', name: 'angels' },
  ];
  const movieName = searchParams.get('name') ?? '';
  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };
  const visibleMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(movieName.toLowerCase())
  );
  const location = useLocation();

  // http запит за ключовим словом
  return (
    <div>
      <SearchBox value={movieName} onChange={updateQueryString} />
      <MovieList movies={visibleMovies} state={{ from: location }} />
    </div>
  );
};

export default Movies;
