import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, Input } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const changeInput = e => {
    setQuery(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setQuery(query.toLowerCase().trim());
    if (query === '') {
      return toast.warn('input value can not be empty');
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        value={query}
        placeholder="Search movies"
        required
        autoFocus
        autoComplete="off"
        onChange={changeInput}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};
export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
