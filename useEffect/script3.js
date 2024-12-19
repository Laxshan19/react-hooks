//example use case-2 Timer and cleanup function
const { useState,useEffect } = React;

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Timer
      </button>
      {show && <Timer />} {/* Timer is mounted/unmounted based on 'show' */}
    </>
  );
}

function Timer() {
useEffect(() => {
    const interval = setInterval(() => {
      console.log('Interval running');
    }, 1000);
  
   return () => clearInterval(interval); // Cleanup the timer
  }, []);
  
  return (
      <>
      <h1>console output</h1>
      </>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App/>);  


  /*
  ________About above code____________________
    =>The cleanup function (return () => clearInterval(interval);) ensures the interval
    is cleared when the Timer component unmounts.
    =>When you hide the Timer by clicking the button, the interval stops, and no more 
    logs appear in the console.

__________what if without cleanup function_________
        =>Without the cleanup function, the interval keeps running even after the Timer component is unmounted.
        =>Clicking "Hide Timer" does not stop the interval, and it continues logging to the console.
        =>When you re-mount the Timer (by clicking "Show Timer"), a new interval starts, leading to
        multiple overlapping intervals and logs.
  */

  /*
_____Effect Cleanup in useEffect_________
=>Effect cleanup is the optional function returned from the useEffect hook
 that React will run to clean up any side effects before:
      1.The component is removed from the screen (unmount).
      2.The useEffect hook runs again due to a dependency change (re-render).


=>It is necessary when you are dealing with resources like:
     -> Timers (setInterval or setTimeout)
     -> Event listeners (window.addEventListener)
     -> Subscriptions (e.g., WebSocket or API connections)


Why is Cleanup Needed?
=>If you do not clean up these resources, it can lead to:
    1.Memory Leaks: Resources like timers or event listeners continue running even though
    the component is no longer on the screen.
    2.Unexpected Behavior: Multiple intervals or listeners stack up and run simultaneously.

  */







