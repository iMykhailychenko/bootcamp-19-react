import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';

import { Counter } from './components/Counter/Counter';
import { Notes } from './components/Notes/Notes';
import { Section } from './components/Section/Section';
import { store } from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <div className="container py-5">
        <Section title="Counter">
          <Counter />
        </Section>

        <Section title="Todo list">
          <Notes />
        </Section>
      </div>
    </Provider>
  );
};
