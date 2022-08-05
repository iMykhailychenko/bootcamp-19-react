import { Filter } from './components/Filter';
import { Form } from './components/Form';
import { List } from './components/List';

export const Notes = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <Form />
      <Filter />
      <List />
    </div>
  );
};
