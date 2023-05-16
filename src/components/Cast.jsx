const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams();
  // запит акторського складу
  return <div>Cast:{movieId}</div>;
};

export default Cast;
