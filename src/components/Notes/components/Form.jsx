import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const handleChange = event => setValue(event.target.value);
  const handleReset = () => setValue('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
    handleReset();
  };

  return (
    <div className="p-5 mb-5 bg-secondary text-white w-75 rounded-3">
      <form action="#" onSubmit={handleSubmit}>
        <textarea
          rows={5}
          value={value}
          onChange={handleChange}
          placeholder="Create new todo"
          className="form-control d-block mb-4"
        />

        <div className="d-flex justify-content-end">
          <button className="d-block btn btn-light me-4" type="button" onClick={handleReset}>
            Reset form
          </button>
          <button className="d-block btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};
