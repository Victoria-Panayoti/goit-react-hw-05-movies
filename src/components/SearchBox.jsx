export const SearchBox = ({ name, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => onChange(e.target.value)}
      />
      <button type='submit'>Search</button>
    </div>
  );
};
