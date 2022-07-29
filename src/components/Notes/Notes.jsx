import { useState } from 'react';

const NotesForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    setValue('');
    onSubmit(value);
  };

  return (
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
  );
};

export const Notes = () => {
  const [notes, setNotes] = useState([]);

  const handleSubmit = value => {
    setNotes(prev => [...prev, { id: Date.now(), note: value }]);
  };

  return (
    <>
      <NotesForm onSubmit={handleSubmit} />

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
