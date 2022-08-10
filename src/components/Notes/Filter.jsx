import { useDispatch, useSelector } from 'react-redux';

import { filterAction } from '../../redux/notes/notes-slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.notes.filter);

  const handleReset = () => {
    dispatch(filterAction(''));
  };
  const handleChange = event => {
    dispatch(filterAction(event.target.value));
  };

  return (
    <div className="input-group input-group-lg mb-5 w-50">
      <input type="text" className="form-control" placeholder="Notes filter" value={filter} onChange={handleChange} />
      <button className="btn btn-outline-primary" type="button" onClick={handleReset}>
        Reset filter
      </button>
    </div>
  );
};
