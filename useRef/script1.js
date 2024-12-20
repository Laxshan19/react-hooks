const { useRef,useState,useEffect} = React;
//Preserving Values Between Renders
function PreviousValueTracker({ value }) {
    const prevValue = useRef();
  
    useEffect(() => {
      console.log(value);
      prevValue.current = value; // useEffect hold the value and run after render
    });
  
    return (
      <div>
        <p>Current Value: {value}</p>
        <p>Previous Value: {prevValue.current}</p>
      </div>
    );
  }

  function App() {
    const [value, setValue] = useState(0);
  
    const incrementValue = () => setValue((prev) => prev + 1);
  
    return (
      <div>
        <button onClick={incrementValue}>Increment Value</button>
        <PreviousValueTracker value={value} />
      </div>
    );
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

