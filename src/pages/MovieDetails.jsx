import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  console.log(backLinkLocationRef);
  // запит повної інформації про фільм
  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <h1>MovieDetails:{movieId}</h1>
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
