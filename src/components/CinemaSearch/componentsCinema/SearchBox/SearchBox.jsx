import { useState } from 'react';

const SearchBox = ({ getSearch }) => {
  const [search, setSearch] = useState('');

  const handleSabmit = e => {
    e.preventDefault();
    getSearch(search);
  };

  const hendleSearch = e => {
    const { value } = e.target;
    setSearch(value);
  };
  return (
    <>
      {' '}
      <form onSubmit={handleSabmit}>
        <input
          type="text"
          placeholder="Search movies"
          name="search"
          value={search}
          onChange={hendleSearch}
        />

        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBox;
