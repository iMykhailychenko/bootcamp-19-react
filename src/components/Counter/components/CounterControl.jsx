import { useState } from 'react';

export const CounterControl = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCounter(prev => prev - 1);
  };
  return (
    <>
      <div className="p-3 mb-5 bg-secondary text-white text-center w-50 rounded-3" style={{ fontSize: '40px' }}>
        {counter}
      </div>
      <div className="btn-group btn-group-lg w-25">
        <button type="button" className="btn btn-outline-dark w-25" onClick={handleDecrement}>
          -
        </button>
        <button type="button" className="btn btn-outline-dark w-25" onClick={handleIncrement}>
          +
        </button>
      </div>
    </>
  );
};
