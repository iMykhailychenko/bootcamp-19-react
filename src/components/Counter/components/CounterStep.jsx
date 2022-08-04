import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { stepAction } from '../../../redux/counter/counter-actions';

export const CounterStep = () => {
  const dispatch = useDispatch();
  const step = useSelector(state => state.counter.step);

  const [value, setValue] = useState(step);
  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const numberValue = Number(value);

    if (isNaN(numberValue)) {
      return;
    }

    // dispatch({ type: 'step', payload: numberValue });
    dispatch(stepAction(numberValue));
  };

  return (
    <form action="#" className="input-group input-group-lg mb-5 w-50" onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} type="text" className="form-control" placeholder="Counter step" />
      <button className="btn btn-outline-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
