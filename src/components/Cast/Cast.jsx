import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCast } from 'service/Api';
import defaultImg from '../../components/not-found.jpg'
import { CastImg, CastItem, CastList } from './Cast.styled';

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
        <CastList>
          {cast.map(({ id, name, character, profile_path }) => (
            <CastItem key={id}>
              {profile_path ? (
                <CastImg
                  src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                  alt={name}
                />
              ) : (
                  <CastImg src={defaultImg} alt={name} />
              )}
              <p>{name}</p>
              <p>Character: {character}</p>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <p>We didn't have any result</p>
      )}
    </div>
  );
};

export default Cast;
