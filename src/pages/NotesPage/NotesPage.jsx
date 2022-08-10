import { Counter } from '../../components/Counter/Counter';
import { Filter } from '../../components/Notes/Filter';
import { Form } from '../../components/Notes/Form';
import { List } from '../../components/Notes/List';

export const NotesPage = () => {
  return (
    <>
      <Counter />

      <div className="d-flex justify-content-center flex-column align-items-center">
        <Form />
        <Filter />
        <List />
      </div>
    </>
  );
};
