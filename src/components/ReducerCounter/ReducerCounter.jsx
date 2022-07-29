import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'decrement': {
      const newState = state.count - action.payload;
      return { ...state, count: newState < 0 ? 0 : newState };
    }

    case 'increment': {
      return { ...state, count: state.count + action.payload };
      // state.count += action.payload;
      // return state;
    }

    // case

    default:
      return state;
  }
}

export const ReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, isLoading: false, isDisablesd: false });

  return (
    <div className="my-5">
      <p>Count: {state.count}</p>
      <p>{JSON.stringify(state, null, 4)}</p>
      <button className="btn btn-primary" type="button" onClick={() => dispatch({ type: 'decrement', payload: 5 })}>
        -
      </button>
      <button className="btn btn-primary" type="button" onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        +
      </button>
    </div>
  );
};

// const initialState = { count: 0 };
//
// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }
//
// export const ReducerCounter = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//     </>
//   );
// };
