import { Suspense, useRef, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMovieDetails } from 'service/Api';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setIsLoading(true);
    const getMovieDetails = async movieId => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        toast.error('Smthg went wrong, we re so sorry.');
      } finally{setIsLoading(false)}
    };
    getMovieDetails(movieId);
  }, [movieId]);
  const { title, vote_average, overview, genres, poster_path } = movie;
  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {isLoading && <Loader />}
      {poster_path
        ? <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
        :<img src='/src/components/not-found.jpg' alt={title} />
      }
      <h2>{title}</h2>
      <p>User score {Math.round(vote_average)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres && genres.length > 0 && (
        <p>{genres.map(genre => genre.name).join(' ')}</p>
      )}
      <h3>Additional information</h3>
      {movie &&(<ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>)}
      
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
