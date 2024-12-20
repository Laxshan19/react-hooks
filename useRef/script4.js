//Storing Mutable Values Without Re-rendering
//You can use useRef to store values that change over time but do not need to trigger a re-render.
//Preserving Values Between Renders

const {useRef,useState}=React;

function Counter() {
    const countRef = useRef(0); // Mutable ref to store count
    const [renderCount, setRenderCount] = useState(0);
  
    const incrementCount = () => {
      countRef.current += 1; // Increment the ref value
      console.log('Count (ref):', countRef.current);
    };
  
    const forceRender = () => {
      setRenderCount(renderCount + 1); // Trigger a re-render
    };
  
    return (
      <div>
        <p>Render count: {renderCount}</p>
        <button onClick={incrementCount}>Increment Count (ref)</button>
        <button onClick={forceRender}>Force Re-render</button>
      </div>
    );
  }

  const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(< Counter/>);
/*
=>The countRef value updates, but it doesn't cause a re-render.
=>The forceRender button explicitly updates the state to demonstrate 
   how rendering works independently of the useRef value.

 */