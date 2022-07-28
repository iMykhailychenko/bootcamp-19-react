import { useState } from 'react';

export const Notes = () => {
  const [value, setValue] = useState('');
  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    setNotes(prev => [...prev, { id: Date.now(), note: value }]);
    setValue('');
  };

  const [notes, setNotes] = useState([]);

  return (
    <>
      <form className="input-group mb-5 w-50" onSubmit={handleSubmit}>
        <input
          value={value}
          type="search"
          onChange={handleChange}
          className="form-control"
          placeholder="Create note ..."
        />
        <button className="btn btn-primary" type="submit" style={{ width: '150px' }}>
          Create note
        </button>
      </form>

      <ul className="list-group mb-5">
        {notes.map(item => (
          <li key={item.id} className="list-group-item">
            {item.note}
          </li>
        ))}
      </ul>
    </>
  );
};
