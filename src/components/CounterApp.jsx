import React, { useReducer } from "react";

const CounterApp = () => {
  const COUNTER_ACTION = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: "reset",
  };
  let [state, dispatch] = useReducer(reducer, { count: 0 });

  function reducer(state, action) {
    console.log(action);
    switch (action.type) {
      case COUNTER_ACTION.INCREMENT:
        return { ...state, count: state.count + 1 };
      case COUNTER_ACTION.DECREMENT:
        return { ...state, count: state.count - 1 };
      case COUNTER_ACTION.RESET:
        return { ...state, count: 0 };

      default:
        return state;
    }
  }
  function handleIncrement() {
    dispatch({ type: COUNTER_ACTION.INCREMENT });
  }
  function handleDecrement() {
    dispatch({ type: COUNTER_ACTION.DECREMENT });
  }
  function handleReset() {
    dispatch({ type: COUNTER_ACTION.RESET });
  }

  return (
    <div>
      <h2>CounterApp - {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterApp;
