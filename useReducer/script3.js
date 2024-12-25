//When the Next State Depends on the Previous State
const { useReducer } = React;

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'double':
        return { count: state.count * 2 };
      default:
        throw new Error('Unknown action type');
    }
  };


function Counter(){
    const [state,dispatch]=useReducer(reducer,initialState);

    return(
        <>
        <p>Count:{state.count}</p>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'double'})}>Double</button>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter/>)
