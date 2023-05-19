import { useState } from "react";

const SearchBox = ({onSubmit }) => {
  const [query, setQuery] = useState('');
  const changeInput = e => {
    setQuery(e.currentTarget.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    setQuery(query.toLowerCase().trim());
    onSubmit(query);
    setQuery('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
       name="search"
        type="text"
        value={query}
        placeholder="Search movies"
        required
        autoFocus
        autoComplete="off"
        onChange={changeInput}
      />
      <button type='submit'>Search</button>
    </form>
  );
};
export default SearchBox;