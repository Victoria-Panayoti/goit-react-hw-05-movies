import { Suspense, useRef, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'service/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getMovieDetails = async movieId => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails(movieId);
  }, [movieId]);
  const { title, vote_average, overview, genres, poster_path } = movie;
  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <p>User score {Math.round(vote_average)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres && genres.length > 0 && (
        <p>{genres.map(genre => genre.name).join(' ')}</p>
      )}
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
