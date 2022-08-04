import { useSelector, useDispatch } from 'react-redux';

import { decrementAction, incrementAction } from '../../../redux/counter/counter-actions';

export const CounterControl = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);

  const handleIncrement = () => {
    dispatch(incrementAction());
  };

  const handleDecrement = () => {
    dispatch(decrementAction());
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
