import { Link } from 'react-router-dom';
export const MovieList = ({ movies }) => {
  return (
    
      <ul>
        {movies.map(movie => {
          return(<li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.name}</Link>
            </li>)
        })}
      </ul>
   
  );
};
