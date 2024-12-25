const { useReducer} = React;
const initialState = {
    count: 0,
    step: 1,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + state.step };
      case 'decrement':
        return { ...state, count: state.count - state.step };
      case 'setStep':
        return { ...state, step: action.payload };
      case 'reset':
        return initialState;
      default:
        throw new Error('Unknown action type');
    }
  };
  
  function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <div>
        <p>Count: {state.count}</p>
        <input
          type="number"
          value={state.step}
          onChange={(e) => dispatch({ type: 'setStep', payload: Number(e.target.value) })}
        />
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< Counter />);
