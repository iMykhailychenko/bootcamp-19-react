export const Filter = ({ filter, setFilter }) => {
  const handleReset = () => setFilter('');
  const handleChange = event => setFilter(event.target.value);

  return (
    <div className="input-group input-group-lg mb-5 w-50">
      <input type="text" className="form-control" placeholder="Notes filter" value={filter} onChange={handleChange} />
      <button className="btn btn-outline-primary" type="button" onClick={handleReset}>
        Reset filter
      </button>
    </div>
  );
};
