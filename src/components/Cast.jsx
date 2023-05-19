import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'service/Api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    const getCast = async movieId => {
      try {
        const data = await fetchCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast(movieId);
  }, [movieId]);
  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
