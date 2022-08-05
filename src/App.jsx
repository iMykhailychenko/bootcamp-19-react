import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Counter } from './components/Counter/Counter';
import { Notes } from './components/Notes/Notes';
import { Section } from './components/Section/Section';
import { store, persistor } from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<p>Loading...</p>}>
        <div className="container py-5">
          <Section title="Counter">
            <Counter />
          </Section>

          <Section title="Todo list">
            <Notes />
          </Section>
        </div>
      </PersistGate>
    </Provider>
  );
};
