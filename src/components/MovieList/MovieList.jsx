import PropTypes from 'prop-types';
import { SearchList } from './MovieList.styled';
import { StyledLink } from 'pages/Home/Home.styled';

const MovieList = ({ movies, location }) => {
  return (
    <SearchList>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </li>
      ))}
    </SearchList>
  );
};
export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};