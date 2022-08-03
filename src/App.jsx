import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { Counter } from './components/Counter/Counter';
import { Notes } from './components/Notes/Notes';
import { Section } from './components/Section/Section';

export const App = () => {
  return (
    <div className="container py-5">
      <Section title="Counter">
        <Counter />
      </Section>

      <Section title="Todo list">
        <Notes />
      </Section>
    </div>
  );
};
