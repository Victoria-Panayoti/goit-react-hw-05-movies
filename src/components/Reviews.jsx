import { useEffect } from 'react';
import { useState } from 'react';
import { fetchReview } from 'service/Api';

const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    const getReview = async movieId => {
      try {
        const data = await fetchReview(movieId);
        setReview(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getReview(movieId);
  }, [movieId]);

  return (
    <div>
      <ul>
        {review.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
