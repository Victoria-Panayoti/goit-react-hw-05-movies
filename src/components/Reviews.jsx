const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams();
  // запит опису фільму
  return <div>Reviwes:{movieId}</div>;
};

export default Reviews;
