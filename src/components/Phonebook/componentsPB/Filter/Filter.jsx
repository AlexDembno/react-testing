const Filter = ({ onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      title="filter contacts"
      onChange={onChange}
    />
  );
};

export default Filter;
