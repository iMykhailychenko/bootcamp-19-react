import { CounterControl } from './components/CounterControl';
import { CounterStep } from './components/CounterStep';

export const Counter = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center mb-5">
      <CounterStep />
      <CounterControl />
    </div>
  );
};
