import classNames from 'classnames';
import { formatDistanceToNow } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import { filteredNotesSelector, filterSelector, notesListSelector } from '../../redux/notes/notes-selectors';
import { deleteNoteAction, toggleNoteAction } from '../../redux/notes/notes-slice';

// const selector = state => {
//   const { notesList, filter } = state.notes;
//
//   return { notesList, filter };
// };

// store -> state -> { notes: [] ...rest }

export const List = () => {
  const dispatch = useDispatch();
  // const notesData = useSelector(nodesDataSelector);
  // const notesData = useSelector(selector, shallowEqual);
  // {} === {} shallowEqual -> true

  // useState
  // const {notesList, filter} = useSelector(state => state.notes);
  // const notes = useSelector(notesListSelector);
  // const filter = useSelector(filterSelector);

  const notesList = useSelector(filteredNotesSelector);

  const onDelete = id => {
    dispatch(deleteNoteAction(id));
  };

  const onToggle = id => {
    dispatch(toggleNoteAction(id));
  };

  if (!notesList.length) {
    return (
      <div className="list-group w-100">
        <div className="list-group-item w-100 p-5">
          <h5 className="m-0 text-center w-100">Noting to show</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="list-group w-100">
      {notesList.map(note => (
        <div key={note.id} className="list-group-item w-100 p-4">
          <div className="d-flex w-100 justify-content-between pb-3">
            <h5 className="mb-1">
              <span className={classNames('badge rounded-pill', note.isDone ? 'bg-success' : 'bg-primary')}>
                {note.isDone ? 'Done' : 'In progress'}
              </span>
            </h5>

            <div className="d-flex align-items-center">
              <small>{formatDistanceToNow(note.time, { addSuffix: true })}</small>
              <button type="button" className="btn-close ms-5" aria-label="Delete" onClick={() => onDelete(note.id)} />
            </div>
          </div>

          <p className="mb-1">{note.value}</p>

          <label className="d-flex form-check-label mt-4 w-25">
            <input
              type="checkbox"
              checked={note.isDone}
              onChange={() => onToggle(note.id)}
              className="form-check-input me-2"
            />
            <p>First checkbox</p>
          </label>
        </div>
      ))}
    </div>
  );
};
