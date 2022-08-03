import { useMemo, useState } from 'react';

import notesJson from '../../assets/notes.json';

import { Filter } from './components/Filter';
import { Form } from './components/Form';
import { List } from './components/List';

export const Notes = () => {
  const [filter, setFilter] = useState('');
  const [notes, setNotes] = useState(notesJson);

  const createNote = value => {
    setNotes(prev => [{ id: Date.now(), value, time: Date.now(), isDone: false }, ...prev]);
  };

  const deleteNote = id => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  const handleToggleNote = id => {
    setNotes(prev => prev.map(note => (note.id === id ? { ...note, isDone: !note.isDone } : note)));
  };

  const filteredNotes = useMemo(
    () => notes.filter(({ value }) => value.toLowerCase().includes(filter.trim().toLowerCase())),
    [filter, notes],
  );

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <Form onSubmit={createNote} />
      <Filter filter={filter} setFilter={setFilter} />
      <List notes={filteredNotes} onToggle={handleToggleNote} onDelete={deleteNote} />
    </div>
  );
};
