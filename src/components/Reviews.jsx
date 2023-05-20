import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
       toast.error('Smthg went wrong, we re so sorry.')
      }
    };
    getReview(movieId);
  }, [movieId]);

  return (
    <div>
      {review.length>0?(<ul>
        {review.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>) : (
          <p>We didn't have any review yet</p>
      )}
      
    </div>
  );
};

export default Reviews;
