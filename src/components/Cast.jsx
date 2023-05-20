import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        toast.error('Smthg went wrong, we re so sorry.')
      }
    };
    getCast(movieId);
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                  alt={name}
                />
              ) : (
                <img src="/src/components/not-found.jpg" alt={name} />
              )}
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We didn't have any result</p>
      )}
    </div>
  );
};

export default Cast;
